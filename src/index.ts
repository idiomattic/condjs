import cond from './cond';
import condp from './condp';
import condo from './condo';

const condTest = cond(
  [
    [
      'true',
      () => {
        console.log('true string');
        return 'true string';
      }
    ],
    [() => true, () => console.log('true cb')], // won't be called, would return undefined
    [false, () => console.log('false')],
    [true, () => console.log('true')] // won't be called, would return undefined
  ],
  () => console.log('fallback')
);
console.log({ condTest });

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
};
