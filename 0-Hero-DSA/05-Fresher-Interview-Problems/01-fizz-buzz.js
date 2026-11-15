/**
 * ==============================================================================
 * 🎯 LEVEL 05: FRESHER STARTER 1 - FIZZ BUZZ (LeetCode #412)
 * ==============================================================================
 * 
 * ❓ PROBLEM STATEMENT:
 * Given an integer `n`, return an array of strings from 1 to n where:
 * - For multiples of 3, print "Fizz"
 * - For multiples of 5, print "Buzz"
 * - For multiples of BOTH 3 and 5, print "FizzBuzz"
 * - Otherwise, print the number as a string.
 * 
 * ⚠️ COMMON FRESHER BLUNDER:
 * Checking `i % 3 === 0` FIRST, and `i % 5 === 0` SECOND!
 * If n = 15, `15 % 3 === 0` is true, so it outputs "Fizz" instead of "FizzBuzz"!
 * Always check the combined condition `(i % 15 === 0)` FIRST,
 * or concatenate string outputs.
 * ==============================================================================
 */

// ------------------------------------------------------------------------------
// APPROACH 1: CLEAN IF-ELSE WITH ORDER OF PRECEDENCE
// ------------------------------------------------------------------------------
function fizzBuzz(n) {
  const result = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) { // Or i % 15 === 0
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(String(i));
    }
  }

  return result;
}

// ------------------------------------------------------------------------------
// APPROACH 2: STRING CONCATENATION (Scalable & Elegant)
// ------------------------------------------------------------------------------
// Notice: If divisible by 3, add "Fizz". If also divisible by 5, add "Buzz"!
function fizzBuzzConcat(n) {
  const result = [];

  for (let i = 1; i <= n; i++) {
    let output = "";

    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";

    // If output is empty, number is not divisible by 3 or 5
    if (output === "") output += i;

    result.push(output);
  }

  return result;
}

// ------------------------------------------------------------------------------
// 🧪 RUN TESTS
// ------------------------------------------------------------------------------
console.log("=== FIZZ BUZZ FOR N = 15 ===");
console.log(fizzBuzz(15));

