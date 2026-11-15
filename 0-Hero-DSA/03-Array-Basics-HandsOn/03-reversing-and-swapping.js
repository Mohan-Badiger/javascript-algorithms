/**
 * ==============================================================================
 * 📦 LEVEL 03: REVERSING & SWAPPING (TWO-POINTER FOUNDATIONS)
 * ==============================================================================
 * 
 * 💡 WHY IN-PLACE REVERSAL MATTERS:
 * Beginners often reverse by creating a new array:
 *   const reversed = [];
 *   for (let i = arr.length - 1; i >= 0; i--) reversed.push(arr[i]);
 * While correct, this takes O(N) extra space!
 * 
 * In interview rounds, you are asked:
 * "Reverse it IN-PLACE with O(1) auxiliary space."
 * ==============================================================================
 */

// ------------------------------------------------------------------------------
// 1. HOW SWAPPING WORKS UNDER THE HOOD
// ------------------------------------------------------------------------------
/**
 * Classical Swap using Temporary Variable:
 * Imagine two cups: Cup A has Coffee, Cup B has Tea.
 * To swap their contents, you need a third empty Cup (temp)!
 * 1. temp = A
 * 2. A = B
 * 3. B = temp
 */
function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// ------------------------------------------------------------------------------
// 2. IN-PLACE ARRAY REVERSE (TWO-POINTER APPROACH)
// ------------------------------------------------------------------------------
/**
 * 💡 VISUALIZATION:
 * Array: [10, 20, 30, 40, 50]
 * Pointers:
 *   left = 0 (10), right = 4 (50) -> Swap! -> [50, 20, 30, 40, 10]
 *   left++, right--
 *   left = 1 (20), right = 3 (40) -> Swap! -> [50, 40, 30, 20, 10]
 *   left++, right--
 *   left = 2, right = 2 -> left >= right -> STOP!
 * 
 * ⏱️ Time: O(N) | 💾 Space: O(1) [Zero extra memory!]
 */
function reverseArrayInPlace(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    // Swap elements at left and right
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    // Move pointers inward
    left++;
    right--;
  }

  return arr;
}

// ------------------------------------------------------------------------------
// 3. REVERSE A SUBARRAY (Between start and end indices)
// ------------------------------------------------------------------------------
// Extremely useful helper for array rotations and string problems!
function reverseSubArray(arr, start, end) {
  while (start < end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
}

// ------------------------------------------------------------------------------
// 🧪 RUN TESTS
// ------------------------------------------------------------------------------
console.log("=== 1. FULL ARRAY REVERSAL IN-PLACE ===");
const list1 = [1, 2, 3, 4, 5];
console.log("Original:", list1);
reverseArrayInPlace(list1);
console.log("Reversed in-place:", list1);

console.log("\n=== 2. EVEN-LENGTH REVERSAL ===");
const list2 = [10, 20, 30, 40];
reverseArrayInPlace(list2);
console.log("Reversed:", list2);

console.log("\n=== 3. REVERSE SUBARRAY (Index 1 to 3) ===");
const list3 = [100, 200, 300, 400, 500];
reverseSubArray(list3, 1, 3);
console.log("After subarray reverse:", list3, "(Expected: [100, 400, 300, 200, 500])");

