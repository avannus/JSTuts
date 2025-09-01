/*
7 primitive types in JavaScript:
Number, BigInt, String, Boolean, Undefined, Null, Symbol
*All* other variables are objects (including arrays and functions).
Note that primitives are passed by value, objects are passed by reference.

Null must be assigned explicitly. It is not the same as undefined.

When you use the typeof operator, it doesn't always return the type you expect:
`typeof null` returns "object"
`typeof Array` returns "object"
`typeof Function` returns "function"

All Number primitives are 64-bit floating point numbers.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
*/


// NUMBER TYPE
const myNum1 = 3; // Number type
// console.log(typeof myNum1); // "number"

const myNum2 = 3.5; // Number type
// console.log(typeof myNum2); // "number"
const myNum3 = NaN; // special "Not a Number" value of Number type
// console.log(typeof myNum3); // "number"
const myNum4 = Infinity; // special Infinity value of Number type
// console.log(typeof myNum4); // "number"

// Integers larger than 2^53 - 1 cannot be represented accurately as Number type.
let myOverflow = Number.MAX_SAFE_INTEGER; // 2^53 - 1
// console.log(myOverflow); // 9007199254740991
myOverflow += 2;
// console.log(myOverflow); // 9007199254740992

// Use BigInt type for larger integers

const myBigInt1 = 1234567890123456789012345678901234567890n; // BigInt type
// console.log(typeof myBigInt1); // "bigint"
const myBigInt2 = BigInt("1234567890123456789012345678901234567890"); // BigInt type
// console.log(myBigInt2); // 1234567890123456789012345678901234567890n
const myBigInt3 = BigInt("0x10000000000000000000000000000000000000"); // BigInt type
// console.log(myBigInt3); // 356811923176489970264571492362373784095686656n


// STRING TYPE
const myStr1 = "Hello World!"; // String type
// console.log(typeof myStr1); // "string"

const myStr2 = 'Hello World!'; // String type
// console.log(typeof myStr2); // "string"

console.log(myStr1 === myStr2); // true

const x5 = true; // Boolean type
// console.log(typeof x5); // "boolean"

let x6a = undefined; // Undefined type
// console.log(typeof x6a); // "undefined"

let x6b; // Undefined type
// console.log(typeof x6b); // "undefined"

let x7 = null; // Null type
// console.log(typeof x7); // "object"
// console.log(x7 === null); // true

const x8 = [1, 2, 3]; // Array type
// console.log(typeof x8); // "object"

const x9 = { a: 1, b: 2, c: 3 };
// console.log(typeof x9); // "object"

function x10() {};
// console.log(typeof x10); // "function"

// technically, there are also
