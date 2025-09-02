// Type Safety in JS

////////////////////

/**
 * Javascript tries to cast values to the correct type automatically, called "type coercion".
 * Because JS will attempt to resolve type-issues for you, you may see unexpected behavior instead of an error.
 *
 * More detail:
 * https://developer.mozilla.org/en-US/docs/Glossary/Type_Conversion
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence
 * https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/
 */

////////////////////

// To add two numbers,                       you can use the + operator.
// To concatenate a string and a string,     you can use the + operator.
// To concatenate a string and a non-string, you can use the + operator.
// Note the dual functionality, and keep in mind order of operations.

// console.log(1 + 1);          // 2
// console.log('a' + 'b');      // ab
// console.log('a' + 1);        // a1
// console.log(1 + 'a');        // 1a

// console.log(1 + 1 + 'a');    // 2a
// console.log('a' + 1 + 1);    // a11

////////////////////

// JS will attempt to cast to a common type when comparing.
// This does NOT mean that all comparisons are cast to numbers; strings compare characters from left to right
// console.log('99' > '888'); // true
// console.log('99' > 888); // false
// console.log(99 > '888'); // false
// console.log(99 > 888); // false

////////////////////

// Another idiosyncrasy with JS type casting is the parseInt() function.
// It parses a string into a number and then truncates any decimal.
// If the arg isn't a string, it is stringified by the function (even if it's a number).
const smallNumber = 0.00000037;
const largeNumber = 776e20;
console.log(parseInt(largeNumber)); // 7
console.log(parseInt(smallNumber)) // 3

// this is included as a general warning, not as common knowledge
