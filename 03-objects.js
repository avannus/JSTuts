// Objects in JavaScript

////////////////////

/*
Conversationally, saying "object" in JavaScript generally means "JSON object"
Objects are the primary data structure in JavaScript
Objects are collections of key-value pairs
Keys are strings, but they don't have to be quoted
Values can be any type
Objects are mutable
Objects are passed by reference
Objects are effectively hash-maps, O(1) typical operation time
*/

////////////////////

// Objects can be declared with the object literal syntax
const obj1 = {
  key1: 'value1',
  'key2': 2,
  key3: [1, 2, 3],
  key4: {
    nestedKey1: 'value5',
    nestedKey2: null,
    nestedKey3: undefined,
  },
  'key with spaces': 'value with spaces',
  functionKey: function() {
    return 'value from function';
  },
};

// console.log(obj1);

////////////////////

// Empty objects can be declared
const obj2 = {};

// console.log(typeof(obj2));
// object

// note that this is not undefined (or null)

// console.log(obj2);
// {}

////////////////////

// you can access object values with dot notation or bracket notation (default should be dot notation)
// console.log(obj1.key4);
// value1

// console.log(obj1['key3']);
// [ 1, 2, 3 ]

// console.log(obj1.key4.nestedKey1);
// value5

// console.log(obj1['key4']['nestedKey2']);
// null

// console.log(obj1['key with spaces']);
// value with spaces

////////////////////

// Assigning new data in objects
obj2.key1 = 'new value';
// console.log(obj2.key1);
// new value

// note that const does not prevent mutation of values, but it does prevent reassignment

// obj2 = { key1: 'new value' };
// TypeError: Assignment to constant variable.

////////////////////

// objects can have functions as values

// console.log(obj1.functionKey);
// [Function: functionKey]

// console.log(obj1.functionKey());
// value from function

////////////////////

// objects are passed by reference
const obj3 = {};
const obj4 = obj3;
// console.log(obj3);
// {}

obj4.hello = 'World!';
// console.log(obj3);
// { hello: 'World!' }

// console.log(obj3 === obj4);
// true

function addKey1 (obj) {
  obj.key1 = 'I was added in a function!';
}

addKey1(obj4);
// console.log(obj3);
// { hello: 'World!', key1: 'I was added in a function!' }

////////////////////

// objects can be iterated over with for...in
for (const key in obj1) {
  // console.log(key);
}
// key1
// key2
// key3
// key4
// key with spaces
// functionKey

