import cond from '../src/index';

cond._(
  [
    [true, () => console.log('true')],
    [() => true, () => console.log('false cb')],
    [false, () => console.log("true, but shouldn't get here")]
  ],
  () => console.log('fallback')
);