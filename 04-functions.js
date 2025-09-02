// Functions in JavaScript

////////////////////

// functions can be declared with the function keyword
function addTwoNumbers(x, y) {
  return x + y;
}
// console.log(addTwoNumbers(1, 2)); // 3

// functions can be declared as a variable
const addTwoNumbersWithArrow = (x, y) => {
  return x + y;
};
// console.log(addTwoNumbersWithArrow(1, 2)); // 3


// functions can be nested
const addThreeNumbers = (x, y, z) => {
  function addTwoMoreNumbers(a, b) {
    return a + b;
  }

  return x + addTwoMoreNumbers(y, z);
}
// console.log(addThreeNumbers(10, 11, 12));


// functions declared with the function keyword can be called before they are declared
// console.log(makeLargerKeyword(10)); // 20
function makeLargerKeyword(a) {
  return a * 2
}

// functions declared as consts only exist after declaration
// console.log(makeLargerConst(10)); // ReferenceError: makeLargerConst is not defined
const makeLarger = (a) => {
  return a * 2
};
// console.log(makeLargerConst(10)); // 20

////////////////////

// functions can have default values
function addTwoNumbersWithDefault(x, y = 2) {
  return x + y;
}
// console.log(addTwoNumbersWithDefault(1)); // 3
// console.log(addTwoNumbersWithDefault(1, 4)); // 5

////////////////////

// functions can require other functions as arguments
function addTwoNumbersCallback(x, y, callback) {
  return callback(x + 1, y + 1);
}
// console.log(addTwoNumbersCallback(1, 2, addTwoNumbers)); // 5

////////////////////

// functions can be anonymous
// console.log(addTwoNumbersCallback(1, 2, function(x, y) {return x + y}));

// anonymous functions can be arrow functions
// console.log(addTwoNumbersCallback(1, 2, (x, y) => {
//   return x + y;
// }));

////////////////////

// function calls do not need to match the number of arguments
function returnBothAsStrings(a, b) {
  return `${a} ${b}`
}

// console.log(returnBothAsStrings(12, 'test', 'extra')); // 12 test
// console.log(returnBothAsStrings(12)); // 12 undefined

// functions can NOT be overloaded or overridden
function multiplyTwoNumbers(x) {
  return x * 1;
}
function multiplyTwoNumbers(x, y) {
  return x * y;
}
// console.log(multiplyTwoNumbers(1)); // NaN
// the second function overwrites the first function, so it's returning `1 * undefined`

// To get around this, you can set default values
function multiplyTwoNumbersWithDefault(x, y = 2) {
  return x * y;
}
// console.log(multiplyTwoNumbersWithDefault(5)); // 10

// you can also use optional arguments
function multiplyTwoNumbersWithOptional(x, y) {
  if (y === undefined) {
    return x * 1;
  }
  return x * y;
}
// console.log(multiplyTwoNumbersWithOptional(1));

// the most common way to have optional arguments is to pass in an object of options at the end of the function call
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

////////////////////

// arrow functions have multiple variations

// all of the following are equivalent
const arrowFunc1 = (a) => { return a + 1 };
const arrowFunc2 = (a) => a + 1; // if there are no curly brackets, the statement is used as the return value
const arrowFunc3 = a => a + 1; // you may only omit the parenthesis when there is a single arg
