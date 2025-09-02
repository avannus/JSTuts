// Variables in JavaScript

// CONSTANT VARIABLES
const myConst1 = 2;
// console.log(myConst1); // 2
// myConst1 = 4; // TypeError: Assignment to constant variable.


// LET VARIABLES
let myLet1 = 1;
// console.log(myLet1); // 1

myLet1 = 3; // value can be changed
// console.log(myLet1); // 3

myLet1 = "Hello World1!"; // typing is dynamic
// console.log(myLet1); // Hello World1!

// let has block scope
if (true) {
  let myLet1 = 5; // different variable than the previous myLet1
  // console.log(myLet1); // 5
}
// console.log(myLet1); // "Hello World1!"


// VAR VARIABLES (legacy, avoid using these)
var myVar1 = 5;
// console.log(myVar1); // 5

myVar1 = 7; // value can be changed
// console.log(myVar1); // 7

myVar1 = "Hello World!"; // typing is dynamic
// console.log(myVar1); // Hello World!

// var has function scope, not block scope
if (true) {
  var myVar1 = 9; // overwrites the previous myVar1 variable
  // console.log(myVar1); // 9
}
console.log(myVar1); // 9
