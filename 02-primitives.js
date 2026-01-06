// Primitives in JavaScript
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Language_overview#data_types
"use strict";

/*
 * 7 language-defined primitive types in JavaScript:
 * Number, BigInt, String, Boolean, Undefined, Null, Symbol
 * *All* other variables are objects (including arrays, functions, and classes).
 * Note that primitives are passed by value, but objects are passed by reference.
 * Primitives are immutable (`true`, `9`, `null`, etc.  will never change their meaning/value)
 *
 * `null` must be assigned explicitly. It is NOT the same as undefined.
 *
 * The built-in `typeof` operator is useful for figuring out types...
 * ...but it doesn't always return the type you expect
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
 * `typeof null` returns "object"
 * `typeof Array` returns "object"
 * `typeof Function` returns "function"
 * `typeof Class` returns "function"
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
 */

// NUMBER TYPE
// All Number primitives are 64-bit floating point numbers.
const myNum1 = 10;
// console.log(myNum1);
// console.log(typeof myNum1);

const myNum2 = 3.5e-6;
// console.log(myNum2);
// console.log(typeof myNum2);

const myNum3 = NaN;
// console.log(myNum3);
// console.log(typeof myNum3);

const myNum4 = Infinity;
// console.log(myNum4);
// console.log(typeof myNum4);

// Integers larger than 2^53 - 1 cannot be represented accurately as Number type.
// But any smaller integers can be perfectly represented.
let myOverflow = Number.MAX_SAFE_INTEGER; // 2^53 - 1
// console.log(myOverflow);
myOverflow += 2;
// console.log(myOverflow);

// you can define a number through hex or octal integer notation; they're still 64-bit floats
const myNum5 = 0x0f;
const myNum6 = 0o17;
const myNum7 = 15.0;
// console.log(myNum5, myNum6, myNum7);
// console.log(myNum5 === myNum6 && myNum5 === myNum7 && myNum6 === myNum7);

// you can use `_` to help divide large numbers
const myNum8 = 123_456_789.987_654;
// console.log(myNum8);

////////////////////

// BIGINT TYPE
// Use BigInt type for unbounded integers
const myBigInt1 = 1234567890123456789012345678901234567890n;
// console.log(typeof myBigInt1);
const myBigInt2 = BigInt("1234567890123456789012345678901234567890");
// console.log(myBigInt2);

// make sure that you don't use a number type to define a BigInt if it could be larger than the max int
const myBigInt3 = BigInt(0x555555555555555);
const myBigInt4 = BigInt(384307168202282325);
const myBigInt5 =        0x555555555555555n;
const myBigInt6 = BigInt("384307168202282325");
// console.log(myBigInt3);
// console.log(myBigInt4);
// console.log(myBigInt5);
// console.log(myBigInt6);

// BigInts and Numbers do not mix
// const mixingTypeMath1 = 10n + 20;
const sameTypeMath1 = 10n * 20n;
// console.log(sameTypeMath1);

////////////////////

// STRING TYPE
const myStr1 = "Hello World!";
// console.log(typeof myStr1);

// can use single or double quotes
let myStr2 = 'Hello World!';
// console.log(myStr1 === myStr2);

let myStr3 = myStr2;
// console.log(myStr2 === myStr3);
myStr2 = "Goodbye!";
// console.log(myStr2);
// console.log(myStr3);

// Strings can be constructed via template literal
const myStr4 = `9 + ${myNum1} = ${42 / 2}`;
// console.log(myStr4);

////////////////////

// OTHER PRIMITIVES

const myBool1 = true;
// console.log(typeof myBool1);

let myUndefined1 = undefined;
// console.log(typeof myUndefined);

let myUndefined2;
// console.log(typeof myUndefined2);
// console.log(myUndefined1 === myUndefined2);

let myNull1 = null;
// console.log(typeof myNull1);
// console.log(myNull1 === null);

////////////////////

// Symbol type is primarily for advanced manipulation of objects (guaranteeing a unique key)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
const mySymbol1 = Symbol("myTest");
const mySymbol2 = Symbol("myTest");
// console.log(mySymbol1);
// console.log(mySymbol2);
// console.log(mySymbol1 == mySymbol2 || mySymbol1 === mySymbol2);

////////////////////

// Most primitives can be declared using their Global Object constructors
const myBigInt0 = BigInt(12); // BigInt is a global object, and we're calling the constructor
const mySymbol0 = Symbol(12);

const myNum0 = Number(12); // NOTE: MDN docs recommend against using this constructor
const myStr0 = String(12); // NOTE: MDN docs recommend against using this constructor
const myBool0 = Boolean(12); // NOTE: MDN docs recommend against using this constructor

// undefined has no constructor
// null has no constructor

// console.log(myBigInt0);
// console.log(mySymbol0);
// console.log(myNum0);
// console.log(myStr0);
// console.log(myBool0);

// note that these are special constructors that do NOT use the `new` keyword
// behavior differs when using `new`, it doesn't just fail!
// because of this possible confusion, MDN docs recommends against the usage of all but `BigInt` and `Symbol`

// example of confusing code
const myBooleanObj = new Boolean(false);
// console.log(myBooleanObj);
if (myBooleanObj) {
  // console.log("I thought it was falsy...");
}

// we'll see this confusing behavior again in the section about functions
// this difference when including/excluding `new` is not limited to these primitives!

////////////////////

// Symbols: advanced
// circle back here after learning about objects and functions, it may make more sense!

// The runtime will keep a list of "well-known symbols" on some global variables
// Such as on the global object `Symbol`
// console.log(Object.getOwnPropertyNames(Symbol));
// console.log(typeof Symbol.iterator);

// This symbol can be used to create properties that will never clash with your code
const mySet1 = new Set();
mySet1.add("cat");
mySet1.add("dog");
// console.log(mySet1);
// console.log(mySet[Symbol.iterator].toString());
// console.log(typeof mySet[Symbol.iterator]);

mySet1.iterator = 'iterator string property value';
// console.log(mySet1);

// the "well-known" Symbol.iterator symbol is given to every object (or a prototype... out of scope) that can use the `of` operator
for (const subStr of mySet1) {
  // console.log(subStr);
}

// we can even make a new iterator function...
// ...you almost certainly don't want to do this, but you can
mySet1[Symbol.iterator] = function* () {
  const iter = this.values();
  let item = iter.next();
  while (!item.done) {
    yield item.value.toUpperCase();
    item = iter.next();
  }
}
// note that this does not conflict with `mySet1.iterator`
console.log(mySet1);

for (const subStr of mySet1) {
  // console.log(subStr);
}
// console.log(mySet[Symbol.iterator].toString());

const mySet2 = new Set(['car', 'truck']);
for (const subStr of mySet2) {
  // console.log(subStr);
}

// this is useful if you wan to create a custom object/class that is iterable!
