// Casting and Strings in JavaScript

////////////////////

/**
 * Javascript tries to cast values to the correct type automatically, called "type coercion".
 *
 * I'll focus on strings here, as they're JS's priority cast type (as chosen by the language designers).
 *
 * More detail in the MDN docs:
 * https://developer.mozilla.org/en-US/docs/Glossary/Type_Conversion
 */

////////////////////

// To concatenate a string and a string,     you can use the + operator.
// To concatenate a string and a non-string, you can use the + operator.
// Note the dual functionality, and keep in mind order of operations.

// console.log(1 + 1);          // 2
// console.log('a' + 'b');      // ab
// console.log('a' + 1);        // a1
// console.log(1 + 'a');        // 1a

// console.log(1 + 1 + 'a');    // 2a
// console.log('a' + 1 + 1);    // a11
// console.log('a' + (1 + 1));  // a2

////////////////////

// You can also use a template literal, which is a string with backticks.
// You can use ${} to interpolate variables into the template literal.
// Note that you can't use template literals with either quote.
// It's bad practice to use backticks without a variable.

// console.log(`3 + 4 = ${3 + 4}`); // 3 + 4 = 7

const x = { key: 'value' };

const y = `x is ${x}`;
// console.log(y); // x is [object Object]

// [object Object] doesn't seem that useful...

////////////////////

// You can stringify an object with JSON.stringify()
// note that JSON.stringify() is not the same as toString()

// reminder: const x = { key: 'value' };
const z = JSON.stringify(x);
// console.log(z); // {"key":"value"}

// This is useful for printing out objects in the console.

// console.log(`x: ${JSON.stringify(x)}`); // x is {"key":"value"}

////////////////////

// Note that you can change quote type if you want to use a quote in your string.
// You can also use a backslash to escape a quote, or to add an escaped character.

// console.log('I\'m a string'); // I'm a string
// console.log("I'm a string");  // I'm a string
// console.log("I'm a \ntwo line string");  // I'm a string
