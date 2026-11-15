/**
 * ==============================================================================
 * 📦 LEVEL 03: LINEAR SEARCH, COUNTS & SORTED CHECK
 * ==============================================================================
 */

// ------------------------------------------------------------------------------
// 1. LINEAR SEARCH (Manual arr.indexOf)
// ------------------------------------------------------------------------------
/**
 * Scan every element from left to right.
 * If target matches, return the index immediately.
 * If loop finishes without finding it, return -1.
 * ⏱️ Time: O(N) | 💾 Space: O(1)
 */
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Target found at index i
    }
  }
  return -1; // Target not in array
}

// ------------------------------------------------------------------------------
// 2. COUNT OCCURRENCES
// ------------------------------------------------------------------------------
function countOccurrences(arr, target) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      count++;
    }
  }
  return count;
}

// ------------------------------------------------------------------------------
// 3. CHECK IF ARRAY IS SORTED (Ascending)
// ------------------------------------------------------------------------------
/**
 * 💡 INTUITION:
 * An array is sorted if EVERY element is less than or equal to the next one:
 * arr[i] <= arr[i + 1]
 * 
 * If we find even ONE pair where arr[i] > arr[i + 1], it is NOT sorted!
 */
function isArraySorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false; // Found inversion!
    }
  }
  return true;
}

// ------------------------------------------------------------------------------
// 🧪 RUN TESTS
// ------------------------------------------------------------------------------
const testArr = [14, 25, 8, 25, 90, 25, 4];

console.log("=== 1. LINEAR SEARCH ===");
console.log("Search for 90:", linearSearch(testArr, 90), "(Expected: 4)");
console.log("Search for 999:", linearSearch(testArr, 999), "(Expected: -1)");

console.log("\n=== 2. COUNT OCCURRENCES ===");
console.log("Count of 25:", countOccurrences(testArr, 25), "(Expected: 3)");

console.log("\n=== 3. IS SORTED CHECK ===");
console.log("isSorted([1, 2, 3, 4, 5]):", isArraySorted([1, 2, 3, 4, 5]), "(Expected: true)");
console.log("isSorted([1, 3, 2, 4, 5]):", isArraySorted([1, 3, 2, 4, 5]), "(Expected: false)");

