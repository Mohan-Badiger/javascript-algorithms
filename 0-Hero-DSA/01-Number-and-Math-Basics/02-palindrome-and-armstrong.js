/**
 * ==============================================================================
 * 🔢 LEVEL 01: PALINDROME & ARMSTRONG NUMBERS
 * ==============================================================================
 * 
 * 💡 CONCEPT 1: PALINDROME NUMBER
 * A number that reads the same forwards and backwards.
 * Examples:
 *   121   -> reversed is 121   -> ✅ Palindrome
 *   12321 -> reversed is 12321 -> ✅ Palindrome
 *   -121  -> reversed is 121-  -> ❌ NOT a palindrome (negative sign)
 *   10    -> reversed is 01    -> ❌ NOT a palindrome
 * 
 * 💡 CONCEPT 2: ARMSTRONG NUMBER
 * A number where the sum of its digits raised to the power of the number of digits
 * equals the number itself.
 * Example for 153 (has 3 digits):
 *   1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153 -> ✅ Armstrong!
 * Example for 370 (has 3 digits):
 *   3^3 + 7^3 + 0^3 = 27 + 343 + 0 = 370 -> ✅ Armstrong!
 * ==============================================================================
 */

// ------------------------------------------------------------------------------
// 1. IS PALINDROME NUMBER (LeetCode #9 Style)
// ------------------------------------------------------------------------------
function isPalindromeNumber(x) {
  // Edge cases:
  // 1. Negative numbers are never palindromes (e.g. -121 is 121-)
  // 2. Numbers ending in 0 (except 0 itself) cannot be palindromes (e.g. 10 reversed is 01)
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  const original = x;
  let reversed = 0;
  let temp = x;

  while (temp > 0) {
    const digit = temp % 10;
    reversed = (reversed * 10) + digit;
    temp = Math.floor(temp / 10);
  }

  return original === reversed;
}

// ------------------------------------------------------------------------------
// 2. IS ARMSTRONG NUMBER
// ------------------------------------------------------------------------------
function isArmstrongNumber(num) {
  if (num < 0) return false;

  const original = num;

  // Step 1: Count total digits (power)
  let count = 0;
  let temp = num;
  while (temp > 0) {
    count++;
    temp = Math.floor(temp / 10);
  }

  // Step 2: Sum each digit raised to power of `count`
  let sum = 0;
  temp = num;
  while (temp > 0) {
    const digit = temp % 10;
    sum += Math.pow(digit, count);
    temp = Math.floor(temp / 10);
  }

  return sum === original;
}

// ------------------------------------------------------------------------------
// 🧪 RUNNABLE TESTS
// ------------------------------------------------------------------------------
console.log("=== 1. PALINDROME NUMBER TESTS ===");
console.log("isPalindrome(121):", isPalindromeNumber(121), "(Expected: true)");
console.log("isPalindrome(-121):", isPalindromeNumber(-121), "(Expected: false)");
console.log("isPalindrome(10):", isPalindromeNumber(10), "(Expected: false)");
console.log("isPalindrome(12321):", isPalindromeNumber(12321), "(Expected: true)");

console.log("\n=== 2. ARMSTRONG NUMBER TESTS ===");
console.log("isArmstrong(153):", isArmstrongNumber(153), "(Expected: true -> 1+125+27 = 153)");
console.log("isArmstrong(371):", isArmstrongNumber(371), "(Expected: true -> 27+343+1 = 371)");
console.log("isArmstrong(123):", isArmstrongNumber(123), "(Expected: false)");

