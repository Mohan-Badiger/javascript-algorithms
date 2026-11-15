/**
 * ==============================================================================
 * 🎯 LEVEL 05: FRESHER STARTER 4 - TWO SUM (LeetCode #1)
 * ==============================================================================
 * 
 * ❓ PROBLEM STATEMENT:
 * Given an array of integers `nums` and an integer `target`,
 * return indices of the two numbers such that they add up to `target`.
 * 
 * Example:
 * nums = [2, 7, 11, 15], target = 9
 * nums[0] + nums[1] = 2 + 7 = 9 -> Return [0, 1]
 * ==============================================================================
 */

// ------------------------------------------------------------------------------
// APPROACH 1: BRUTE FORCE (Every Pair Check)
// ------------------------------------------------------------------------------
/**
 * 💡 INTUITION:
 * Check every possible pair (i, j) using nested loops.
 * ⏱️ Time: O(N^2) | 💾 Space: O(1)
 */
function twoSumBruteForce(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

// ------------------------------------------------------------------------------
// APPROACH 2: HASH MAP / OBJECT COMPLEMENT LOOKUP (OPTIMAL O(N))
// ------------------------------------------------------------------------------
/**
 * 💡 HOW TO THINK LIKE A SENIOR:
 * When standing at `nums[i]`, what number do I NEED to reach `target`?
 *   complement = target - nums[i]
 * 
 * Instead of searching the rest of the array with another loop (O(N)),
 * store previous numbers in a Hash Map for instant O(1) lookup!
 * 
 * 📋 DRY RUN for nums = [2, 11, 7, 15], target = 9:
 * 
 * Map starts empty: {}
 * 
 * 1. i = 0, current = 2:
 *    Need: 9 - 2 = 7. Is 7 in map? No!
 *    Store 2 at index 0 -> Map: { 2: 0 }
 * 
 * 2. i = 1, current = 11:
 *    Need: 9 - 11 = -2. Is -2 in map? No!
 *    Store 11 at index 1 -> Map: { 2: 0, 11: 1 }
 * 
 * 3. i = 2, current = 7:
 *    Need: 9 - 7 = 2. Is 2 in map? YES! Found at index 0!
 *    Return [0, 2]! Solved in a SINGLE pass!
 * 
 * ⏱️ Time: O(N) | 💾 Space: O(N)
 */
function twoSumOptimal(nums, target) {
  const seenMap = new Map(); // Stores: number -> its index

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const complement = target - current;

    if (seenMap.has(complement)) {
      return [seenMap.get(complement), i];
    }

    seenMap.set(current, i);
  }

  return [];
}

// ------------------------------------------------------------------------------
// 🧪 RUN TESTS
// ------------------------------------------------------------------------------
console.log("=== TWO SUM TESTS ===");
console.log("Brute Force [2, 7, 11, 15], target 9:", twoSumBruteForce([2, 7, 11, 15], 9));
console.log("Optimal Map [2, 11, 7, 15], target 9:", twoSumOptimal([2, 11, 7, 15], 9));
console.log("Optimal Map [3, 2, 4], target 6:", twoSumOptimal([3, 2, 4], 6));

