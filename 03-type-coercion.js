// Type Coercion in JavaScript
// https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion
"use strict";

////////////////////

/*
 * Javascript tries to cast values to the correct type automatically, called "type coercion".
 * Because JS will attempt to resolve type-issues for you, you may see unexpected behavior instead of an error.
 * Use parenthesis and explicit conversions!
 *
 * More detail:
 * https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
 * https://developer.mozilla.org/en-US/docs/Glossary/Type_Conversion
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence
 * https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/
 */

////////////////////

/**
 * @returns {any} poorly documented variable, it could be anything!
 */
function myRandVar() {
  return Math.random() > 0.2 ? String.fromCharCode(Math.random() * 26 + 'a'.charCodeAt(0)) : parseInt(Math.random() * 10 + 1);
}

const myConst1 = myRandVar();
const myConst2 = myRandVar();
const myConst3 = myRandVar();

// To add two numbers,                       you can use the + operator.
// To concatenate a string and a string,     you can use the + operator.
// To concatenate a string and a non-string, you can use the + operator.
// Note the dual functionality, and keep in mind order of operations.

// console.log(1 + 1);
// console.log('a' + 'b');
// console.log('a' + 1);
// console.log(1 + 'a');
// console.log(typeof 1 + 1);

// console.log(3 + 3 + 'a');
// console.log('a' + 3 + 3);

// If you're using the `+` operator with a string and a number, js will convert them to strings and concatenate
// If you're using the `*` operator with a string and a number, js will convert them to numbers and multiply
// If you're using the `*` operator with a string and a string, js will convert them to numbers and multiply
// console.log(typeof ('3' * 4 * 5));
// console.log(typeof ('3' + 4 + 5));
// console.log('3' * 4 * 5);
// console.log('3' + 4 + 5);

// Do not make your behavior hard to read or understand!

// console.log('a' * 3 + 3);
// console.log('a' + 3 + 3 * 3);

// keep in mind that we're using primitive literals in these examples for clarity
// you're almost always going to be doing this with variables
// your takeaway here isn't to learn all of these rules
const idk1 = myConst1 + myConst2 + myConst3;
// console.log(idk1);

// I'll say it again later, but this is another reason why you document your variable types!
// For example, the behavior of this trivial function can be VERY different if any of the types are different
// The next dev will not know unless they find everywhere it is called, which could include different codebases

function myFunc1(a, b, c) {
  return a + b * c;
}

/**
 * Concatenates a given prefix to the product of two numbers.
 * @param {string} a prefix string
 * @param {number | string} b factor 1. If not a number, must be a string that parses to a number
 * @param {number | string} c factor 1. If not a number, must be a string that parses to a number
 * @returns {string} A string of prefix `a`, with the value of `b` and `c` multiplied
 */
function myFunc2(a, b, c) {
  return a + b * c;
}

////////////////////

// JS will frequently attempt to auto-cast when types don't match
// This does NOT mean that all comparisons are cast to numbers; strings compare characters from left to right
// console.log("'a'.codePointAt(0)", 'a'.codePointAt(0));
// console.log("'A'.codePointAt(0)", 'A'.codePointAt(0));
// console.log("'Z'.codePointAt(0)", 'Z'.codePointAt(0));

// console.log("'a' > 'A'",          'a' > 'A');
// console.log("'ZZ' > 'AAA'",       'ZZ' > 'AAA');
// console.log("'99' > '888'",       '99' > '888');
// console.log("'99' > 888",         '99' > 888);
// console.log("99 > '888'",         99 > '888');
// console.log("99 > 888",           99 > 888);

////////////////////

// Double check the types expected by functions, and be sure to be explicit!
// Another idiosyncrasy with JS type casting is the parseInt() function.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
// See the type that parseInt expects in the documentation above!
const smallNumber1 = 0.0000037;
const smallNumber2 = 0.00000037;
const smallNumber3 = "0.00000037";

const largeNumber1 = Math.PI * 1e20;
const largeNumber2 = Math.PI * 1e21;
const largeBigInt1 = BigInt(Math.PI * 1e20);
const largeBigInt2 = BigInt(Math.PI * 1e21);


// console.log("parseInt(smallNumber1)", parseInt(smallNumber1));
// console.log("parseInt(smallNumber2)", parseInt(smallNumber2));
// console.log("parseInt(smallNumber3)", parseInt(smallNumber3));

// console.log("parseInt(largeNumber1)", parseInt(largeNumber1));
// console.log("parseInt(largeNumber2)", parseInt(largeNumber2));
// console.log("parseInt(largeBigInt1)", parseInt(largeBigInt1));
// console.log("parseInt(largeBigInt2)", parseInt(largeBigInt2));


// console.log("smallNumber1", smallNumber1.toString());
// console.log("smallNumber2", smallNumber2.toString());
// console.log("smallNumber3", smallNumber3.toString());

// console.log("largeNumber1", largeNumber1.toString());
// console.log("largeNumber2", largeNumber2.toString());
// console.log("largeBigInt1", largeBigInt1.toString());
// console.log("largeBigInt2", largeBigInt2.toString());


////////////////////

// Javascript has two main ways to compare values:

// The first is "strict" comparisons: ===, !==
// These compare types AND values (no type coercion).

// console.log(12.3 === 12.3);
// console.log(12.3 === '12.3');
// console.log(12.3 !== '12.3');
// console.log(12.3 !== 'dave');

// console.log(12 === 12n);
// console.log(NaN === NaN);

// console.log([1, 2] === '1,2');
// console.log(0 === -0);


////////////////////

// Avoid "loose" comparisons: ==, !=, >=, >, etc.
// These do type conversions 😱
// You better have a *very* good reason to use these, as you'll see next
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#loose_equality_using
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-islooselyequal

// console.log(12.3 == 12.3);
// console.log(12.3 == '12.3');
// console.log(12.3 != '12.3');
// console.log(NaN == NaN);

