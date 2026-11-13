/**
 * ==============================================================================
 * 🔢 LEVEL 01: EXTRACTING DIGITS & NUMBER MANIPULATION
 * ==============================================================================
 * 
 * 💡 THE GOLDEN RULE OF DIGIT MANIPULATION:
 * Every number in the decimal system is made of base 10.
 * Two magic operations you MUST burn into your brain:
 * 
 * 1. GET THE LAST DIGIT:
 *    const lastDigit = n % 10;
 *    Example: 574 % 10 = 4
 * 
 * 2. REMOVE THE LAST DIGIT:
 *    n = Math.floor(n / 10);
 *    Example: Math.floor(574 / 10) = 57
 * 
 * Repeat until n becomes 0!
 * ==============================================================================
 */

// ------------------------------------------------------------------------------
// 1. COUNT DIGITS IN AN INTEGER
// ------------------------------------------------------------------------------
/**
 * Dry-Run for n = 456:
 * Iteration 1: n = 456 -> last digit 6 -> count = 1 -> n becomes 45
 * Iteration 2: n = 45  -> last digit 5 -> count = 2 -> n becomes 4
 * Iteration 3: n = 4   -> last digit 4 -> count = 3 -> n becomes 0
 * Loop ends! Result = 3.
 */
function countDigits(num) {
  let n = Math.abs(num); // Handle negative numbers
  if (n === 0) return 1; // Edge case: 0 has 1 digit

  let count = 0;
  while (n > 0) {
    count++;
    n = Math.floor(n / 10); // Shrink number by dropping last digit
  }
  return count;
}

// ------------------------------------------------------------------------------
// 2. SUM OF DIGITS
// ------------------------------------------------------------------------------
/**
 * Example: 1234 -> 1 + 2 + 3 + 4 = 10
 */
function sumOfDigits(num) {
  let n = Math.abs(num);
  let total = 0;

  while (n > 0) {
    const digit = n % 10;   // 1. Extract last digit
    total += digit;         // 2. Add to total
    n = Math.floor(n / 10); // 3. Discard last digit
  }

  return total;
}

// ------------------------------------------------------------------------------
// 3. REVERSE A NUMBER (Pure Math, No String Conversion)
// ------------------------------------------------------------------------------
/**
 * Intuition:
 * To reverse, every new digit extracted is pushed into the tens place!
 * reversed = (reversed * 10) + digit
 * 
 * Dry-Run for 123:
 * Start: reversed = 0
 * Iteration 1: digit = 3 -> reversed = (0 * 10) + 3 = 3
 * Iteration 2: digit = 2 -> reversed = (3 * 10) + 2 = 32
 * Iteration 3: digit = 1 -> reversed = (32 * 10) + 1 = 321
 */
function reverseNumber(num) {
  const isNegative = num < 0;
  let n = Math.abs(num);
  let reversed = 0;

  while (n > 0) {
    const lastDigit = n % 10;
    reversed = (reversed * 10) + lastDigit;
    n = Math.floor(n / 10);
  }

  return isNegative ? -reversed : reversed;
}

// ------------------------------------------------------------------------------
// 🧪 RUNNABLE TESTS
// ------------------------------------------------------------------------------
console.log("=== 1. COUNT DIGITS ===");
console.log("countDigits(7492):", countDigits(7492), "(Expected: 4)");
console.log("countDigits(0):", countDigits(0), "(Expected: 1)");

console.log("\n=== 2. SUM OF DIGITS ===");
console.log("sumOfDigits(1234):", sumOfDigits(1234), "(Expected: 10)");
console.log("sumOfDigits(99):", sumOfDigits(99), "(Expected: 18)");

console.log("\n=== 3. REVERSE NUMBER ===");
console.log("reverseNumber(12345):", reverseNumber(12345), "(Expected: 54321)");
console.log("reverseNumber(-456):", reverseNumber(-456), "(Expected: -654)");

/**
 * 🏋️ PRACTICE CHALLENGE:
 * Write a function `productOfDigits(n)` that multiplies all digits of a number.
 * Example: 234 -> 2 * 3 * 4 = 24.
 */
