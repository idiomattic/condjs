"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cond_1 = __importDefault(require("./cond"));
(0, cond_1.default)([
    [false, () => console.log('false')],
    [() => true, () => console.log('true cb')],
    [true, () => console.log("true, but shouldn't get here")]
], () => console.log('fallback'));
