/**
 * ==============================================================================
 * ✨ LEVEL 02: NUMBER PATTERNS & LOGIC GATES
 * ==============================================================================
 * 
 * 💡 NUMBER PATTERNS TRAIN:
 * - Counter variables across iterations (Floyd's triangle)
 * - Parity / Alternating conditions (0-1 triangle)
 * - Coordinating row index `i` with column index `j`
 * ==============================================================================
 */

// ------------------------------------------------------------------------------
// PATTERN 1: COUNTING NUMBER TRIANGLE
// ------------------------------------------------------------------------------
/**
 * Goal for N = 5:
 * 1
 * 1 2
 * 1 2 3
 * 1 2 3 4
 * 1 2 3 4 5
 */
function patternNumberTriangle(n) {
  console.log(`--- Number Triangle (N = ${n}) ---`);
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j + " ";
    }
    console.log(row.trim());
  }
}

// ------------------------------------------------------------------------------
// PATTERN 2: REPEATING ROW NUMBER TRIANGLE
// ------------------------------------------------------------------------------
/**
 * Goal for N = 4:
 * 1
 * 2 2
 * 3 3 3
 * 4 4 4 4
 */
function patternRowNumberTriangle(n) {
  console.log(`\n--- Repeating Row Number (N = ${n}) ---`);
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += i + " ";
    }
    console.log(row.trim());
  }
}

// ------------------------------------------------------------------------------
// PATTERN 3: FLOYD'S TRIANGLE (Continuous counter)
// ------------------------------------------------------------------------------
/**
 * Goal for N = 4:
 * 1
 * 2 3
 * 4 5 6
 * 7 8 9 10
 * 
 * 💡 INSIGHT:
 * Keep an independent running counter `let num = 1` outside the loops!
 */
function patternFloydsTriangle(n) {
  console.log(`\n--- Floyd's Triangle (N = ${n}) ---`);
  let count = 1;
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += count + " ";
      count++;
    }
    console.log(row.trim());
  }
}

// ------------------------------------------------------------------------------
// PATTERN 4: ALTERNATING 0-1 TRIANGLE
// ------------------------------------------------------------------------------
/**
 * Goal for N = 5:
 * 1
 * 0 1
 * 1 0 1
 * 0 1 0 1
 * 1 0 1 0 1
 * 
 * 💡 MATHEMATICAL SECRET:
 * Notice:
 * Row 1, Col 1 -> (1 + 1 = 2, Even) -> 1
 * Row 2, Col 1 -> (2 + 1 = 3, Odd)  -> 0
 * Row 2, Col 2 -> (2 + 2 = 4, Even) -> 1
 * If (row + col) is EVEN, it's 1! If ODD, it's 0!
 */
function patternBinaryTriangle(n) {
  console.log(`\n--- 0-1 Binary Triangle (N = ${n}) ---`);
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      if ((i + j) % 2 === 0) {
        row += "1 ";
      } else {
        row += "0 ";
      }
    }
    console.log(row.trim());
  }
}

// ------------------------------------------------------------------------------
// 🧪 RUN PATTERNS
// ------------------------------------------------------------------------------
patternNumberTriangle(5);
patternRowNumberTriangle(4);
patternFloydsTriangle(4);
patternBinaryTriangle(5);

