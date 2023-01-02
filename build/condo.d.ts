import { condPairs } from './types';
/**
 * Takes predicate-callback tuples and invokes any/all callbacks
 * for which its respective predicate returns true.
 * @param pairs [[predicate | boolean, callback], [...], ...]
 */
declare const condo: (pairs: condPairs) => void;
export default condo;
