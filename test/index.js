"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../src/index"));
index_1.default._([
    [true, () => console.log('true')],
    [() => true, () => console.log('false cb')],
    [false, () => console.log("true, but shouldn't get here")]
], () => console.log('fallback'));
