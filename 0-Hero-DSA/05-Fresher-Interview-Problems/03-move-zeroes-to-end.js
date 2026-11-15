/**
 * ==============================================================================
 * 🎯 LEVEL 05: FRESHER STARTER 3 - MOVE ZEROES TO END (LeetCode #283)
 * ==============================================================================
 * 
 * ❓ PROBLEM STATEMENT:
 * Given an integer array `nums`, move all `0`s to the end of it while maintaining
 * the relative order of the non-zero elements.
 * 
 * ⚠️ Constraint: You MUST do this in-place without making a copy of the array!
 * 
 * Example:
 * Input : [0, 1, 0, 3, 12]
 * Output: [1, 3, 12, 0, 0]
 * ==============================================================================
 */

// ------------------------------------------------------------------------------
// TWO-POINTER APPROACH (O(N) Time, O(1) Space)
// ------------------------------------------------------------------------------
/**
 * 💡 INTUITION:
 * Maintain a pointer `insertPos` which tracks where the next non-zero element should go.
 * 
 * Walk through array with loop pointer `i`:
 * If `nums[i] !== 0`:
 *   Swap nums[i] with nums[insertPos]!
 *   insertPos++
 * 
 * 📋 DRY RUN TABLE for [0, 1, 0, 3, 12]:
 * 
 * | i | nums[i] | Is nums[i] !== 0? | Action                   | insertPos | Array State        |
 * |---|---------|-------------------|--------------------------|-----------|--------------------|
 * | 0 | 0       | No                | None                     | 0         | [0, 1, 0, 3, 12]   |
 * | 1 | 1       | Yes               | Swap nums[1] & nums[0]   | 1         | [1, 0, 0, 3, 12]   |
 * | 2 | 0       | No                | None                     | 1         | [1, 0, 0, 3, 12]   |
 * | 3 | 3       | Yes               | Swap nums[3] & nums[1]   | 2         | [1, 3, 0, 0, 12]   |
 * | 4 | 12      | Yes               | Swap nums[4] & nums[2]   | 3         | [1, 3, 12, 0, 0]   |
 */
function moveZeroes(nums) {
  let insertPos = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      // Swap non-zero element into insertPos
      const temp = nums[i];
      nums[i] = nums[insertPos];
      nums[insertPos] = temp;

      insertPos++;
    }
  }

  return nums;
}

// ------------------------------------------------------------------------------
// 🧪 RUN TESTS
// ------------------------------------------------------------------------------
console.log("=== MOVE ZEROES TESTS ===");

const arr1 = [0, 1, 0, 3, 12];
console.log("Before:", arr1);
moveZeroes(arr1);
console.log("After :", arr1, "(Expected: [1, 3, 12, 0, 0])");

const arr2 = [0, 0, 1];
moveZeroes(arr2);
console.log("After [0, 0, 1]:", arr2, "(Expected: [1, 0, 0])");

