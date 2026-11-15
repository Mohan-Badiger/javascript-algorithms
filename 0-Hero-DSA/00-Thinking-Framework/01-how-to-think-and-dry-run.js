/**
 * ==============================================================================
 * 🧠 LEVEL 00: THE THINKING FRAMEWORK & HOW TO DRY-RUN
 * ==============================================================================
 * 
 * 💡 WHY FRESHERS GET STUCK:
 * Most beginners see a problem statement and immediately try to write JavaScript code.
 * If the code fails, they randomly change <, >, +, - until it works or they get frustrated.
 * 
 * 🎯 THE GOAL:
 * Train your brain to solve problems on paper BEFORE touching the keyboard.
 * 
 * ------------------------------------------------------------------------------
 * THE 4-STEP PROBLEM SOLVING FRAMEWORK:
 * 1. Understand: Input, Output, Constraints, and Edge cases.
 * 2. Visual Dry-Run: Track variables in a table on paper.
 * 3. Pseudocode: Write step-by-step logic in simple English.
 * 4. Implement & Test: Translate to JS and verify with multiple test cases.
 * ==============================================================================
 */

// ------------------------------------------------------------------------------
// 📌 DEMONSTRATION PROBLEM:
// "Given an array of numbers, calculate the sum of all EVEN numbers."
// ------------------------------------------------------------------------------

/**
 * ------------------------------------------------------------------------------
 * STEP 1: UNDERSTAND THE PROBLEM
 * ------------------------------------------------------------------------------
 * - Input: Array of integers, e.g., [3, 8, 5, 2, 9, 4]
 * - Output: Single integer (sum of evens: 8 + 2 + 4 = 14)
 * - Edge Cases:
 *   - What if array is empty `[]`? -> Return 0.
 *   - What if there are no even numbers `[1, 3, 5]`? -> Return 0.
 *   - What about negative even numbers `[-2, 4]`? -> Handle negative numbers properly.
 */

/**
 * ------------------------------------------------------------------------------
 * STEP 2: DRY-RUN TABLE (Always do this on paper!)
 * ------------------------------------------------------------------------------
 * Test array: [3, 8, 2]
 * 
 * Initial state: sum = 0
 * 
 * | Step (i) | Element (arr[i]) | Is arr[i] % 2 === 0? | Action taken       | New sum |
 * |----------|------------------|----------------------|--------------------|---------|
 * | i = 0    | 3                | 3 % 2 !== 0 (false)  | Ignore, move next  | 0       |
 * | i = 1    | 8                | 8 % 2 === 0 (true)   | sum = sum + 8      | 8       |
 * | i = 2    | 2                | 2 % 2 === 0 (true)   | sum = sum + 2      | 10      |
 * | i = 3    | Loop terminates  | (i reached length)   | Return sum         | 10      |
 */

/**
 * ------------------------------------------------------------------------------
 * STEP 3: PSEUDOCODE (Simple English Steps)
 * ------------------------------------------------------------------------------
 * function sumOfEvens(arr):
 *   1. Initialize a variable `totalSum` to 0.
 *   2. Loop through `i` from 0 to arr.length - 1:
 *        a. If arr[i] is divisible by 2:
 *             add arr[i] to `totalSum`
 *   3. Return `totalSum`.
 */

/**
 * ------------------------------------------------------------------------------
 * STEP 4: CLEAN IMPLEMENTATION
 * ------------------------------------------------------------------------------
 */
function sumOfEvens(numbers) {
  // Edge case check
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return 0;
  }

  let totalSum = 0; // Accumulator variable

  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];

    // Check if even (divisible by 2 without remainder)
    if (currentNumber % 2 === 0) {
      totalSum += currentNumber;
    }
  }

  return totalSum;
}

// ------------------------------------------------------------------------------
// 🧪 RUNNABLE TESTS & VERIFICATION
// ------------------------------------------------------------------------------
console.log("=== RUNNING TEST CASES ===");
console.log("Test 1 (Standard):", sumOfEvens([3, 8, 5, 2, 9, 4]), "Expected: 14");
console.log("Test 2 (No evens):", sumOfEvens([1, 3, 5, 7]), "Expected: 0");
console.log("Test 3 (Empty array):", sumOfEvens([]), "Expected: 0");
console.log("Test 4 (Negative evens):", sumOfEvens([-4, 2, -6, 5]), "Expected: -8");

/**
 * ------------------------------------------------------------------------------
 * 🏋️ YOUR PRACTICE CHALLENGE (Solve this yourself in a scratchpad!):
 * ------------------------------------------------------------------------------
 * Problem: Write a function `countGreaterThanTen(arr)` that counts how many numbers
 * in an array are strictly greater than 10.
 * 
 * Hint:
 * 1. Initialize count = 0
 * 2. Loop through array
 * 3. If element > 10, increment count
 * 4. Return count
 */

