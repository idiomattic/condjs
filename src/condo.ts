import { condPairs } from './types';

/**
 * Takes predicate-callback tuples and invokes any/all callbacks
 * for which its respective predicate returns true.
 * @param pairs [[predicate | boolean, callback], [...], ...]
 */
const condo = (pairs: condPairs): void => {
  let returnValue;
  pairs.forEach((pair) => {
    const [test, cb] = pair;
    let testRes;
    if (typeof test === 'boolean') {
      testRes = test;
    } else if (typeof test === 'function') {
      testRes = test();
    }
    if (testRes === true) {
      const cbRes = cb();
      returnValue = cbRes;
    }
  });
  return returnValue;
};

export default condo;
