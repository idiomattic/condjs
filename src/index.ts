import cond from './cond';
import condp from './condp';
import condo from './condo';

// cond(
//   [
//     [true, () => console.log('true')],
//     [() => true, () => console.log('false cb')],
//     [false, () => console.log("true, but shouldn't get here")]
//   ],
//   () => console.log('fallback')
// );

// const condpTest = condp(
//   arr => arr.length, 
//   [[[], l => l], [4, "four"], [5, 'five'], [5, 'other five']],
//   () => 4
// )
// console.log({condpTest})

// condo(
//   [
//     [true, () => console.log('true')],
//     [false, () => console.log('false')],
//     [() => true, () => console.log('true cb')],
//     [() => false, () => console.log("false cb")]
//   ]
// );

export default {
  _: cond,
  p: condp,
  o: condo
}