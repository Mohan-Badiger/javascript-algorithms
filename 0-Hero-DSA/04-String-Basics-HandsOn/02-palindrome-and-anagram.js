/**
 * ==============================================================================
 * 🔤 LEVEL 04: STRING PALINDROMES & ANAGRAMS
 * ==============================================================================
 */

// ------------------------------------------------------------------------------
// 1. IS PALINDROME STRING (TWO POINTERS)
// ------------------------------------------------------------------------------
/**
 * 💡 INTUITION:
 * Compare the character at `left` with the character at `right`.
 * If they ever differ -> NOT a palindrome!
 * Move `left++` and `right--` until they meet in the middle.
 * ⏱️ Time: O(N) | 💾 Space: O(1)
 */
function isPalindromeString(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false; // Mismatch found
    }
    left++;
    right--;
  }

  return true;
}

// ------------------------------------------------------------------------------
// 2. IS VALID ANAGRAM
// ------------------------------------------------------------------------------
/**
 * What is an Anagram?
 * Two strings are anagrams if they contain the EXACT SAME characters
 * with the EXACT SAME frequencies, but in any order.
 * Example:
 *   "listen" and "silent" -> ✅ True
 *   "rat" and "car"       -> ❌ False
 * 
 * 💡 FREQUENCY HASH MAP ALGORITHM:
 * 1. If lengths differ -> immediately return false.
 * 2. Count characters of string 1 in a map: { l:1, i:1, s:1, t:1, e:1, n:1 }
 * 3. Loop through string 2: Decrement counts.
 *    If a char is not found or count reaches 0, return false!
 * ⏱️ Time: O(N) | 💾 Space: O(1) [Max 26 lowercase letters]
 */
function isAnagram(s1, s2) {
  if (s1.length !== s2.length) return false;

  const charCounts = {};

  // Count chars in s1
  for (let i = 0; i < s1.length; i++) {
    const ch = s1[i];
    charCounts[ch] = (charCounts[ch] || 0) + 1;
  }

  // Decrement chars using s2
  for (let i = 0; i < s2.length; i++) {
    const ch = s2[i];

    if (!charCounts[ch]) {
      return false; // Character missing or overcounted
    }

    charCounts[ch]--;
  }

  return true;
}

// ------------------------------------------------------------------------------
// 🧪 RUN TESTS
// ------------------------------------------------------------------------------
console.log("=== 1. PALINDROME STRING TESTS ===");
console.log("isPalindrome('racecar'):", isPalindromeString("racecar"), "(Expected: true)");
console.log("isPalindrome('madam'):", isPalindromeString("madam"), "(Expected: true)");
console.log("isPalindrome('hello'):", isPalindromeString("hello"), "(Expected: false)");

console.log("\n=== 2. ANAGRAM TESTS ===");
console.log("isAnagram('listen', 'silent'):", isAnagram("listen", "silent"), "(Expected: true)");
console.log("isAnagram('triangle', 'integral'):", isAnagram("triangle", "integral"), "(Expected: true)");
console.log("isAnagram('rat', 'car'):", isAnagram("rat", "car"), "(Expected: false)");
console.log("isAnagram('aa', 'a'):", isAnagram("aa", "a"), "(Expected: false)");

