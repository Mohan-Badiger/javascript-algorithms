/**
 * ==============================================================================
 * 🔤 LEVEL 04: STRING TRAVERSAL & IMMUTABILITY
 * ==============================================================================
 * 
 * ⚠️ CRITICAL JS KNOWLEDGE:
 * Strings in JavaScript are IMMUTABLE!
 * You CANNOT do:
 *   let s = "hello";
 *   s[0] = "H"; // ❌ Does nothing! s is still "hello".
 * 
 * To modify strings, you must build a new string or convert to an array of characters.
 * ==============================================================================
 */

// ------------------------------------------------------------------------------
// 1. COUNT VOWELS, CONSONANTS & DIGITS
// ------------------------------------------------------------------------------
function analyzeString(str) {
  let vowels = 0;
  let consonants = 0;
  let digits = 0;
  let others = 0;

  const lower = str.toLowerCase();
  const vowelSet = "aeiou";

  for (let i = 0; i < lower.length; i++) {
    const ch = lower[i];

    if (vowelSet.includes(ch)) {
      vowels++;
    } else if (ch >= "a" && ch <= "z") {
      consonants++;
    } else if (ch >= "0" && ch <= "9") {
      digits++;
    } else {
      others++;
    }
  }

  return { vowels, consonants, digits, others };
}

// ------------------------------------------------------------------------------
// 2. REVERSE A STRING MANUALLY (WITHOUT .reverse())
// ------------------------------------------------------------------------------
/**
 * 💡 INTERVIEWER TRAP:
 * If an interviewer asks: "Reverse a string",
 * and you answer: `str.split('').reverse().join('')`,
 * they will smile and say: "Now do it with a loop without using built-in methods!"
 * 
 * Approach: Iterate backwards and build a new string!
 */
function reverseStringManually(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

// ------------------------------------------------------------------------------
// 3. TOGGLE CASE (Convert lower to upper & upper to lower)
// ------------------------------------------------------------------------------
// Example: "Hello World!" -> "hELLO wORLD!"
function toggleCase(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (ch >= "a" && ch <= "z") {
      result += ch.toUpperCase();
    } else if (ch >= "A" && ch <= "Z") {
      result += ch.toLowerCase();
    } else {
      result += ch;
    }
  }

  return result;
}

// ------------------------------------------------------------------------------
// 🧪 RUN TESTS
// ------------------------------------------------------------------------------
console.log("=== 1. ANALYZE STRING ===");
console.log(analyzeString("Hello World 2026!"));

console.log("\n=== 2. MANUAL REVERSE ===");
console.log("reverseString('JavaScript'):", reverseStringManually("JavaScript"), "(Expected: tpircSavaJ)");

console.log("\n=== 3. TOGGLE CASE ===");
console.log("toggleCase('Hello DSA World'):", toggleCase("Hello DSA World"));

