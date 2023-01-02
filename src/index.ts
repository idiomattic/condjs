import cond from './cond';
import condp from './condp';
import condo from './condo';

// const condTest = cond(
//   [
//     [
//       'true',
//       () => {
//         console.log('true string');
//         return 'true string';
//       }
//     ],
//     [() => true, () => console.log('true cb')], // won't be called, would return undefined
//     [false, () => console.log('false')],
//     [true, () => console.log('true')] // won't be called, would return undefined
//   ],
//   () => console.log('fallback')
// );
// console.log({ condTest });

// const condpTest = condp(
//   (arr) => arr.length,
//   [
//     [[], (l) => l], // won't be invoked
//     [[1, 2, 3], (l) => l], // will be invoked and return length of the array
//     [4, 'four']
//   ],
//   () => 4
// );
// console.log({ condpTest });

// const condoTest = condo([
//   [false, () => console.log('false')],
//   [() => true, () => console.log('true cb')],
//   [true, () => {
//     console.log('true')
//     return 'true'
//   }],
//   [() => false, () => console.log('false cb')]
// ]);
// console.log({condoTest})

export default {
  _: cond,
  p: condp,
  o: condo
};
