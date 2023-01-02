# condjs
Inspired by clojure's `cond` and `condp` functions, this library is meant to offer a few options for writing multi-branch conditionals in a fairly-concise way.

## cond
Takes predicate-callback pairs plus an additional callback and invokes the first callback for which its respective predicate
returns a truthy value.  If all pairs return falsey values, the fallback parameter will be invoked.
Returns the return value of whichever callback was invoked.

Useful for multi-branch conditionals
```
const condTest = cond(
  [
    [
      'true',                             // a logical true
      () => {                             // invokes cb and returns its return value
        console.log('true string');
        return 'true string';
      }
    ],
    [
      () => true, 
      () => console.log('true cb')        // won't be reached, would return undefined
    ],
    [false, () => console.log('false')],
    [true, () => console.log('true')]     // won't be reached, would return undefined
  ],
  () => console.log('fallback')           // would be called if no matches
);
```

## condp
Takes unary predicate, pairs, and an additional fallback. Each pair's first element is passed to the predicate.
If the predicate returns a truthy, that pair's second element is the match.
The match may be an expression to return, or a callback which will receive the truthy value and return a final value from condp.
If there are no matches, the fallback is invoked and result (or null) is returned when provided or an exception is thrown when not provided.

Useful for setting the value of a variable based on logic that is a little too complex for a ternary, etc.
```
const condpTest = condp(
  (n) => n === 4,
  [
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
    [4, 'four'],            // will return 'four'
    [4, () => 'other four'] // will not reach here anyway
  ],
  () => 4                   // if no matches, this would be called
);

...

const condpTest = condp(
  (arr) => arr.length,
  [
    [[], (l) => l],        // won't be invoked, [].length is falsey
    [[1, 2, 3], (l) => l], // will be invoked and return length of the array
    [['asdf'], 'asdf']
  ],
  () => 4
);
```

## condo
Takes predicate-callback tuples and invokes any/all callbacks for which its respective predicate returns true.
Returns return value from last matching clause, or undefined.

Could be useful for situations where any number of side effects are desired based on different conditions.
```
const condoTest = condo([
  [true, () => console.log('true')],    // will be logged
  [false, () => console.log('false')],
  [
    () => true,                
    () => {
      console.log('true cb')           // will also be logged
      return 'some return value';      // will be returned
    }
  ],
  [() => false, () => console.log('false cb')]
]);
```
