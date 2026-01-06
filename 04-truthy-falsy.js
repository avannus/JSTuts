// Truthy and Falsy values in JavaScript
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness
// https://developer.mozilla.org/en-US/docs/Glossary/Truthy
// https://developer.mozilla.org/en-US/docs/Glossary/Falsy
"use strict";

////////////////////

/*
 * Javascript handles truthy and falsy values differently than other languages, though there are some parallels.
 *
 * In Java, the literals `true` and `false` are the only boolean values.
 * In Java, you MUST use a boolean variable for branching statements.
 *  if (true) {...} // trivial
 *  if (0 < 3) {...} // `0 < 3` results in a boolean, making it valid ternary statement
 * Javascript also has boolean primitives that you can use for branching statements, just like in Java.
 * The above code would work as expected in Javascript.
 *
 * In some low-level languages, there is no explicit boolean type.
 * You can do comparisons per usual like `if (x >= 17)`.
 * In C, you can also also pass in any non-zero value, and it will evaluate to true.
 * In C:
 *  int num0 = 0;
 *  if (num0) {...} // evaluates to false
 *
 *  int num1 = 1;
 *  if (num1) {...} // evaluates to true
 *
 *  myStruct *heapMemStruct = malloc(sizeof(myStruct));
 *  if (heapMemStruct) {...} // evaluates to true unless null pointer
 *
 * JavaScript is similar to C in being able to use a primitive to determine a branching state.
 *
 * Here is the complete list of every falsy value: https://developer.mozilla.org/en-US/docs/Glossary/Falsy
 * false                   (primitive Boolean)
 * null                    (primitive Null)
 * undefined               (primitive Undefined)
 * ""                      (primitive String)
 * 0, -0, NaN              (primitive Number)
 * 0n, (there is no -0n)   (primitive BigInt)
 * document.all            *deprecated* global constant
 *
 * Every other value is truthy!
 * Every Symbol is truthy!
 * Every Object is truthy!
 */

// helper function to print if a value is truthy or falsy
function printTruthy (x) {
  if (x) {
    console.log(`Value '${x}' is truthy`);
  } else {
    console.log(`Value '${x}' is falsy`);
  }
}

// printTruthy(false);
// printTruthy(null);
// printTruthy(undefined);
// printTruthy("");
// printTruthy(0);
// printTruthy(-0);
// printTruthy(NaN);
// printTruthy(0n);
// printTruthy(-0n);

const y1 = 0;
const y2 = 12;
// printTruthy(y1);
// printTruthy(y2 - y2);

// printTruthy(y2);
// printTruthy(y1 + y2);
// printTruthy(' ');
// printTruthy('0.00000001');
// printTruthy({});

////////////////////

// values can be coerced into a boolean primitive by using a double `!` (not) operator

// printTruthy(!!0);
// printTruthy(!!"truthy string");

////////////////////

// You can use truthy/falsy anywhere you would use a boolean.

let a = 5;
while (a) {
  // console.log(a);
  a--;
}

const myArr1 = [1, 2];
if (myArr1.length) {
  // console.log("myArr1 isn't empty!");
}

////////////////////

// Javascript has a ternary operator, and the condition is truthy/falsy.

const b1 = false ? 'truthy' : 'falsy';
// console.log(b1);

// console.log(4 ? 'truthy' : 'falsy');

// Avoid using the ternary operator for anything other than simple assignments.

// const b3 = 5 ? (b1 ? 'truthy' : 'falsy') : 'falsy';
// valid syntax, but hard to read

// let b4;
// y1 ? (b4 = 'truthy') : (b4 ? console.log('why are we doing this') : 'please don\'t do this');
// valid syntax, but hard to read

// We can use this knowledge to make an easier to read print method from above!
function printTruthyTernary(x) {
  console.log(`Value '${x}' is ${x ? 'truthy' : 'falsy'}`);
}

////////////////////

// The && and || operators work slightly differently than in other languages.
// (though you may recognize this pattern in shell scripts)
// If you are just using these operators with booleans, they work the same as in Java.
// However, they also have a different behavior when used as non-boolean values.

// && returns the first falsy value, or the last value if all are truthy.
// printTruthy({} && "2" && 3);
// printTruthy([] && 2 && 0);
// printTruthy(1 && "" && 2 && 3);

// || returns the first truthy value, or the last value if all are falsy.
// printTruthy(0 || 5);
// printTruthy("" || 0);

////////////////////

// note that there is short-circuiting behavior with && and ||.
function logWhenRan() {
  console.log('logWhenRan!');
  // returns `undefined` implicitly
}

// printTruthy(logWhenRan() && 10);
// printTruthy(!logWhenRan() && 10);
// printTruthy(0 && logWhenRan());

// printTruthy(logWhenRan() || 10);
// printTruthy(0 || 5 || logWhenRan());

// Examples of short-circuiting applications
const unknownObj1 = {};
// code is unsure if name exists on this at this point
const firstName = unknownObj1.name || 'MISSING';

const shouldRun = false;
shouldRun && logWhenRan();

////////////////////

// If you wish to use the `||` shorthand but only for undefined/null values, use nullish coalescing
const unknownObj2 = {
  myChildObj: null,
  myNum: 0,
};

const myNumDefault1 = unknownObj2.myNum || -1;
const myNumDefault2 = unknownObj2.myNum ?? -1;
const myNumDefault3 = unknownObj2.myChildObj ?? {};
// console.log(myNumDefault1);
// console.log(myNumDefault2);
// console.log(myNumDefault3);

////////////////////

// no really: avoid loose comparisons

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#comparing_equality_methods
// if ([1, 2] == '[1,2]') console.log("[1, 2] == '[1,2]'");
// if ([1, 2] == '1,2') console.log("[1, 2] == '1,2'");
// console.log([1, 2] == '[1,2]');
// console.log([1, 2] == '1,2');

// const zeroStr = "0";
// console.log(!!zeroStr);
// console.log(Boolean(zeroStr));
// console.log(zeroStr == true);
// console.log(zeroStr == false);
// console.log(zeroStr === true);
// console.log(zeroStr === false);

// console.log(0 == false)
// console.log(0n == false)
// console.log('' == false);
// console.log(undefined == false);
// console.log(null == false);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion
// if ({}) console.log('{} is truthy');
// console.log('!!{}',         !!{});
// console.log('!!{} == true', !!{} == true);
// console.log('{} == true',     {} == true);
// console.log('{} == false',    {} == false);

// if ([]) console.log('[] is truthy');
// console.log('!![]',         !![]);
// console.log('!![] == true', !![] == true);
// console.log('[] == true',     [] == true);
// console.log('[] == false',    [] == false);

// ?!?!
// explanation:
// when comparing primitives (including a boolean) to a non-primitive (including arrays), the non-primitive attempts to become a primitive
// when forced to become a primitive, arrays choose to become a string
// an empty array becomes the empty string
// when comparing any non-boolean primitive to a boolean, the primitive is converted to a boolean
// the empty string is falsy, and becomes false
// when the primitive types match, we compare the values
// false === false
