import _ from 'lodash';
import { unarypred, condpPairs, callback } from './types';

/**
 * Takes unary predicate, pairs, and an additional fallback.
 * Each pair's first element is passed to the predicate.
 * If the predicate returns a truthy, that pair's second element is the match.
 * The match may be an expression to return, or a callback which will receive
 * the truthy value and return a final value from condp.
 * If there are no matches, the fallback is invoked and result (or null) is returned when provided 
 * or an exception is thrown when not provided.
 * @param predicate arg => truthy/falsey
 * @param pairs [[any, expression | callback], [...], ...]
 * @param fallback callback
 */
const condp = (
  predicate: unarypred,
  pairs: condpPairs, 
  fallback?: callback
): any => {
  let i = 0;
  let returnValue;
  let returned = false;

  while (!returned && i < pairs.length) {
    const [expr, match] = pairs[i];
    const predResult = predicate(expr);
    // Slightly different from Clojure's implementation right now
    // the predicate here must always return a boolean,
    // rather than just a truthy or a falsey.
    // Having the match be a function may not be too useful because
    // it will always receive true or false.
    // TODO: allow looser definition of predicate

    if (predResult) {
      returned = true;
      typeof match === 'function'
        ? returnValue = match(predResult) || null
        : returnValue = match;
    } else {
      i += 1;
    };
  };

  if (!returned) {
    if (fallback) {
      return fallback() || null;
    };
    throw new Error("No expression matched and no fallback was provided")
  };
  return returnValue;
};

export default condp;