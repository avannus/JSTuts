// Truthy and Falsy values in JavaScript

////////////////////

/**
 * Javascript handles truthy and falsy values differently than other languages.
 * 
 * In Java, true and false are the only boolean values.
 * You can determine a boolean by comparing two values, or by having a boolean variable.
 * You can do this in Javascript too.
 * Javascript compares the values of primitives, and compares the references of objects.
 */

const x0 = true;

const x1 = 12.3;
const x2 = 12.3;

const x3 = {
  key: 'value',
};
const x4 = { key: 'value' };
const x5 = x3;

// Javascript has two main ways to compare values:
// The first is "loose" comparisons: ==, !=, >=, >, etc.
// These do type conversion.

// console.log(x0 == true);        // true

// console.log(x1 == x2);          // true
// console.log('dave' == 'dave');  // true
// console.log(x1 == 12);          // false

// console.log({} == {});          // false
// console.log(x3 == x4);          // false
// console.log(x3 == x5);          // true


// console.log(12.3 == '12.3');    // true
// console.log(12.3 == '12');      // false
// console.log(12.3 == '12.30');   // true
// console.log(12.3 > '12');       // true
// console.log(12.3 < '12');       // false

// console.log(12.3 == 'dave');    // false
// console.log(12.3 > 'dave');     // false
// console.log(12.3 < 'dave');     // false
// console.log(12.3 != 'dave');    // true

// console.log('value' == x3);     // false

// Generally, the behavior from loose comparisons is less predictable than in other languages.

////////////////////

// The second is "strict" comparisons: ===, !==
// These compare types AND values.

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
 * int y = 0;
 * if (y) {...} // evaluates to false
 * int z = 1;
 * if (z) {...} // evaluates to true
 * 
 * Javascript is similar to C in this regard.
 * 
 * In Javascript, there are only these falsy values:
 * false              (primitive Boolean)
 * 0, -0, NaN         (primitive Number)
 * 0n                 (primitive Bigint)
 * ""                 (primitive String)
 * null               (primitive Null)
 * undefined          (primitive Undefined)
 * (There's also document.all stuff, but it's deprecated, ignorable)
 * https://developer.mozilla.org/en-US/docs/Glossary/Falsy
 * 
 * Everything else is truthy.
 */

// helper function to print if a value is truthy or falsy
const printTruthy = (x) => {
  if (x) {
    console.log(`Value '${x}' is truthy`);
  } else {
    console.log(`Value '${x}' is falsy`);
  }
}

// printTruthy(false);             // Value 'false; is falsy
// printTruthy(0);                 // Value '0; is falsy
// printTruthy(-0);                // Value '0; is falsy
// printTruthy(NaN);               // Value 'NaN; is falsy
// printTruthy(0n);                // Value '0n; is falsy
// printTruthy("");                // Value '' is falsy
// printTruthy(null);              // Value 'null' is falsy
// printTruthy(undefined);         // Value 'undefined' is falsy

const y1 = 0;
const y2 = 12;
// printTruthy(y1);                // Value '0' is falsy
// printTruthy(y2);                // Value '12' is truthy
// printTruthy(y1 + y2);           // Value '12' is truthy
// printTruthy(y2-y2);             // Value '0' is falsy

// printTruthy(!y1);               // Value 'true' is truthy
// printTruthy(!"truthy string");  // Value 'false' is falsy

// printTruthy(' ');               // Value ' ' is truthy
// printTruthy('0.00000001');      // Value '0.00000001' is truthy
// printTruthy({});                // Value '[object Object]' is truthy

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
const modifyX = (x) => {
  x.key = 'value';
  // returns undefined by default (falsy)
}

const x = {};

// printTruthy(0 || 5 || modifyX(x));        // Value '5' is truthy
// console.log(`x.key = ${x.key}`);          // x.key = undefined

// printTruthy(0 && modifyX(x));             // Value '0' is falsy
// console.log(`x.key = ${x.key}`);          // x.key = undefined

// printTruthy(0 || modifyX(x) || 5);        // Value 'value' is truthy
// console.log(`x.key = ${x.key}`);          // x.key = value

////////////////////

// We can use this to assign a default value to a variable.

const z0 = "";

const z1 = z0 || 5;
// printTruthy(z1);    // Value '5' is truthy

const z2 = z0 || 0;
// printTruthy(z2);    // Value '0' is falsy

const z3 = 0 || z0;
// printTruthy(z3);    // Value '' is falsy

// This is a very common pattern in Javascript.
// Example: You want to connect to a default server, but if the user specifies a server, use that instead.
// const server = userSpecifiedServer || defaultServer;
