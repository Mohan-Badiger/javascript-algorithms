/**
 * ==============================================================================
 * 📦 LEVEL 03: ARRAY TRAVERSAL & ACCUMULATORS (FROM SCRATCH)
 * ==============================================================================
 * 
 * 💡 INTERVIEWER RULE:
 * In campus and junior interviews, you are often forbidden from using
 * Math.max(...arr) or arr.reduce(). You must show you understand the loop.
 * ==============================================================================
 */

// ------------------------------------------------------------------------------
// 1. SUM AND AVERAGE
// ------------------------------------------------------------------------------
function calculateSumAndAverage(arr) {
  if (arr.length === 0) return { sum: 0, average: 0 };

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  const average = sum / arr.length;
  return { sum, average };
}

// ------------------------------------------------------------------------------
// 2. FIND MINIMUM AND MAXIMUM (BY HAND)
// ------------------------------------------------------------------------------
/**
 * 💡 COMMON BEGINNER MISTAKE:
 * Initializing `let max = 0`!
 * If the array contains all negative numbers like [-10, -5, -20],
 * `max` would falsely remain 0 (which wasn't even in the array!).
 * 
 * ✅ CORRECT PRACTICE:
 * Always initialize `min` and `max` to the first element `arr[0]`.
 */
function findMinAndMax(arr) {
  if (arr.length === 0) return null;

  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return { min, max };
}

// ------------------------------------------------------------------------------
// 3. FIND SECOND LARGEST ELEMENT (O(N) Single Pass!)
// ------------------------------------------------------------------------------
/**
 * Problem: Find the second largest distinct element without sorting.
 * 
 * 💡 INTUITION:
 * Imagine a race:
 * - When someone overtakes the gold medalist (#1),
 *   the previous #1 becomes the silver medalist (#2)!
 * - If someone isn't faster than #1, but is faster than #2,
 *   they take the #2 spot!
 */
function findSecondLargest(arr) {
  if (arr.length < 2) return null;

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];

    if (current > largest) {
      secondLargest = largest; // Demote old largest to second
      largest = current;       // New largest crowned
    } else if (current > secondLargest && current !== largest) {
      secondLargest = current; // Beats second, but distinct from largest
    }
  }

  return secondLargest === -Infinity ? null : secondLargest;
}

// ------------------------------------------------------------------------------
// 🧪 RUN TESTS
// ------------------------------------------------------------------------------
console.log("=== 1. SUM AND AVERAGE ===");
console.log(calculateSumAndAverage([10, 20, 30, 40]));

console.log("\n=== 2. MIN AND MAX ===");
console.log(findMinAndMax([34, -5, 89, 12, -45, 67]));

console.log("\n=== 3. SECOND LARGEST ===");
console.log("Second largest in [12, 35, 1, 10, 34, 1]:", findSecondLargest([12, 35, 1, 10, 34, 1]), "(Expected: 34)");
console.log("Second largest in [10, 10, 10]:", findSecondLargest([10, 10, 10]), "(Expected: null - no distinct second)");

