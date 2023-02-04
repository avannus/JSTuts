// Variables in JavaScript

// constant variables
const x1 = 2;
// console.log(var2);
// var2 = 4; // TypeError: Assignment to constant variable.

// let variables
let x2 = 1;
// console.log(var1);
// 1
x2 = 3; // value can be changed
// console.log(var1);
// 3
x2 = "Hello World1!"; // typing is dynamic
// console.log(var1);
// Hello World1!

/*
Don't use `var`.

Use `const` by default, and `let` if you need to change the value.
*/

////////////////////

/*
7 primitive types in JavaScript
Number, String, Boolean, Undefined, Null, Symbol, BigInt
All other types are objects

Null must be assigned explicitly. It is not the same as undefined.

typeof() doesn't always return the type you expect
typeof(null) returns "object"
typeof(Array) returns "object"
typeof(Function) returns "function"

All Number primitives are 64 bit floating point numbers

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
*/

let x3a = 3; // Number type
// console.log(typeof x3a);
// number

let x3b = 3.5; // Number type
// console.log(typeof x3a);
// number

let x4a = "Hello World!"; // String type
// console.log(typeof x4a);
// string

let x4b = 'Hello World!'; // String type
// console.log(typeof x4b);
// string

let x5 = true; // Boolean type
// console.log(typeof x5);
// boolean

let x7a = undefined; // Undefined type
// console.log(typeof x7a);
// undefined

let x7b; // Undefined type
// console.log(typeof x7b);
// undefined

let x6 = null; // Null type
// console.log(typeof x6);
// object
// console.log(x6 === null);
// true

let x8 = [1, 2, 3]; // Array type
// console.log(typeof x8);
// object

let x9 = { a: 1, b: 2, c: 3 };
// console.log(typeof x9);
// object

function x10() {};
// console.log(typeof x10);
// function

// technically, there are also 
