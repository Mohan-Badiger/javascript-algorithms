/**
 * ==============================================================================
 * 🎯 LEVEL 05: FRESHER STARTER 5 - REMOVE DUPLICATES FROM SORTED ARRAY (LeetCode #26)
 * ==============================================================================
 * 
 * ❓ PROBLEM STATEMENT:
 * Given an integer array `nums` sorted in non-decreasing order,
 * remove the duplicates IN-PLACE such that each unique element appears only once.
 * Return the number of unique elements `k`.
 * 
 * ⚠️ Constraint: O(1) extra memory. Do NOT create another array.
 * 
 * Example:
 * nums = [1, 1, 2]
 * Output: k = 2, nums = [1, 2, _]
 * 
 * Example 2:
 * nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
 * Output: k = 5, nums = [0, 1, 2, 3, 4, _, _, _, _, _]
 * ==============================================================================
 */

// ------------------------------------------------------------------------------
// TWO-POINTER IN-PLACE OVERWRITE (O(N) Time, O(1) Space)
// ------------------------------------------------------------------------------
/**
 * 💡 INTUITION:
 * Because the array is ALREADY SORTED, all duplicates are grouped together!
 * 
 * Pointers:
 * - `uniqueIndex` (Slow pointer): Keeps track of the last known unique element.
 * - `j` (Fast scanner pointer): Looks ahead for a new number that differs from nums[uniqueIndex].
 * 
 * Whenever `nums[j] !== nums[uniqueIndex]`:
 *   uniqueIndex++
 *   nums[uniqueIndex] = nums[j]
 * 
 * 📋 DRY RUN for [1, 1, 2]:
 * Start: uniqueIndex = 0 (nums[0] = 1)
 * j = 1: nums[1] is 1 === nums[uniqueIndex] (duplicate, ignore)
 * j = 2: nums[2] is 2 !== nums[uniqueIndex]!
 *        uniqueIndex becomes 1
 *        nums[1] = 2
 * Array is now: [1, 2, ...]
 * Unique count = uniqueIndex + 1 = 2!
 */
function removeDuplicates(nums) {
  if (nums.length === 0) return 0;

  let uniqueIndex = 0;

  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[uniqueIndex]) {
      uniqueIndex++;
      nums[uniqueIndex] = nums[j];
    }
  }

  return uniqueIndex + 1;
}

// ------------------------------------------------------------------------------
// 🧪 RUN TESTS
// ------------------------------------------------------------------------------
console.log("=== REMOVE DUPLICATES TESTS ===");

const arr1 = [1, 1, 2];
const k1 = removeDuplicates(arr1);
console.log(`Unique count: ${k1}, Array preview:`, arr1.slice(0, k1), "(Expected: [1, 2])");

const arr2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const k2 = removeDuplicates(arr2);
console.log(`Unique count: ${k2}, Array preview:`, arr2.slice(0, k2), "(Expected: [0, 1, 2, 3, 4])");

