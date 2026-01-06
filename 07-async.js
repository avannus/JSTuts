// Asynchronous operations in JS
"use strict";

/*
 * Your JavaScript code is single-threaded, but it's just one part of the runtime environment.
 *
 * When you make a C program, you compile it into machine code with instructions for your exact CPU.
 * Your computer runs this code directly, managing memory and I/O itself.
 *
 * When you make a Java program, you compile it into bytecode for the Java Virtual Machine (JVM).
 * The JVM provides features like garbage collection and platform independence.
 * Generally speaking, your Java code has to explicitly spawn threads to do any processing in parallel.
 *
 * In both of the above, I/O, timers, and networking will block any thread. A program must manage multiple threads itself if it wishes to make two network calls at the same time.
 *
 * When you make a Node.js program, you run Node with your code as an argument.
 * The Node.js engine a powerful set of tools, including highly parallelized I/O operations, timers, and networking.
 * Node.js uses an event-driven, non-blocking I/O model, allowing it to handle many connections efficiently with a single thread.
 *
 * In browsers, JavaScript also runs in a single thread, but the runtime environment provides APIs for asynchronous operations (including setTimeout, fetch, and event listeners).
 * The event loop coordinates the execution of synchronous code, asynchronous callbacks, and promises, making JavaScript highly responsive for user interfaces.
 *
 * Asynchronous operations in JavaScript are handled via callbacks, promises, and async/await syntax, allowing you to write non-blocking code that can wait for I/O or timers without freezing the main thread.
 *
 * More info: https://dev.to/rahmanmajeed/javascript-the-runtime-environment-35a2
 */

/**
 * Do busy work for a given time
 * @param {number} ms the min milliseconds before the function exits
 * @returns {number}
 */
function functionThatTakesTime(ms) {
  const start = Date.now();
  let j = 1;
  while (Date.now() - start < ms) {
    // very important stuff
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

  // console.log('before the setTimeout1');
  // setTimeout(() => {
  //   console.log('inside of the setTimeout1');
  // }, 100);
  // console.log('after the setTimeout1');

  // note that the outside function keeps running (and "blocks" the callback from running until it completes)

  // console.log('before the setTimeout2');
  // setTimeout(() => {
  //   console.log('inside of the setTimeout2');
  // }, 0);
  // console.log('after the setTimeout2');

  ////////////////////

  // remember that the JS itself is singly threaded
  // setTimeout gives the callback to the event-loop after the specified time.
  // If it's already running something or something came before it, it will not run at that time exactly

  // const before = Date.now();
  // setTimeout(() => {
  //   console.log(`I said to only wait 10ms, but this took ${Date.now() - before}ms before running`);
  // }, 10)
  // functionThatTakesTime(100);

  ////////////////////

  // Example: Using callbacks with Node.js file streams (createReadStream)
  // This code only works in Node.js, not in browsers.

  // const fs = require('fs');
  // const filePath = __dirname + '/01-variables.js';
  // const stream = fs.createReadStream(filePath, { encoding: 'utf8', highWaterMark: 64 });
  // let chunkCount = 0;
  // const interval = setInterval(() => console.log({chunkCount}), 1);
  // stream.on('data', (chunk) => {
  //   chunkCount++;
  //   const paddedChunkStr = chunkCount.toString().padStart(2, '0');
  //   console.log(`Read chunk #${paddedChunkStr}:`, chunk.replaceAll('\n', '\\n'));
  // });
  // stream.on('end', () => {
  //   console.log('Finished reading file with createReadStream (callback).');
  //   interval.close();
  // });
  // stream.on('error', (err) => {
  //   console.error('Error reading file:', err);
  // });

  ////////////////////

  // // Modern async programming uses Promises.
  // // async functions return Promises.


  // /**
  //  * super complicated code
  //  * @returns {Promise<number>}
  //  */
  // async function itsTwoIPromise() {
  //   return 2;
  // }

  // /**
  //  * super complicated code
  //  * @returns {Promise<3>}
  //  */
  // const itsThreeIPromise = async () => {
  //   return 3;
  // }

  // // note that these didn't have to be async, but their behavior is different because they are!

  // const twoProm = itsTwoIPromise();
  // // console.log(twoProm);
  // // console.log(twoProm == 2);
  // // console.log(typeof twoProm);

  // const threeProm = itsThreeIPromise();
  // // console.log(threeProm);

  // // async functions ALWAYS return Promises!
  // // A Promise is a wrapper object for an operation that may complete asynchronously in the future, representing either a successful result or an error.
  // // we can await them to get their values
  // const twoRes1 = await twoProm;
  // const twoRes2 = await itsTwoIPromise();
  // // console.log(twoRes1);
  // // console.log(twoRes2);

  // // awaiting non-promises is generally harmless
  // // ...but don't be messy, it implies that the author was careless or clueless
  // console.log(await 2);
  // const kindaRandom = await functionThatTakesTime(100);
  // console.log(kindaRandom);

  // // be careful with JSDocs! Make sure you specify that it returns `Promise<type>`
  // /**
  //  * I trick the next dev into thinking it returns a number instead of a Promise.
  //  * @returns {number}
  //  */
  // const itsFourWithBadJSDoc = async () => {
  //   return (await itsTwoIPromise()) * 2;
  // }
  // // VSCode trusts that it's a number because the JSDoc says so!
  // // but it actually a Promise
  // const fourWithoutAwait = itsFourWithBadJSDoc();
  // const fourAwaited = await itsFourWithBadJSDoc();
  // console.log({ fourWithoutAwait, fourAwaited });
  // console.log(fourWithoutAwait == fourAwaited);

  ////////////////////

  {
  // Example: network calls
  // We wish to return two dog facts and a cat fact as a string using the following APIs

  const dogFactFetchResponsePromise = fetch('https://dogapi.dog/api/v2/facts?limit=2');

  // console.log(dogFactFetchResponsePromise);
  // ------------------
  await dogFactFetchResponsePromise; // await for the promise to resolve before executing any more code
  // console.log(dogFactFetchResponsePromise);

  const dogFactResponse = await dogFactFetchResponsePromise; // unwrap the promise and get the resolved data, in practice we would have just awaited the fetch above directly
  // console.log(dogFactResponse);
  // fetch was designed where the response does not have to wait for all of the data to be included. This lets us retrieve it in a few ways. We can use the attached async json() function for now
  // https://developer.mozilla.org/en-US/docs/Web/API/Response#instance_methods

  const dogFactJson = await dogFactResponse.json();
  // console.log(JSON.stringify(dogFactJson, undefined, 2));
  const dogFacts = dogFactJson?.data?.map((curr) => curr?.attributes?.body || '') || [];
  // console.log(dogFacts);


  const catFactResponse = await fetch('https://meowfacts.herokuapp.com/');
  const catFactJson = await catFactResponse.json();
  const catFacts = catFactJson.data;

  console.log(`Dog fact 1: ${dogFacts[0]}\nDog fact 2: ${dogFacts[1]}\nCat fact 1: ${catFacts[0]}`);
  }

  ////////////////////

  // A more efficient version of the above would be to parallelize the network calls:

  // const getDogFacts = async () => {
  //   console.log('dogFacts start');
  //   const dogFactResponse = await fetch('https://dogapi.dog/api/v2/facts?limit=2');
  //   console.log('dogFacts response');
  //   if (!dogFactResponse.ok) return [];
  //   const dogFactJson = await dogFactResponse.json();
  //   console.log('dogFacts json');
  //   const dogFacts = dogFactJson?.data?.map((curr) => curr?.attributes?.body || '') || [];
  //   return dogFacts;
  // }

  // const getCatFacts = async () => {
  //   console.log('catFacts start');
  //   const catFactResponse = await fetch('https://meowfacts.herokuapp.com/');
  //   console.log('catFacts response');
  //   if (!catFactResponse.ok) return [];
  //   const catFactJson = await catFactResponse.json();
  //   console.log('catFacts json');
  //   const catFacts = catFactJson.data;
  //   return catFacts;
  // }

  // const [dogFactsProm, catFactsProm] = [
  //   getDogFacts(),
  //   getCatFacts(),
  // ];

  // console.log('before Promise.all()')

  // const [dogFacts, catFacts] = await Promise.all([
  //   dogFactsProm,
  //   catFactsProm,
  // ]);

  // console.log(`Dog fact 1: ${dogFacts[0]}\nDog fact 2: ${dogFacts[1]}\nCat fact 1: ${catFacts[0]}`);
}

main();
console.log("after main()");
