// Functions in JavaScript

////////////////////

// functions can be declared with the function keyword
function addTwoNumbers(x, y) {
  return x + y;
}
// console.log(addTwoNumbers(1, 2));
// 3
// console.log(addTwoNumbers(1, 2, 4));
// 3
// console.log(addTwoNumbers(1));
// NaN

////////////////////

// functions can be declared as variables
const addTwoNumbersWithArrow = (x, y) => {
  return x + y;
}
// console.log(addTwoNumbersWithArrow(1, 2));
// 3

////////////////////

// functions can have default values
function addTwoNumbersWithDefault(x, y = 2) {
  return x + y;
}
// console.log(addTwoNumbersWithDefault(1));
// 3
// console.log(addTwoNumbersWithDefault(1, 4));
// 5

////////////////////

// functions can require other functions as arguments
function addTwoNumbersCallback(x, y, callback) {
  return callback(x, y);
}
// console.log(addTwoNumbersCallback(1, 2, addTwoNumbers));
// 3

////////////////////

// functions can be anonymous
// console.log(addTwoNumbersCallback(1, 2, function(x, y) {x + y}));

// anonymous functions can be arrow functions (and generally should be)
// console.log(addTwoNumbersCallback(1, 2, (x, y) => x + y));

////////////////////

// functions can NOT be overloaded or overridden
function multiplyTwoNumbers(x) {
  return x * 1;
}
function multiplyTwoNumbers(x, y) {
  return x * y;
}
// console.log(multiplyTwoNumbers(1));
// NaN
// the second function overwrites the first function, so it's returning `1 * undefined`

// To get around this, you can set default values
function multiplyTwoNumbersWithDefault(x, y = 1) {
  return x * y;
}
console.log(multiplyTwoNumbersWithDefault(1));

// you can also use optional arguments
function multiplyTwoNumbersWithOptional(x, y) {
  if (y === undefined) {
    return x * 1;
  }
  return x * y;
}
// console.log(multiplyTwoNumbersWithOptional(1));

// the most common way to do this is to pass in an object
function multiplyTwoNumbersWithObject(o) {
  if (o.y === undefined) {
    return o.x * 1;
  }
  return o.x * o.y;
}
// console.log(multiplyTwoNumbersWithObject({x: 1}));
// 1
// console.log(multiplyTwoNumbersWithObject({x: 1, y: 2}));
// 2
