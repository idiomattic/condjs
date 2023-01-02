import { condPairs, callback } from './types';

/**
 * Takes predicate-callback tuples and invokes the first callback for which its respective predicate
 * returns a truthy value.  If all pairs return falsey values, the fallback parameter will be invoked.
 * Returns the return value of whichever callback was invoked.
 * @param pairs [[predicate | boolean, callback], [...], ...]
 * @param fallback callback
 */
const cond = (pairs: condPairs, fallback: callback): any => {
  let i = 0;
  let returnValue;
  let returned = false;

  while (!returned && i < pairs.length) {
    const [test, cb] = pairs[i];
    let testRes;
    if (typeof test === 'function') {
      testRes = test();
    } else {
      testRes = test;
    }
    if (testRes) returned = true;
    returned ? (returnValue = cb()) : (i += 1);
  }
  if (!returned) fallback();
  return returnValue;
};

export default cond;
