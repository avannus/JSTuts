// Truthy and Falsy values in JavaScript

////////////////////

/**
 * Javascript handles truthy and falsy values differently than other languages (though it's not dissimilar to C).
 * 
 * In Java, true and false are the only boolean values.
 * You can determine a boolean by comparing two values, or by having a boolean variable.
 * You can do this in Javascript too.
 * Javascript compares the values of primitives, and compares the references of objects.
 */

const x1 = 12.3;
const x2 = 12.3;

// Javascript has two main ways to compare values:
// The first is "loose" comparisons: ==, !=, >=, >, etc.
// These do type conversion.

// console.log(12.3 == 12.3);      // true
// console.log(12.3 == '12.3');    // true
// console.log(12.3 != '12.3');    // false
// console.log(12.3 != 'dave');    // true

// Generally, the behavior from loose comparisons is less predictable.

////////////////////

// The second is "strict" comparisons: ===, !==
// These compare types AND values (no type coercion).

// console.log(12.3 === 12.3);      // true
// console.log(12.3 === '12.3');    // false
// console.log(12.3 !== '12.3');    // true
// console.log(12.3 !== 'dave');    // true

////////////////////

/**
 * In C, there is no boolean type.
 * You can do comparisons per usual like `if (x >= 17)`.
 * However, you can also pass in any non-zero value, and it will evaluate to true.
 * In C:
 * int num0 = 0;
 * if (num0) {...} // evaluates to false
 *
 * int num1 = 1;
 * if (num1) {...} // evaluates to true
 *
 * int *x = malloc(sizeof(int));
 * if (x) {...} // evaluates to true unless null pointer
 *
 * Javascript is similar to C in this regard.
 * 
 * Here is every value that evaluates to false:
 * 0, -0, NaN         (primitive Number)
 * 0n                 (primitive Bigint)
 * ""                 (primitive String)
 * false              (primitive Boolean)
 * undefined          (primitive Undefined)
 * null               (primitive Null)
 * (There's technically also the document.all object, but it's deprecated, ignorable)
 * 
 * Every other values is truthy.
 */

// helper function to print if a value is truthy or falsy
const printTruthy = (x) => {
  if (x) {
    console.log(`Value '${x}' is truthy`);
  } else {
    console.log(`Value '${x}' is falsy`);
  }
}

// printTruthy(0);                 // Value '0; is falsy
// printTruthy(-0);                // Value '0; is falsy
// printTruthy(NaN);               // Value 'NaN; is falsy
// printTruthy(0n);                // Value '0n; is falsy
// printTruthy("");                // Value '' is falsy
// printTruthy(false);             // Value 'false; is falsy
// printTruthy(undefined);         // Value 'undefined' is falsy
// printTruthy(null);              // Value 'null' is falsy

const y1 = 0;
const y2 = 12;
// printTruthy(y1);                // Value '0' is falsy
// printTruthy(y2 - y2);           // Value '0' is falsy

// printTruthy(y2);                // Value '12' is truthy
// printTruthy(y1 + y2);           // Value '12' is truthy
// printTruthy(' ');               // Value ' ' is truthy
// printTruthy('0.00000001');      // Value '0.00000001' is truthy
// printTruthy({});                // Value '[object Object]' is truthy

////////////////////

// values can be coerced into a boolean primitive by using a double `!` (not) operator

// printTruthy(!!0);               // Value 'false' is falsy
// printTruthy(!!"truthy string"); // Value 'true' is truthy

////////////////////

// You can use truthy/falsy anywhere you would use a boolean.

let a = 5;
while (a) {
  // console.log(a);
  a--;
}

////////////////////

// Javascript has a ternary operator, and the condition is truthy/falsy.

const b1 = false ? 'truthy' : 'falsy';
// console.log(b1); // falsy

// console.log(4 ? 'truthy' : 'falsy'); // truthy

// Avoid using the ternary operator for anything other than simple assignments.

// const b3 = 5 ? (b1 ? 'truthy' : 'falsy') : 'falsy';
// valid syntax, but hard to read

// let b4;
// y1 ? (b4 = 'truthy') : (b4 ? console.log('why are we doing this') : 'please don\'t do this');
// valid syntax, but hard to read

// We can use this knowledge to make an easier to read print method from above.
function printTruthyTernary(x) {
  console.log(`Value '${x}' is ${x ? 'truthy' : 'falsy'}`);
}

////////////////////

// The && and || operators work slightly differently than in other languages.
// If you are just using them as boolean operators, they work the same as in Java.
// However, they also have a different behavior when used as non-boolean values.

// && returns the first falsy value, or the last value if all are truthy.
// printTruthy({} && "2" && 3);     // Value '3' is truthy
// printTruthy([] && 2 && 0);       // Value '0' is falsy
// printTruthy(1 && "" && 2 && 3);  // Value '' is falsy

// || returns the first truthy value, or the last value if all are falsy.
// printTruthy(0 || 5);            // Value '5' is truthy
// printTruthy("" || 0);           // Value '0' is falsy

////////////////////

// note that there is short-circuiting behavior with && and ||.
const logWhenRan = () => {
  console.log('logWhenRan!');
  // returns `undefined` by default (falsy)
}

// printTruthy(logWhenRan() && 10);  // logWhenRan! Value 'undefined' is falsy 
// printTruthy(!logWhenRan() && 10); // logWhenRan! Value '10' is truthy 
// printTruthy(0 && logWhenRan());   //             Value '0' is falsy 

// printTruthy(logWhenRan() || 10);     // logWhenRan! Value '5' is truthy
// printTruthy(0 || 5 || logWhenRan()); //             Value '5' is truthy

// Example of usefulness:
const unknownObj1 = {}; // unknown if name exists on this at this point
const firstName = unknownObj1.name || 'MISSING';

const shouldRun = false;
shouldRun && logWhenRan();

////////////////////

// If you wish to use the || shorthand but only for undefined/null values, use nullish coalescing
const unknownObj2 = {
  myChildObj: null,
  myNum: 0,
}; // unknown if name exists on this at this point

const myNumDefault1 = unknownObj2.myNum || -1;
// console.log(myNumDefault1); // -1
const myNumDefault2 = unknownObj2.myNum ?? -1;
// console.log(myNumDefault2); // 0
const myNumDefault3 = unknownObj2.myChildObj ?? {};
// console.log(myNumDefault3); // {}
