/**
 * ==============================================================================
 * 🎯 LEVEL 05: FRESHER STARTER 2 - MISSING NUMBER (LeetCode #268)
 * ==============================================================================
 * 
 * ❓ PROBLEM STATEMENT:
 * Given an array `nums` containing `n` distinct numbers in the range `[0, n]`,
 * return the only number in the range that is missing from the array.
 * 
 * Example 1: nums = [3, 0, 1] (n = 3)
 * Range: [0, 1, 2, 3] -> Missing is 2!
 * 
 * Example 2: nums = [0, 1] (n = 2)
 * Range: [0, 1, 2] -> Missing is 2!
 * ==============================================================================
 */

// ------------------------------------------------------------------------------
// APPROACH 1: GAUSS SUM FORMULA (O(N) Time, O(1) Space)
// ------------------------------------------------------------------------------
/**
 * 💡 MATHEMATICAL INSIGHT:
 * The sum of first N natural numbers is:
 *   Expected Sum = n * (n + 1) / 2
 * 
 * If we calculate:
 *   Missing Number = (Expected Sum) - (Actual Sum of Array Elements)
 * 
 * Dry Run: nums = [3, 0, 1], n = 3
 * Expected Sum = 3 * (3 + 1) / 2 = 12 / 2 = 6
 * Actual Sum = 3 + 0 + 1 = 4
 * Missing = 6 - 4 = 2!
 */
function findMissingNumberSum(nums) {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;

  let actualSum = 0;
  for (let i = 0; i < nums.length; i++) {
    actualSum += nums[i];
  }

  return expectedSum - actualSum;
}

// ------------------------------------------------------------------------------
// APPROACH 2: BITWISE XOR TRICK (Super Impressive in Interviews!)
// ------------------------------------------------------------------------------
/**
 * 💡 XOR PROPERTIES:
 * 1. a ^ a = 0 (Any number XORed with itself cancels out to 0!)
 * 2. a ^ 0 = a (Any number XORed with 0 stays itself)
 * 
 * If we XOR all indices [0...n] and all numbers in the array,
 * every duplicate number cancels out, leaving ONLY the missing number!
 * 
 * ⏱️ Time: O(N) | 💾 Space: O(1) [Prevents integer overflow on huge numbers!]
 */
function findMissingNumberXOR(nums) {
  let xor = 0;

  // XOR all numbers from 0 to n
  for (let i = 0; i <= nums.length; i++) {
    xor ^= i;
  }

  // XOR with all elements in nums
  for (let i = 0; i < nums.length; i++) {
    xor ^= nums[i];
  }

  return xor;
}

// ------------------------------------------------------------------------------
// 🧪 RUN TESTS
// ------------------------------------------------------------------------------
console.log("=== MISSING NUMBER TESTS ===");
console.log("Approach 1 (Sum) [3, 0, 1]:", findMissingNumberSum([3, 0, 1]), "(Expected: 2)");
console.log("Approach 1 (Sum) [9,6,4,2,3,5,7,0,1]:", findMissingNumberSum([9, 6, 4, 2, 3, 5, 7, 0, 1]), "(Expected: 8)");

console.log("Approach 2 (XOR) [3, 0, 1]:", findMissingNumberXOR([3, 0, 1]), "(Expected: 2)");
console.log("Approach 2 (XOR) [9,6,4,2,3,5,7,0,1]:", findMissingNumberXOR([9, 6, 4, 2, 3, 5, 7, 0, 1]), "(Expected: 8)");

