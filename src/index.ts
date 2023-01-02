import cond from './cond';
import condp from './condp';

const test = condp(
  (n1, n2) => n1 === n2, 
  7, 
  [[3, 'three'], [4, 'sadf'], [5, 'five'], [5, 'other five']],
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