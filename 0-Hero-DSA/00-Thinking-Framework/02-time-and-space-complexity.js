/**
 * ==============================================================================
 * ⏱️ LEVEL 00: TIME & SPACE COMPLEXITY DEMYSTIFIED (BIG-O FOR FRESHERS)
 * ==============================================================================
 * 
 * ❓ WHAT IS BIG-O?
 * Big-O notation describes: "How does my code slow down or consume memory
 * as the input size (N) grows from 10 to 1,000,000?"
 * 
 * 🏢 REAL WORLD ANALOGY:
 * - O(1) [Constant Time]: Flipping on a light switch.
 *     Whether the room has 1 person or 100 people, flipping takes 1 second.
 * - O(N) [Linear Time]: Handing out exam papers to N students one by one.
 *     If 10 students -> 10 seconds. If 1,000 students -> 1,000 seconds.
 * - O(N^2) [Quadratic Time]: Every student shakes hands with every other student.
 *     If 10 students -> 100 handshakes. If 1,000 students -> 1,000,000 handshakes! (Very slow)
 * - O(log N) [Logarithmic Time]: Looking up a word in a dictionary by splitting it in half each time.
 *     Even for 1,000,000 pages, it takes only ~20 splits!
 * ==============================================================================
 */

// ------------------------------------------------------------------------------
// 1. O(1) - CONSTANT TIME
// ------------------------------------------------------------------------------
// Regardless of how huge the array is, accessing an index takes 1 direct operation.
function getFirstElement(arr) {
  return arr[0]; // ⏱️ Time: O(1) | 💾 Space: O(1)
}

// ------------------------------------------------------------------------------
// 2. O(N) - LINEAR TIME
// ------------------------------------------------------------------------------
// If array has N items, the loop executes N times.
function findMaxNumber(arr) {
  let max = arr[0]; // 1 memory slot -> O(1) space
  for (let i = 1; i < arr.length; i++) { // Runs N times -> O(N) time
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// ------------------------------------------------------------------------------
// 3. O(N^2) - QUADRATIC TIME (Nested Loops)
// ------------------------------------------------------------------------------
// For every element, we loop through all other elements!
function printAllPairs(arr) {
  let pairCount = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      pairCount++;
    }
  }
  return pairCount; // N * N operations
}

// ------------------------------------------------------------------------------
// 4. SPACE COMPLEXITY (Auxiliary / Extra Memory)
// ------------------------------------------------------------------------------
// - O(1) Space: Only uses a few fixed variables (e.g., let sum = 0, let i = 0).
// - O(N) Space: Creates a new array or hash map that scales with the input size N.
function duplicateArray(arr) {
  const copy = []; // Creates a new array of size N -> 💾 Space: O(N)
  for (let i = 0; i < arr.length; i++) {
    copy.push(arr[i]);
  }
  return copy;
}

// ------------------------------------------------------------------------------
// 🔬 LIVE BENCHMARK: FEEL THE DIFFERENCE!
// ------------------------------------------------------------------------------
console.log("=== COMPARING O(N) VS O(N^2) FOR N = 5,000 ELEMENTS ===");

const testSize = 5000;
const sampleData = Array.from({ length: testSize }, (_, idx) => idx);

// Measure O(N)
const startLinear = performance.now();
findMaxNumber(sampleData);
const endLinear = performance.now();
console.log(`⏱️ O(N) linear scan took: ${(endLinear - startLinear).toFixed(4)} ms`);

// Measure O(N^2)
const startQuadratic = performance.now();
printAllPairs(sampleData);
const endQuadratic = performance.now();
console.log(`⏱️ O(N^2) nested loop took: ${(endQuadratic - startQuadratic).toFixed(4)} ms`);

console.log("\n💡 KEY TAKEAWAY:");
console.log("In interviews, always start with a working solution (even O(N^2)),");
console.log("and then ask yourself: 'Can I do this in a single loop O(N)?'");

