"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cond_1 = __importDefault(require("./cond"));
const condp_1 = __importDefault(require("./condp"));
const condo_1 = __importDefault(require("./condo"));
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
exports.default = {
    _: cond_1.default,
    p: condp_1.default,
    o: condo_1.default
};
