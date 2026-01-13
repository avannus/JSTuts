// Variables in JavaScript
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Language_overview#variables
"use strict";

// CONSTANT VARIABLES
const myConst1 = 2;
// console.log(myConst1); // 2

// you cannot re-assign constants
// myConst1 = 4;

////////////////////

// LET VARIABLES
let myLet1 = 1;
// console.log(myLet1);
// value can be changed
myLet1 = 3;
// console.log(myLet1);

// typing is dynamic
myLet1 = "Hello World1!";
// console.log(myLet1);

////////////////////

// const and let have block scope

const myConst2 = "hello";
let myLet2 = "world";
{
  const myConst2 = "HALLO";
  let myLet2 = "WELT";
  // console.log(myConst2);
  // console.log(myLet2);
}
// console.log(myConst2);
// console.log(myLet2);

// interestingly, variable declarations apply for the whole scope, not just after the "reassignment"
const myConst3 = "hello";
let myLet3 = "world";
if (true) {
  // console.log(myConst3);
  // console.log(myLet3);
}
if (true) {
  // console.log(myConst3);
  // console.log(myLet3);
  const myConst3 = "HALLO";
  let myLet3 = "WELT";
}

////////////////////

// VAR VARIABLES (legacy, avoid using these)
var myVar1 = 5;
// console.log(myVar1);

// value can be changed
myVar1 = 7;
// console.log(myVar1);

// typing is still dynamic
myVar1 = "what up world";
// console.log(myVar1);


// var has function scope! NOT block scope
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#example

function myFunction1 () {
  // console.log(myVar2);
  var myVar2 = "in the function";
  // console.log(myVar2);
}

function myFunction2 () {
  // console.log(myVar2);
}

var myVar2 = "original";
if (true) {
  var myVar2 = "in the if block";
  // console.log(myVar2);
  myFunction1();
  myFunction2();
  // console.log(myVar2);
}
// console.log(myVar2);
