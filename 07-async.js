// Asynchronous operations in JS

/**
 * Your JavaScript code is single-threaded, but it's just one part of the runtime environment.
 * 
 * When you make a C program, you compile it into machine code with instructions for your exact CPU.
 * Your computer runs this code directly, managing memory and I/O itself.
 * 
 * When you make a Java program, you compile it into bytecode for the Java Virtual Machine (JVM).
 * The JVM provides features like garbage collection and platform independence.
 * The JVM is relatively bare-bones and generally just runs the code in your program.
 * 
 * In both of the above, I/O, timers, and networking will block any thread. A program must manage multiple threads itself if it wishes to make two network calls at the same time.
 * 
 * When you make a Node.js program, you run Node with your code as an argument.
 * The Node.js engine a powerful set of tools, including highly parallelized I/O operations, timers, and networking.
 * Node.js uses an event-driven, non-blocking I/O model, allowing it to handle many connections efficiently with a single thread.
 * 
 * In browsers, JavaScript also runs in a single thread, but the runtime environment provides APIs for asynchronous operations (like setTimeout, fetch, and event listeners).
 * The event loop coordinates the execution of synchronous code, asynchronous callbacks, and promises, making JavaScript highly responsive for user interfaces.
 * 
 * Asynchronous operations in JavaScript are handled via callbacks, promises, and async/await syntax, allowing you to write non-blocking code that can wait for I/O or timers without freezing the main thread.
 * 
 * More info: https://dev.to/rahmanmajeed/javascript-the-runtime-environment-35a2
 */

function functionThatHappensToTake100ms() {
  const start = Date.now();
  let j = 1;
  while (Date.now() - start < 100) {
    j += 100;
    j /= 1.3;
    j %= 100;
  }
  return j + 1;
}

async function main() {
  // let's start where JS started: callbacks
  // Some functions use the browser API and allow a user to pass in a function to run once execution is complete
  // for example: setTimeout

  // console.log('before the setTimeout');
  // setTimeout(() => {
  //   console.log('inside of the setTimeout');
  // }, 100);
  // console.log('after the setTimeout');

  // note that the outside function keeps running and "blocks" the callback from running


  ////////////////////

  // remember that the JS itself is singly threaded
  // setTimeout gives the callback to the event-loop after the specified time.
  // If it's already running something or something came before it, it will not run at that time exactly

  // const before = Date.now();
  // setTimeout(() => {
  //   console.log(`I said to only wait 10ms, but this took ${Date.now() - before}ms before running`);
  // }, 10)
  // functionThatHappensToTake100ms();

  ////////////////////

  // Example: Using callbacks with Node.js file streams (createReadStream)
  // This code only works in Node.js, not in browsers.

  // const fs = require('fs');
  // const filePath = __dirname + '/01-variables.js';
  // const stream = fs.createReadStream(filePath, { encoding: 'utf8', highWaterMark: 64 });
  // let chunkCount = 0;
  // stream.on('data', (chunk) => {
  //   chunkCount++;
  //   console.log(`Read chunk #${chunkCount}:`, chunk.replaceAll('\n', '\\n'));
  // });
  // stream.on('end', () => {
  //   console.log('Finished reading file with createReadStream (callback).');
  // });
  // stream.on('error', (err) => {
  //   console.error('Error reading file:', err);
  // });

  ////////////////////

  // // Modern async programming uses Promises.
  // // async functions return Promises.

  // async function itsTwoIPromise() {
  //   return 2;
  // }
  // const itsThreeIPromise = async () => {
  //   return 3;
  // }
  // // note that these didn't have to be async, but their behavior is different because it is!

  // const twoProm = itsTwoIPromise();
  // // console.log(twoProm); // Promise { 2 }
  // // console.log(twoProm == 2); // false
  // // console.log(typeof twoProm); // object

  // const threeProm = itsThreeIPromise();
  // // console.log(threeProm); // Promise { 3 }

  // // async functions ALWAYS return Promises!
  // // A Promise is a wrapper object for an operation that may complete asynchronously in the future, representing either a successful result or an error.
  // // we can await them to get their values
  // const twoRes1 = await twoProm;
  // const twoRes2 = await itsTwoIPromise();
  // // console.log(twoRes1); // 2
  // // console.log(twoRes2); // 2

  ////////////////////

  // // Example: network calls
  // // We wish to return two dog facts and a cat fact as a string using the following APIs

  // const dogFactFetchResponsePromise = fetch('https://dogapi.dog/api/v2/facts?limit=2');

  // // console.log(dogFactFetchPromise); // Promise { <pending> }
  // // await dogFactFetchPromise; // await for the promise to resolve before executing any more code
  // // console.log(dogFactFetchPromise); // Promise { ...data }

  // const dogFactResponse = await dogFactFetchResponsePromise; // unwrap the promise and get the resolved data, in practice we would have just awaited the fetch above directly
  // // console.log(dogFactResponse);
  // // fetch was designed where the response does not have to wait for all of the data to be included. This lets us retrieve it in a few ways. We can use the attached async json() function for now

  // const dogFactJson = await dogFactResponse.json();
  // // console.log(dogFactJson);
  // const dogFacts = dogFactJson?.data?.map((curr) => curr?.attributes?.body || '') || [];
  // // console.log(dogFacts);


  // const catFactResponse = await fetch('https://meowfacts.herokuapp.com/');
  // const catFactJson = await catFactResponse.json();
  // const catFacts = catFactJson.data;

  // const combined1 = `Dog fact 1: ${dogFacts[0]}\nDog fact 2: ${dogFacts[1]}\nCat fact 1: ${catFacts[0]}`;
  // // console.log(combined1);

}

main();
