// Functions (and classes) in JavaScript
"use strict";

////////////////////

// functions can be declared with the function keyword
function addTwoNumbers(x, y) {
  return x + y;
}
// console.log(addTwoNumbers(1, 2));

// functions can be declared as a variable
const addTwoNumbersWithArrow = (x, y) => {
  return x + y;
};
// console.log(addTwoNumbersWithArrow(1, 2));


// functions can be nested
const addThreeNumbers = (x, y, z) => {
  function addTwoMoreNumbers(a, b) {
    return a + b;
  }

  return x + addTwoMoreNumbers(y, z);
}
// console.log(addThreeNumbers(10, 11, 12));


// functions declared with the function keyword can be called before they are declared
// console.log(makeLargerKeyword(10));
function makeLargerKeyword(a) {
  return a * 2
}

// functions declared as consts only exist after declaration
// console.log(makeLargerConst(10));
const makeLargerConst = (a) => {
  return a * 2
};
// console.log(makeLargerConst(10));

////////////////////

// functions can have default values
function addTwoNumbersWithDefault(x, y = 2) {
  return x + y;
}
// console.log(addTwoNumbersWithDefault(1));
// console.log(addTwoNumbersWithDefault(1, 4));

////////////////////

// functions can require other functions as arguments
function addTwoNumbersCallback(x, y, callback) {
  return callback(x + 1, y + 1);
}
// console.log(addTwoNumbersCallback(1, 2, addTwoNumbers));

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

// console.log(returnBothAsStrings(12, 'test', 'extra'));
// console.log(returnBothAsStrings(12));

// functions can NOT be overloaded or overridden
function multiplyTwoNumbers(x) {
  return x * 2;
}
function multiplyTwoNumbers(x, y) {
  return x * y;
}
// console.log(multiplyTwoNumbers(1));
// the second function overwrites the first function, so it's returning `1 * undefined`

// To get around this, you can set default values
function multiplyTwoNumbersWithDefault(x, y = 2) {
  return x * y;
}
// console.log(multiplyTwoNumbersWithDefault(5));

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

// functions can also have a spread operator as the last parameter.
// this is how `console.log()` works!
/**
 * 
 * @param {string} prefix 
 * @param {number[]} nums 
 */
function addNumbersWithPrefix(prefix, ...nums) {
  console.log(nums);
  const sum = nums.reduce((acc, curr) => acc + curr, 0);
  return `${prefix}${sum}`;
}
// console.log(addNumbersWithPrefix("hello ", 1, 2, 3, 4, 5));
// console.log(addNumbersWithPrefix("world ", 1, 2, 3, 4, 5, 6));


////////////////////

// arrow functions have multiple short-hand syntaxes

// all of the following are equivalent
const arrowFunc1 = (a) => { return a + 1 };
const arrowFunc2 = (a) => a + 1; // if there are no curly brackets, the statement is used as the return value
const arrowFunc3 = a => a + 1; // you may only omit the parenthesis when there is a single arg

// note that attempting to use shorthand while returning an object literal will re-add brackets
// the brackets will be considered scope brackets (not object brackets) unless surrounded by parenthesis
const arrowFunc4 = a => { a }; // treats "a" like a statement. This really does nothing and returns undefined
const arrowFunc5 = a => ({ a }); // returns an object literal
// console.log(arrowFunc4('hi'));
// console.log(arrowFunc5('hi'));

////////////////////

// please, please, please: use JSDocs to at least define types for args
// type declaration is the majority of the value here. You can just read the code to find what it does if you know the types.

/**
 * Gets the factors of a number, with an exclusion list for some reason.
 * When the code is questionable or confusing (like here), justify why it's not more straightforward in this summary.
 * I'm mixing types like crazy to show a bunch of examples.
 * @param {number} num - the number to find the factors of
 * @param {Set<number> | number[] ?} exclude - numbers to exclude, if any
 * @param {object} options
 * @param {boolean | undefined} options.asArray - if the return should be an Array (instead of a Set)
 * @returns {Set<number> | number[]} all factors
 */
const findNewFactors = (num, exclude, options) => {
  const { asArray } = options || {};
  const nums = asArray ? [] : new Set();

  const excludeSet = exclude instanceof Set ? exclude : new Set(exclude);

  /**
   * @param {number[] | Set<number>} list 
   * @param {number} num 
   * @param {Set<number>} exclSet 
   */
  const addFactor = (list, num, exclSet) => {
    if (exclSet.has(num)) {
      return;
    }
    if (asArray) {
      list.push(num);
    } else {
      list.add(num);
    }
  };

  if (num % 2 === 0) {
    addFactor(nums, 2, excludeSet);
  }
  for (let i = 3; i < num; i += 2) {
    if (num % i === 0) {
      addFactor(nums, i, excludeSet);
    }
  }
  return nums;
}

// console.log(findNewFactors(100, null, { asArray: true }));
// console.log(findNewFactors(100, new Set([25]), { asArray: true }));
// console.log(findNewFactors(100, [5], { asArray: true }));

////////////////////

// classes are really just special functions that return objects

class MyClass1 {}
// console.log(MyClass1);
// console.log(typeof MyClass1);
// console.log(typeof Number);
// console.log(typeof Array);

const myNewClass = new MyClass1();
// console.log(myNewClass);
// console.log(typeof myNewClass);

////////////////////

// note that constructors may behave similarly with/without the new keyword, but not always!
const myArr1 = Array(3);
const myArr2 = new Array(3);
// console.log(myArr1);
// console.log(myArr2);
// console.log(myArr1 instanceof Array);
// console.log(myArr2 instanceof Array);

const myNumObj1 = Number(10);
const myNumObj2 = new Number(10);
// console.log(myNumObj1);
// console.log(myNumObj2);
// console.log(typeof myNumObj1);
// console.log(typeof myNumObj2);

const myDate1 = Date();
const myDate2 = new Date();
// console.log(myDate1);
// console.log(typeof myDate1);
// console.log(myDate1 instanceof Date);
// console.log(myDate2);
// console.log(typeof myDate2);
// console.log(myDate2 instanceof Date);
