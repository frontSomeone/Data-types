let num: number = 12;
let str: string = "Hello";
let bool: boolean = true;
let n: null = null;
let und: undefined = undefined;
let arr: number[] = [1, 2, 3];

console.log(num, str, bool, n, und, arr);

let num1: number = 125;
let str1: string = "Hello World";
let bool1: boolean = false;
let n1: null = null;
let und1: undefined = undefined;
let arr1: number[] = [1, 2, 3, 4, 5, 6];

console.log(num1, str1, bool1, n1, und1, arr1);

let elements: number[] = [...arr, ...arr1];

elements.push(9);
console.log(elements);
elements.shift();
console.log(elements);
console.log(elements.length);
elements.sort();
console.log(elements);