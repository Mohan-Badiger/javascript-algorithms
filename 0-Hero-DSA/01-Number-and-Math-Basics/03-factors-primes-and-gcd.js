/**
 * ==============================================================================
 * 🔢 LEVEL 01: FACTORS, PRIMES & EUCLIDEAN GCD
 * ==============================================================================
 * 
 * 💡 WHY THIS MATTERS:
 * In technical assessments for freshers (TCS, Infosys, Cognizant, Wipro, Startups),
 * Prime Numbers, Divisors, and GCD appear constantly in the aptitude/coding rounds.
 * ==============================================================================
 */

// ------------------------------------------------------------------------------
// 1. PRIME NUMBER CHECK (Optimized O(sqrt(N)))
// ------------------------------------------------------------------------------
/**
 * What is a prime number?
 * A number greater than 1 with ONLY two factors: 1 and itself (e.g., 2, 3, 5, 7, 11).
 * 
 * 💡 OPTIMIZATION INSIGHT:
 * Factors come in pairs!
 * For 36:
 *   1 * 36
 *   2 * 18
 *   3 * 12
 *   4 * 9
 *   6 * 6  <--- Sqrt(36)
 * Notice after 6, the factors repeat (9*4, 12*3, etc.).
 * Therefore, we only need to test up to sqrt(N)!
 * ⏱️ Time: O(sqrt(N)) instead of O(N).
 */
function isPrime(n) {
  if (n <= 1) return false;
  if (n === 2) return true; // 2 is the ONLY even prime
  if (n % 2 === 0) return false; // Other evens are not prime

  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) {
      return false; // Found a divisor!
    }
  }

  return true;
}

// ------------------------------------------------------------------------------
// 2. FIND ALL DIVISORS / FACTORS
// ------------------------------------------------------------------------------
function printAllDivisors(n) {
  const divisors = [];

  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      divisors.push(i);
      // If the paired factor is different, include it too
      if (i !== Math.floor(n / i)) {
        divisors.push(Math.floor(n / i));
      }
    }
  }

  // Sort for clean display
  return divisors.sort((a, b) => a - b);
}

// ------------------------------------------------------------------------------
// 3. GCD / HCF (GREATEST COMMON DIVISOR) - EUCLIDEAN ALGORITHM
// ------------------------------------------------------------------------------
/**
 * 💡 THE EUCLIDEAN INSIGHT:
 * GCD(a, b) = GCD(b, a % b) until b becomes 0.
 * The answer is `a`.
 * 
 * Dry Run for GCD(48, 18):
 * 1. a = 48, b = 18 -> 48 % 18 = 12 -> new a = 18, b = 12
 * 2. a = 18, b = 12 -> 18 % 12 = 6  -> new a = 12, b = 6
 * 3. a = 12, b = 6  -> 12 % 6 = 0   -> new a = 6, b = 0
 * b is 0 -> Result is 6!
 * ⏱️ Time: O(log(min(a, b))) - Extremely fast!
 */
function findGCD(a, b) {
  while (b !== 0) {
    const remainder = a % b;
    a = b;
    b = remainder;
  }
  return a;
}

// ------------------------------------------------------------------------------
// 4. LCM (LEAST COMMON MULTIPLE)
// ------------------------------------------------------------------------------
// Formula: LCM(a, b) = (a * b) / GCD(a, b)
function findLCM(a, b) {
  if (a === 0 || b === 0) return 0;
  return (a * b) / findGCD(a, b);
}

// ------------------------------------------------------------------------------
// 🧪 RUNNABLE TESTS
// ------------------------------------------------------------------------------
console.log("=== 1. PRIME CHECK TESTS ===");
console.log("isPrime(2):", isPrime(2), "(Expected: true)");
console.log("isPrime(13):", isPrime(13), "(Expected: true)");
console.log("isPrime(15):", isPrime(15), "(Expected: false - divisible by 3, 5)");
console.log("isPrime(1):", isPrime(1), "(Expected: false)");

console.log("\n=== 2. ALL DIVISORS ===");
console.log("Divisors of 36:", printAllDivisors(36));

console.log("\n=== 3. GCD & LCM ===");
console.log("findGCD(48, 18):", findGCD(48, 18), "(Expected: 6)");
console.log("findGCD(20, 28):", findGCD(20, 28), "(Expected: 4)");
console.log("findLCM(4, 6):", findLCM(4, 6), "(Expected: 12)");

