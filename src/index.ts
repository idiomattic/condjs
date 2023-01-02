import cond from './cond';
import condp from './condp';

const test = condp(
  arr => arr.length, 
  [[[], l => l], [4, "four"], [5, 'five'], [5, 'other five']],
  () => 4
)
console.log({test})

// cond(
//   [
//     [true, () => console.log('true')],
//     [() => true, () => console.log('false cb')],
//     [false, () => console.log("true, but shouldn't get here")]
//   ],
//   () => console.log('fallback')
// );

export default {
  _: cond,
  p: condp
}