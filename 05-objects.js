// Objects in JavaScript
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures#objects
"use strict";

/*
 * Everything in JavaScript is either a primitive or an object
 * Primitives: Number, BigInt, String, Boolean, Undefined, Null, Symbol
 * Objects: everything else (including arrays, functions, and classes!)
 */

// Dates are objects
const myDate1 = new Date();
// console.log(myDate1);
// console.log(typeof myDate1);

// RegExps are objects
const myRegex1 = /ab+c/;
// console.log(myRegex1);
// console.log(typeof myRegex1);

// Errors are objects
const myError1 = new Error('Something went wrong!');
// console.log(myError1);
// console.log(typeof myError1);

try {
  console.log(fakeVariable);
} catch (errFromUsingFakeVariable) {
  // console.log(errFromUsingFakeVariable);
  // console.log(typeof errFromUsingFakeVariable);
}

// Arrays are objects
const myArr1 = [1, 2, 3];
// console.log(myArr1);
// console.log(typeof myArr1);
// console.log(myArr1 instanceof Object);
// console.log(Array.isArray(myArr1));

// Functions are callable objects, so typeof reports function
const myFunc1 = function() { return 'Hello!'; };
// console.log(myFunc1);
// console.log(typeof myFunc1);
// console.log(myFunc1 instanceof Function);
// console.log(myFunc1 instanceof Object);

// Classes are also "callable" objects
class MyClass1 {}
// console.log(MyClass1);
// console.log(typeof MyClass1);

// console.log(typeof Date);
// console.log(Array instanceof Function);
// console.log(Number instanceof Object);

////////////////////

/*
 * Objects are the primary data structure in JavaScript
 * Objects are collections of key-value pairs
 * Keys must be strings (*or symbols)
 * Values can be any type
 * Objects are mutable
 * Objects are passed by reference
 * Objects are effectively hash-maps, O(1) typical operation time (though Maps can be more performant)
 */

////////////////////

// Objects can be declared with the object literal syntax
const myUndefined1 = undefined;
const myBoolean1 = true;
const myNull1 = null;

const myObj1 = {
  myStr: 'value1',
  'my number': 2,
  myArr: [1, 2, 3],
  myObj: {
    nestedKey1: 'value5',
    nestedKey2: null,
    nestedKey3: undefined,
  },
  undef: myUndefined1, // left is key, right is value
  myBoolean1: myBoolean1,
  myNull1, // shorthand for `myNull1: myNull1`
};

// console.log(myObj1);

////////////////////

// Objects are compared by their pointer, not their contents
// console.log({} === {});
// console.log([] === []);

const emptyObj1 = {};
const emptyObj2 = {};
const emptyObj3 = emptyObj1;
// console.log(emptyObj1 === {});
// console.log(emptyObj1 === emptyObj2);
// console.log(emptyObj1 === emptyObj3);

////////////////////

// You can access object values with dot notation or bracket notation.
// Use bracket notation when the key is determined at runtime or contains special characters.
// Prefer dot notation when possible

const myObj3 = {
  $id: 'this is my name',
  'weird key ()': 'weird response',
  explicitUndefined: undefined,
}

// console.log(myObj3.$id);
// console.log(myObj3['$id']);

// console.log(myObj3["weird key ()"]);

const runtimeKey = 'weird key ()';
// console.log(myObj3[runtimeKey]);

// Note that keys that don't exist will return as `undefined`
// console.log(myObj3.fakeKey);
// console.log(myObj3.explicitUndefined);

// check to see if a key exists with Object.hasOwn()
// console.log(Object.hasOwn(myObj3, 'fakeKey'));
// console.log(Object.hasOwn(myObj3, 'explicitUndefined'));

////////////////////

// when declaring a const object, the assignment is immutable, but the object itself can be mutated
// you can create new key/value pairs, modify existing key/values, or delete existing key/values

const myObj4 = { hi: 'there' }
// console.log(myObj4);

// myObj4 = { key1: 'new value' };

myObj4.newVar = 12;
// console.log(myObj4);

myObj4.hi = 'world'
console.log(myObj4);

myObj4.newVar = undefined;
console.log(myObj4);

delete myObj4.newVar;
console.log(myObj4);

////////////////////

// objects can have functions as values

const myObj5 = {
  myFunc1: function () { return 12 },
}
// console.log(myObj5.myFunc1);
// console.log(myObj5.myFunc1());

// If a property is not a function when called as a function, a TypeError will be thrown
// console.log(myObj5.fakeKey());

////////////////////

// objects are passed by reference
const myObjOriginal = {};
const myObjReference = myObjOriginal;
// console.log(myObjOriginal);
// console.log(myObjReference);

myObjReference.hello = 'World!';
// console.log(myObjOriginal);
// console.log(myObjReference);

function addFuncKey (obj) {
  obj.funcKey = 'I was added in a function!';
}

addFuncKey(myObjOriginal);
// console.log(myObjOriginal);
// console.log(myObjReference);

////////////////////

// destructuring is a shorthand in JS to extract outputs from an object

const myObj6 = {
  myKey1: 'myVal1',
  myKey2: 'myVal2',
  myKey3: 'myVal3',
};

const { myKey1, myKey3, fakeKey } = myObj6;
// console.log(myKey1);
// console.log(myKey3);
// console.log(fakeKey);


// Arrays destructuring works similarly
const myArr2 = [false, 1, 'two', true, 20];
const [first1, second1, third1] = myArr2;
// console.log(first1);
// console.log(second1);
// console.log(third1);


// rest spreading gives the ability to get everything that wasn't explicitly destructured
// useful for making a shallow-copy with a removed property
// rest spreading works similarly for objects and arrays

const myArr3 = ['W', 'H', 'A', 'T'];
const [destructure1, ...rest1] = myArr3;
// console.log(destructure1);
// console.log(rest1);

const myObj7 = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
};


const {
  b, // again, technically shorthand for b: b
  d: four, // creates the const `four` with the value of `myObj7.d`
  ...rest2 // all key/values not destructured
} = myObj7;
// console.log(b);
// console.log(four);
// console.log(rest2);

// you can use spreading for a short-handed shallow copy of an object or array
const myObj2 = {
  nested: {
    myNum: 12,
  },
};
const myObj2Dupe = myObj2;
const myObj2Copy = {...myObj2};

myObj2.newProp = true;
myObj2.nested.nestedNewProp = true;
// console.log(myObj2);
// console.log(myObj2Dupe);
// console.log(myObj2Copy);

////////////////////

// no really: arrays are objects!
// objects only allow keys to be strings
// so technically, myArr[0] only works because the 0 is converted to a string
const myArr4 = [null, 'one'];
// console.log(myArr4);
// console.log(myArr4[1]);
// console.log(myArr4['1']);

myArr4[0] = 'assigned using number in source code';
// console.log(myArr4);

myArr4['0'] = 'assigned using string in source code';
// console.log(myArr4);

// and you can even add arbitrary properties to arrays
myArr4.thisIsSketchy = true;
// console.log(myArr4);

// because it's just an object, you can actually make a "scarce" array with many missing elements
myArr4[10] = 'way over here';
// console.log(myArr4);
// console.log(myArr4.length);

// I don't like this, but JavaScript lets you do it...
myArr4.length = 100;
// console.log(myArr4);
myArr4.length = 5;
// console.log(myArr4);

// accessing bad indexes is just like accessing a missing property
// console.log(myArr4[100]);

////////////////////

// to get an array of the (enumerable) contents of a JSON object, you can use Object.keys(myObj), Object.values(myObj), or Object.entries(myObj)

const myObj8 = {
  myKey1: 'myVal1',
  myKey2: 'myVal2',
  myKey3: 'myVal3',
};

// this is useful for iterating over an object
// console.log(Object.keys(myObj8));
// console.log(Object.values(myObj8));
// console.log(Object.entries(myObj8));

////////////////////

// for loops are generally avoided in the place of built-in array functions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// notable are the forEach, map, find, filter, and reduce functions
// note that returned arrays are shallow copies!

const myArr5 = [false, 1n, 2, 'three', true, 19, { nestedObjKey: 12 }, [121n, 133n]];

// while this is the most like a normal for loop, usually you're actually doing one of the below functions
myArr5.forEach((element, idx) => {
  if (typeof element === 'object') {
    element.modifiedInForEach = true;
  }
  // console.log(`${idx}: ${element}`);
});

const toStrs = myArr5.map((val, idx) => {
  return `value at ${idx} is ${val}`;
});
// console.log(toStrs);

const firstNumber = myArr5.find((val) => {
  return typeof val === 'number';
});
// console.log(firstNumber);

const notBools = myArr5.filter((val) => {
  return typeof val !== 'boolean';
});
// console.log(notBools);

const sumOfNumbers = myArr5.reduce((prev, curr) => {
  if (typeof curr !== 'number') return prev;
  return prev + curr;
}, 0);
// console.log(sumOfNumbers);
