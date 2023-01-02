export type predicate = () => boolean;
export type callback = () => any;
export type pair = [predicate | boolean, callback];
export type condPairs = pair[];

type expression = string|number|bigint|boolean|symbol|object;
type unaryReturningFunction = (arg: expression) => any;
export type unarypred = (arg: any) => expression;
export type condpPair = [any, expression|unaryReturningFunction];
export type condpPairs = condpPair[];

const test: condpPair = ['asdf', () => 4]