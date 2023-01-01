export type predicate = () => boolean;
export type callback = () => any;
export type pair = [predicate | boolean, callback];
export type condPairs = pair[];