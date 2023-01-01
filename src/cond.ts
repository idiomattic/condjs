import { condPairs, callback } from './types';

/**
 * Takes predicate-callback tuples and invokes the first callback for which its respective predicate
 * returns true.  If all pairs return false, the fallback parameter will be invoked.
 * @param pairs [[predicate | boolean, callback], [...], ...]
 * @param fallback callback
 */
const cond = (pairs: condPairs, fallback: callback) => {
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
    ret ? cb() : (i += 1);
  }
  if (!ret) fallback();
};

export default cond;
