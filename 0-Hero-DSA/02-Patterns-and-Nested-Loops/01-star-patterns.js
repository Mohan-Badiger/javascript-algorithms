/**
 * ==============================================================================
 * ✨ LEVEL 02: PATTERNS & NESTED LOOPS MASTERY
 * ==============================================================================
 * 
 * 💡 WHY DO PATTERNS MATTER?
 * Beginners often struggle with: "What does the inner loop do vs the outer loop?"
 * Pattern problems force you to master 2D coordinate thinking:
 * - Outer Loop (i): Controls ROWS (Top to Bottom)
 * - Inner Loop (j): Controls COLUMNS (Left to Right)
 * 
 * 📐 THE UNIVERSAL PATTERN FORMULA:
 * 1. Count the number of rows -> Outer loop runs from 1 to N.
 * 2. For each row `i`, observe what changes:
 *    - How many spaces?
 *    - How many stars/numbers?
 * 3. Print the row and append a newline!
 * ==============================================================================
 */

// ------------------------------------------------------------------------------
// PATTERN 1: SOLID SQUARE (N x N)
// ------------------------------------------------------------------------------
/**
 * Goal for N = 4:
 * ****
 * ****
 * ****
 * ****
 */
function patternSquare(n) {
  console.log(`--- Square Pattern (N = ${n}) ---`);
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      row += "*";
    }
    console.log(row);
  }
}

// ------------------------------------------------------------------------------
// PATTERN 2: RIGHT-ANGLED TRIANGLE
// ------------------------------------------------------------------------------
/**
 * Goal for N = 5:
 * *
 * **
 * ***
 * ****
 * *****
 * 
 * 💡 OBSERVATION:
 * Row 1 -> 1 star
 * Row 2 -> 2 stars
 * Row i -> i stars!
 * Therefore, inner loop runs from 1 to i!
 */
function patternRightTriangle(n) {
  console.log(`\n--- Right Triangle (N = ${n}) ---`);
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }
}

// ------------------------------------------------------------------------------
// PATTERN 3: INVERTED RIGHT-ANGLED TRIANGLE
// ------------------------------------------------------------------------------
/**
 * Goal for N = 5:
 * *****
 * ****
 * ***
 * **
 * *
 * 
 * 💡 OBSERVATION:
 * Row 1 -> 5 stars (N - 1 + 1)
 * Row 2 -> 4 stars
 * Row i -> (N - i + 1) stars!
 */
function patternInvertedTriangle(n) {
  console.log(`\n--- Inverted Triangle (N = ${n}) ---`);
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i + 1; j++) {
      row += "*";
    }
    console.log(row);
  }
}

// ------------------------------------------------------------------------------
// PATTERN 4: PYRAMID PATTERN (Spaces + Stars)
// ------------------------------------------------------------------------------
/**
 * Goal for N = 4:
 *    *       (3 spaces, 1 star)
 *   ***      (2 spaces, 3 stars)
 *  *****     (1 space,  5 stars)
 * *******    (0 spaces, 7 stars)
 * 
 * 💡 OBSERVATION for Row i:
 * - Spaces: N - i
 * - Stars : (2 * i) - 1
 */
function patternPyramid(n) {
  console.log(`\n--- Pyramid Pattern (N = ${n}) ---`);
  for (let i = 1; i <= n; i++) {
    let row = "";

    // 1. Print spaces
    for (let s = 1; s <= n - i; s++) {
      row += " ";
    }

    // 2. Print stars
    for (let star = 1; star <= (2 * i) - 1; star++) {
      row += "*";
    }

    console.log(row);
  }
}

// ------------------------------------------------------------------------------
// 🧪 RUN PATTERNS
// ------------------------------------------------------------------------------
patternSquare(4);
patternRightTriangle(5);
patternInvertedTriangle(5);
patternPyramid(4);

