import { assert } from 'chai';
import { describe } from 'mocha';
import cond from '../src/index';

describe('cond tests', () => {
  it('should run the callback in a branch with true as the test value instead of a predicate', () => {
    let val = 'untouched';
    cond._(
      [
        [true, () => (val = 'true branch')],
        [() => true, () => (val = 'cb returns true')],
        [false, () => (val = 'false branch')]
      ],
      () => (val = 'fallback reached')
    );
    assert.equal(val, 'true branch');
  });
});

cond._(
  [
    [true, () => console.log('true')],
    [() => true, () => console.log('false cb')],
    [false, () => console.log("true, but shouldn't get here")]
  ],
  () => console.log('fallback')
);
