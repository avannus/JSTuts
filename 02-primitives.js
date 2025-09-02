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
const myNum1 = 10; // Number type
// console.log(typeof myNum1); // "number"

const myNum2 = 3.5e-6; // Number type
// console.log(myNum2); // 0.0000035
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

let myStr2 = 'Hello World!'; // String type
// console.log(myStr1 === myStr2); // true

let myStr3 = myStr2; // String type
// console.log(myStr2 === myStr3); // true
myStr2 = "Goodbye!";
// console.log(myStr2); // "Goodbye!"
// console.log(myStr3); // "Hello World!"

// Strings can be constructed via template literal
// 
const myStr4 = `9 + ${myNum1} = ${42 / 2}`;
console.log(myStr4); // "9 + 10 = 21"


// CONSTANT PRIMITIVES

const myBool1 = true; // Boolean type
// console.log(typeof myBool1); // "boolean"

let myUndefined1 = undefined; // Undefined type
// console.log(typeof myUndefined); // "undefined"

let myUndefined2; // Undefined type
// console.log(typeof myUndefined2); // "undefined"

let myNull1 = null; // Null type
// console.log(typeof myNull1); // "object"
// console.log(myNull1 === null); // true

// Symbol type is not commonly used
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
