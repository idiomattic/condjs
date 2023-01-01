import _ from 'lodash';
import {condPairs, callback} from './types';
type binarypred = () => any;

/**
 * Takes binary predicate, an expression, pairs, and an additional fallback.
 * The expression is passed along with each pair's first element to the binary predicate.
 * If the predicate returns a truthy, that pair's second element is the match.
 * The match may be an expression to return, or a callback which will receive the truthy value
 * and return a final value from condp.
 * If there are no matches, the fallback is invoked and result is returned when provided 
 * or an exception is thrown when not provided.
 * @param pairs [[predicate | boolean, callback], [...], ...]
 * @param pairs [[predicate | boolean, callback], [...], ...]
 * @param fallback callback
 */
const condp = (
  predicate: binarypred, 
  expression: any, 
  pairs: condPairs, 
  fallback?: callback
) => {
  let i = 0;
  let ret = false;
  while (!ret && i < pairs.length) {
    const [test, cb] = pairs[i];
    let testRes;
    if (typeof test === 'boolean') {
      testRes = test;
    } else if (typeof test === 'function') {
      testRes = test();
    }
    if (testRes === true) ret = true;
    ret ? cb() : i += 1;
  }
  // if (!ret) fallback();
};

export default condp;