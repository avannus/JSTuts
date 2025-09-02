// Objects in JavaScript

/*
  Everything in JavaScript is either a primitive or an object
  Primitives: Number, BigInt, String, Boolean, Undefined, Null, Symbol
  Objects: everything else (including arrays and functions)
*/

const myArr1 = [1, 2, 3]; // Array is an object
// console.log(typeof myArr1); // "object"
// console.log(Array.isArray(myArr1)); // true

const myDate1 = new Date(); // Date is an object
// console.log(typeof myDate1); // "object"

const myRegex1 = /ab+c/; // RegExp is an object
// console.log(typeof myRegex1); // "object"

const myError1 = new Error('Something went wrong!'); // Error is an object
// console.log(typeof myError1); // "object"

const myFunc1 = function() { return 'Hello!'; }; // Function is an object
// console.log(myFunc1); // [Function: myFunc1]
// console.log(typeof myFunc1); // "function"

////////////////////

/*
  Conversationally, saying "object" in JavaScript generally means "JSON object"
  JSON Objects are the primary data structure in JavaScript
  JSON Objects are collections of key-value pairs
  Keys are strings, but they don't have to be quoted
  Values can be any type
  JSON Objects are mutable
  JSON Objects are passed by reference
  JSON Objects are effectively hash-maps, O(1) typical operation time (though Maps can be more performant)
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

// Empty objects can be declared as such
const myObj2 = {};
// console.log(myObj2); // {}
// console.log(typeof(myObj2)); // object

// note that empty objects are not undefined or null, and that they're actually truthy

////////////////////

// Empty objects are compared by their pointer, not their contents
// console.log({} == {});          // false
// console.log([] == []);          // false

const emptyObj1 = {};
const emptyObj2 = {};
const emptyObj3 = emptyObj1;
// console.log(emptyObj1 == {});          // false
// console.log(emptyObj1 == emptyObj2);   // false
// console.log(emptyObj1 == emptyObj3);   // true

////////////////////

// You can access object values with dot notation or bracket notation.
// Use bracket notation when the key is determined at runtime or contains special characters.
// Use dot notation for everything else.

const myObj3 = {
  $id: 'this is my name',
  'weird key ()': 'weird response',
  explicitUndefined: undefined,
}

// console.log(myObj3.$id); // "this is my name'"
// console.log(myObj3['$id']) // "this is my name'"

// console.log(myObj3["weird key ()"]) // "weird response"

const runtimeKey = 'weird key ()';
// console.log(myObj3[runtimeKey]) // "weird response"

// Note that keys that don't exist will return as `undefined`
// console.log(myObj3.fakeKey) // undefined
// console.log(myObj3.explicitUndefined) // undefined

// check to see if a key exists with Object.hasOwn()
// console.log(Object.hasOwn(myObj3, 'fakeKey')); // false
// console.log(Object.hasOwn(myObj3, 'explicitUndefined')); // true

////////////////////

// when declaring a const object, the assignment cannot be removed, but the object can be mutated
// you can create new key/value pairs, modify existing ones, or delete existing ones

const myObj4 = { hi: 'there' }
// console.log(myObj4) // { hi: 'there' }

// myObj4 = { key1: 'new value' }; // TypeError: Assignment to constant variable.

myObj4.newVar = 12;
// console.log(myObj4); // { hi: 'there', newVar: 12 }

myObj4.hi = 'world'
// console.log(myObj4); // { hi: 'world', newVar: 12 }

delete myObj4.newVar;
// console.log(myObj4); // { hi: 'world' }

////////////////////

// objects can have functions as values

const myObj5 = {
  myFunc1: function () { return 12 },
}

// console.log(myObj5.myFunc1); // [Function: myFunc1]
// console.log(myObj5.myFunc1()); // 12

// If a property is not a function when called as a function, a TypeError will be thrown

// console.log(myObj5.fakeKey()); // TypeError: myObj5.fakeKey is not a function

////////////////////

// objects are passed by reference
const myObjOriginal = {};
const myObjReference = myObjOriginal;
// console.log(myObjOriginal); // {}
// console.log(myObjReference); // {}

myObjReference.hello = 'World!';
// console.log(myObjOriginal); // { hello: 'World!' }
// console.log(myObjReference); // { hello: 'World!' }

function addFuncKey (obj) {
  obj.funcKey = 'I was added in a function!';
}

addFuncKey(myObjOriginal);
// console.log(myObjOriginal); // { hello: 'World!', funcKey: 'I was added in a function!' }
// console.log(myObjReference); // { hello: 'World!', funcKey: 'I was added in a function!' }

////////////////////

// destructuring is a shorthand in JS to extract outputs from an object

const myObj6 = { myKey1: 'myVal1', myKey2: 'myVal2', myKey3: 'myVal3' };

const { myKey1, myKey3, fakeKey } = myObj6;
// console.log(myKey1); // "myVal1"
// console.log(myKey3); // "myVal3"
// console.log(fakeKey); // undefined

// Arrays destructuring works similarly

const myArr2 = [false, 1, 'two', true, 20];

const [a, b, c] = myArr2;
// console.log(a); // false
// console.log(b); // 1
// console.log(c); // 'two'

////////////////////

// to get an array of the contents of a JSON object, use Object.keys(myObj), Object.values(myObj), or Object.entries(myObj)
// console.log(Object.keys(myObj6)); // [ 'myKey1', 'myKey2', 'myKey3' ]
// console.log(Object.values(myObj6)); // [ 'myVal1', 'myVal2', 'myVal3' ]
// console.log(Object.entries(myObj6)); // [ [ 'myKey1', 'myVal1' ],  [ 'myKey2', 'myVal2' ],  [ 'myKey3', 'myVal3' ] ]

////////////////////

// for loops are generally avoided in the place of built-in array functions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Notable are the forEach, map, find, filter, and reduce functions
// Note that functions that return new arrays are shallow copies!

myArr2.forEach((element, idx) => {
  // console.log(`${idx}: ${element}`);
});

const toStrs = myArr2.map((val, idx) => {
  return `value ${idx} is ${val}`;
});
// console.log(toStrs);

const firstNumber = myArr2.find((val) => {
  return typeof val === 'number';
});
// console.log(firstNumber);

const notBools = myArr2.filter((val) => {
  return typeof val !== 'boolean';
});
// console.log(notBools);

const sumOfNumbers = myArr2.reduce((prev, curr) => {
  if (typeof curr !== 'number') return prev;
  return prev + curr;
}, 0);
// console.log(sumOfNumbers);
