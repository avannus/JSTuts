// Don't shoot yourself in the foot
// More opinionated / less JS-specific

/*
 * Your code will be read many more times than it is written.
 * Be nice to your future self and the people who will read your code.
 * It's very easy to write code that is hard to read.
 *
 * If it's not clear, someone may misinterpret what your function does and misuse it!
 *
 * Here're some common ways to ensure your code is more legible.
 */

////////////////////

// I've made this as hard to read as possible by using anti-patterns I've seen in production code
// Each of the following functions are trying to accomplish the same thing as each function below it
// They will all work the same if you use them how they were meant to be used...
// ...but they handle edge-cases and failures differently
// ALL of these have some happy-path bugs, but they'll be hard to spot until we clean this up.
// We'll apply tips one-by-one to make it more acceptable

const helper1 = (data, data2, o) => {
  if (data) {
    let res = new Set();

    let helper1 = (res, n, data2) => {
      if (data2.has(n)) {
        return;
      }
      res.add(n);
    };

    if (data2) {
      data2 = data2.why;

      if ((o || {}).asArray) {
        res = [];
        helper1 = (res, n, data2) => {
          if (data2.has(n)) {
            return;
          }
          res.push(n);
        };
      }

      if (!(data2 instanceof Set)) {
        data2 = new Set(data2);
      }

      if (data.myData[0].targ % 2 === 0) {
        helper1(res, 2, data2);
      }
      for (let i = 3; i < data.myData[0].targ; i += 2) {
        if (data.myData[0].targ % i === 0) {
          helper1(res, i, data2);
        }
      }
      return res;
    }
  }
  throw new Error('Bad Args!');
}

// Let's make some example data to test it...

const myObj1 = {
  myData: [
    {
      targ: 234,
      excl: [13],
    }
  ]
};

const myObj2 = {
  why: [
    13,
  ]
};

// and log a random test case
// console.log(helper1(myObj1, myObj2));

////////////////////

// Use guard clauses!
// https://en.wikipedia.org/wiki/Guard_(computer_science)
// Don't protect your code by nesting a ton of if statements
// Write the failure case(s) explicitly near the top.

const helper2 = (data, data2, o) => {
  if (!data || !data2) {
    throw new Error('Bad Args!');
  }
  let res = new Set();

  let helper2 = (res, n, data2) => {
    if (data2.has(n)) {
      return;
    }
    res.add(n);
  };

  data2 = data2.why;

  if ((o || {}).asArray) {
    res = [];
    helper2 = (res, n, data2) => {
      if (data2.has(n)) {
        return;
      }
      res.push(n);
    };
  }

  if (!(data2 instanceof Set)) {
    data2 = new Set(data2);
  }

  if (data.myData[0].targ % 2 === 0) {
    helper2(res, 2, data2);
  }
  for (let i = 3; i < data.myData[0].targ; i += 2) {
    if (data.myData[0].targ % i === 0) {
      helper2(res, i, data2);
    }
  }
  return res;
}

// console.log(helper2(myObj1, myObj2));

////////////////////

// Keep your declarations and usages of variables close together!
// It's hard to remember a variable that you last saw 50 lines ago.
// This includes function arguments:
//  If you set a default or extract a value, do so at the beginning of the func
//  If you require `foo` as an arg because you need to read the value of `foo.bar.baz`,
//   you should have a strong reason as to why not just have `baz` as the arg.
//    That said, having an `options` object as the last function arg is canonical.

const helper3 = (n, ex, o) => {
  const { asArray } = o || {};

  if (!(ex instanceof Set)) {
    ex = new Set(ex);
  }

  let res = new Set();
  if (asArray) {
    res = [];
  }

  let helper3 = (res, n, excl) => {
    if (excl.has(n)) {
      return;
    }
    res.add(n);
  };
  if (asArray) {
    helper3 = (res, n, excl) => {
      if (excl.has(n)) {
        return;
      }
      res.push(n);
    };
  }

  if (n % 2 === 0) {
    helper3(res, 2, ex);
  }
  for (let i = 3; i < n; i += 2) {
    if (n % i === 0) {
      helper3(res, i, ex);
    }
  }
  return res;
}

// console.log(helper3(myObj1.myData[0].targ, myObj2.why));

////////////////////

// Use `const` variables with descriptive names
// Try to ensure these are unique (a repeat declaration of a const can be confusing)
// Good variable names can help document your code
// This can help with clarity(instead of mutating a `let` variable)
// Avoid re-assigning function parameters

function findFactors1(baseNum, exclude, options) {
  const { asArray } = options || {};
  const factors = asArray ? [] : new Set();

  const excludeSet = exclude instanceof Set ? exclude : new Set(exclude);

  const addFactor = (factList, numToAdd, exclSet) => {
    if (exclSet.has(numToAdd)) {
      return;
    }
    if (asArray) {
      factList.push(numToAdd);
    } else {
      factList.add(numToAdd);
    }
  };

  if (baseNum % 2 === 0) {
    addFactor(factors, 2, excludeSet);
  }
  for (let i = 3; i < baseNum; i += 2) {
    if (baseNum % i === 0) {
      addFactor(factors, i, excludeSet);
    }
  }
  return factors;
}

// console.log(findFactors1(234, [13]));

////////////////////

// Add JSDocs!

/**
 * Gets factors of a number, using an exclusion list.
 * @param {number} baseNum - the number to find the factors of
 * @param {Set<number> | number[] ?} exclude - numbers to exclude, if any
 * @param {object?} options
 * @param {boolean | undefined} options.asArray - if the return should be an Array (instead of a Set)
 * @returns {Set<number> | number[]} factors
 */
function findFactors2(baseNum, exclude, options) {
  const { asArray } = options || {};
  const factors = asArray ? [] : new Set();

  const excludeSet = exclude instanceof Set ? exclude : new Set(exclude);

  /**
   * Adds numbers to an array or a Set, excluding those in exclSet
   * @param {number[] | Set<number>} factList list of factors
   * @param {number} numToAdd number to add to factList
   * @param {Set<number>} exclSet a Set of numbers that should not be included in factList
   */
  const addFactor = (factList, numToAdd, exclSet) => {
    if (exclSet.has(numToAdd)) {
      return;
    }
    if (asArray) {
      factList.push(numToAdd);
    } else {
      factList.add(numToAdd);
    }
  };

  if (baseNum % 2 === 0) {
    addFactor(factors, 2, excludeSet);
  }
  // loop over all odd factors
  for (let i = 3; i < baseNum; i += 2) {
    if (baseNum % i === 0) {
      addFactor(factors, i, excludeSet);
    }
  }
  return factors;
}

// Look for bugs now that it's a little easier to read!
// console.log(findFactors2(234, [13]));

////////////////////

// Before you continue, find the main bug(s) above!

////////////////////

// This one is hard without experience: you should be commenting more as to *why*, not *what*!
// *what* should focus on unintuitive behavior, not just restating lines of code in English
// Some bugs are just simple code errors (like having the wrong stopping place for a loop)
// Others are issues with the implementation (your algorithm works as expected, but it doesn't actually solve the problem)
// simple *what* comments may help with the simple issues
//   "loop over all odd factors" is showing that if we missed an odd factor, it was likely a mistake
// comments that explain intent (esp. *why* comments) can explain what the real intent of the code is...

////////////////////

// Some "bugs" found in the function...
// 1. Never includes 1 as a factor
// 2. Never includes the number itself as a factor
// 2. Never includes even factors besides 2 (???)

// the JSDocs help with the types, but they don't explain *why* the function is doing all of this...
// ...but if the code comments explained *why*, it could maybe help...

////////////////////

// Let's look at the same function, now with slightly different comments and variable names

/**
 * Returns a list of factors to aid in finding all prime factors of a number.
 * Will exclude any known composite (non-prime) numbers in the supplied knownComposites.
 * This is exported in a library that supplies knownComposites as both a Set and as an Array.
 * @param {number} baseNum - the number to find the factors of
 * @param {Set<number> | number[] ?} knownComposites - known non-primes that will be filtered out.
 *   Note that even composites are never included in the return data, so need not be included here.
 * @param {object?} options
 * @param {boolean | undefined} options.asArray - if the return should be an Array (instead of a Set)
 * @returns {Set<number> | number[]} all factors, with some known composites filtered out
 */
function findPrimeFactorCandidates1(baseNum, knownComposites, options) {
  const { asArray } = options || {};
  const factors = asArray ? [] : new Set();

  const excludeSet = knownComposites instanceof Set ? knownComposites : new Set(knownComposites);

  /**
   * Adds numbers to an Array or a Set, excluding those in exclSet.
   * This is still bad code, but I wanted 
   * @param {number[] | Set<number>} factList list of factors, external library uses both types so they must be supported
   * @param {number} numToAdd candidate number to add
   * @param {Set<number>} excludes numbers to exclude
   */
  const addFactor = (factList, numToAdd, excludes) => {
    if (excludes.has(numToAdd)) {
      return;
    }
    if (asArray) {
      factList.push(numToAdd);
    } else {
      factList.add(numToAdd);
    }
  };

  if (baseNum % 2 === 0) {
    addFactor(factors, 2, excludeSet);
  }
  for (let i = 3; i < baseNum; i += 2) {
    if (baseNum % i === 0) {
      addFactor(factors, i, excludeSet);
    }
  }
  return factors;
}

// Turns out the point of this function is to find all factors that *could* be prime!

// for consistency
// console.log(findPrimeFactorCandidates1(234, [13]));

// but now we know the *real* purpose of the second argument!
// `[13]` doesn't make sense here
// console.log(findPrimeFactorCandidates1(234, []));

// This explains why we never return `1` (1 is not prime),
//  and why we never return even factors (besides `2`)
// But we now know that not adding the number itself could be a bug!
//  (7 is a prime factor of 7)

////////////////////

// We can now do a final refactor and fix our function!
// Try to keep a single type and single source of truth
//  `factors` (renamed `candidateFactors` below) could be an array or set,
//   which is hard to read and prone to error
// `addFactor()` is a complicated solution for the problem caused by mixing types mid-function
// If a helper function is used once or twice, it may make sense to simplify

/**
 * Returns a list of factors to aid in finding all prime factors of a number.
 * Will exclude any known composite (non-prime) numbers in the supplied knownComposites.
 * This is exported in a library that supplies knownComposites as both a Set and as an Array.
 * @param {number} baseNum - the number to find the factors of
 * @param {Set<number> | number[] ?} knownComposites - known non-primes that will be filtered out.
 *   Note that even composites are never included in the return data, so need not be included here.
 * @param {object?} options
 * @param {boolean | undefined} options.asArray - if the return should be an Array (instead of a Set)
 * @returns {Set<number> | number[]} all factors, with some known composites filtered out
 */
function findPrimeFactorCandidates2(baseNum, knownComposites, options) {
  const { asArray } = options || {};

  const compSet = knownComposites instanceof Set ? knownComposites : new Set(knownComposites);

  const candidateFactors = [];

  // 2 is the only even prime; check explicitly so we can skip all other evens
  if (baseNum % 2 === 0) {
    candidateFactors.push(2);
  }
  // check odd numbers, starting with the first odd prime (3)
  for (let i = 3; i <= baseNum; i += 2) {
    if (baseNum % i === 0 && !compSet.has(i)) {
      candidateFactors.push(i);
    }
  }

  const formattedFactors = asArray ? candidateFactors : new Set(candidateFactors);
  return formattedFactors;
}

// console.log(findPrimeFactorCandidates2(234, [9, 15]));
