/**
 * ==============================================================================
 * 📦 LEVEL 03: FREQUENCY MAPS & FINDING UNIQUES
 * ==============================================================================
 * 
 * 💡 WHAT IS A FREQUENCY MAP?
 * In JavaScript, a plain object `{}` or `Map` acts as a key-value store.
 * Keys = the array elements
 * Values = how many times each element appears!
 * 
 * ⏱️ Why is this powerful?
 * Looking up or updating a key in an object is O(1) constant time!
 * ==============================================================================
 */

// ------------------------------------------------------------------------------
// 1. BUILD A FREQUENCY MAP
// ------------------------------------------------------------------------------
function getFrequencyMap(arr) {
  const freq = {};

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];

    // If key exists, increment; otherwise initialize to 1
    if (freq[item]) {
      freq[item] += 1;
    } else {
      freq[item] = 1;
    }
  }

  return freq;
}

// ------------------------------------------------------------------------------
// 2. FIND THE MOST FREQUENT ELEMENT (MODE)
// ------------------------------------------------------------------------------
function findMostFrequent(arr) {
  if (arr.length === 0) return null;

  const freq = getFrequencyMap(arr);
  let maxCount = 0;
  let mostFrequentItem = null;

  for (const key in freq) {
    if (freq[key] > maxCount) {
      maxCount = freq[key];
      mostFrequentItem = key;
    }
  }

  return { item: Number(mostFrequentItem), count: maxCount };
}

// ------------------------------------------------------------------------------
// 3. FIND SINGLE NUMBER (All others appear twice)
// ------------------------------------------------------------------------------
/**
 * Example: [4, 1, 2, 1, 2] -> 4 appears once!
 * Approach A: Using Frequency Map (O(N) Time, O(N) Space)
 */
function findSingleNumber(arr) {
  const freq = getFrequencyMap(arr);

  for (const key in freq) {
    if (freq[key] === 1) {
      return Number(key);
    }
  }

  return null;
}

// ------------------------------------------------------------------------------
// 🧪 RUN TESTS
// ------------------------------------------------------------------------------
const testNumbers = [4, 5, 4, 2, 5, 4, 3, 5, 5];

console.log("=== 1. FREQUENCY MAP ===");
console.log("Frequency Table:", getFrequencyMap(testNumbers));

console.log("\n=== 2. MOST FREQUENT ELEMENT ===");
console.log("Most frequent:", findMostFrequent(testNumbers));

console.log("\n=== 3. SINGLE NUMBER ===");
console.log("Single in [2, 2, 1]:", findSingleNumber([2, 2, 1]), "(Expected: 1)");
console.log("Single in [4, 1, 2, 1, 2]:", findSingleNumber([4, 1, 2, 1, 2]), "(Expected: 4)");

