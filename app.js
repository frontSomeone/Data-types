"use strict";
let num = 12;
let str = "Hello";
let bool = true;
let n = null;
let und = undefined;
let arr = [1, 2, 3];
console.log(num, str, bool, n, und, arr);
num = 34;
str = "Hello World";
bool = false;
n = null;
und = undefined;
arr = [3, 2, 1, 5, 4, 6];
console.log(num, str, bool, n, und, arr);
let elements = [...arr];
elements.push(9);
console.log(elements);
elements.shift();
console.log(elements);
console.log(elements.length);
elements.sort();
console.log(elements);
