# 🚀 0-Hero DSA: The Complete Fresher's Problem-Solving Launchpad

> **"Don't memorize solutions. Build the muscle to break down problems."**

Welcome! If you feel overwhelmed jumping directly into advanced DSA topics like recursion, sliding window, dynamic programming, or trees, **this folder is built specifically for you**.

---

## 🧭 Why Was This Folder Created?

When analyzing your workspace:
1. In `Logic/ex.js`, you started with foundational conditional logic (`if/else`, divisible checks, leap year).
2. In `DSA-Mastery_JS`, the jump to advanced topics (Sliding Window, Kadane's, Two Pointers, Stacks, Trees) is **steep** and often causes beginners to get stuck or memorize code without truly understanding *how to think*.
3. **The Missing Bridge:** To crack DSA rounds as a fresher, you must first master **algorithmic thinking**, **dry-running with pen & paper**, **nested loop visualization**, and **fundamental array/string manipulation** before tackling complex patterns.

`0-Hero-DSA` provides that exact bridge from zero to confident problem solver!

---

## 🗺️ Step-by-Step Learning Roadmap

Follow this sequence strictly. Do not skip steps!

```
[Level 00: Thinking Framework]
       │
       ▼ (Learn how to dry run & analyze time/space)
[Level 01: Number & Math Basics]
       │
       ▼ (Master % 10, / 10, digit extraction, primes)
[Level 02: Patterns & Nested Loops]
       │
       ▼ (Visualize 2D grids, rows/columns, loop control)
[Level 03: Hands-On Array Basics]
       │
       ▼ (Traversals, min/max, counters, two-pointer swaps)
[Level 04: Hands-On String Basics]
       │
       ▼ (Characters, ASCII, frequency mapping, palindromes)
[Level 05: Fresher Campus & Interview Starters]
       │
       ▼ (FizzBuzz, Missing Number, Move Zeroes, Two Sum)
[Level 06: Independent Practice Bank]
       │
       ▼ (Solve 25 beginner challenges on your own)
[Ready for `DSA-Mastery_JS`!]
```

---

## 📂 Folder Structure & File Index

| Level | Folder / File | What You Will Learn |
| :--- | :--- | :--- |
| **00** | `00-Thinking-Framework/01-how-to-think-and-dry-run.js` | The 4-step framework: Understand, Dry-run, Pseudocode, Code. |
| **00** | `00-Thinking-Framework/02-time-and-space-complexity.js` | $O(1)$, $O(N)$, $O(N^2)$ explained with intuitive analogies & live benchmarks. |
| **01** | `01-Number-and-Math-Basics/01-extracting-digits.js` | Count digits, sum digits, reverse number using `% 10` & `Math.floor(/ 10)`. |
| **01** | `01-Number-and-Math-Basics/02-palindrome-and-armstrong.js` | Palindrome numbers, Armstrong numbers, edge cases. |
| **01** | `01-Number-and-Math-Basics/03-factors-primes-and-gcd.js` | All divisors, prime number verification, Euclidean GCD/HCF algorithm. |
| **02** | `02-Patterns-and-Nested-Loops/01-star-patterns.js` | Right-angle, inverted, pyramid, and diamond patterns explained step-by-step. |
| **02** | `02-Patterns-and-Nested-Loops/02-number-patterns.js` | Floyd's triangle, 0-1 alternating triangle, number matrices. |
| **03** | `03-Array-Basics-HandsOn/01-traversal-and-accumulators.js` | Sum, average, manual Min & Max tracking without `Math.max`. |
| **03** | `03-Array-Basics-HandsOn/02-search-and-counts.js` | Linear search, occurrence counting, first & last indices. |
| **03** | `03-Array-Basics-HandsOn/03-reversing-and-swapping.js` | Reverse array in-place with two pointers, element swapping logic. |
| **03** | `03-Array-Basics-HandsOn/04-frequency-and-uniques.js` | Hash map / frequency object counter, finding single unique element. |
| **04** | `04-String-Basics-HandsOn/01-string-traversal-and-vowels.js` | Counting vowels/consonants, manual string reversal without `.reverse()`. |
| **04** | `04-String-Basics-HandsOn/02-palindrome-and-anagram.js` | Two-pointer palindrome check, anagram detection via frequency map. |
| **05** | `05-Fresher-Interview-Problems/01-fizz-buzz.js` | Clean logic flow, modulo rules, interviewer expectations. |
| **05** | `05-Fresher-Interview-Problems/02-missing-number-1-to-n.js` | Arithmetic formula $N(N+1)/2$ vs XOR approach. |
| **05** | `05-Fresher-Interview-Problems/03-move-zeroes-to-end.js` | In-place two-pointer array manipulation without extra memory. |
| **05** | `05-Fresher-Interview-Problems/04-two-sum-beginner-to-optimal.js` | Brute Force $O(N^2)$ to Hash Table $O(N)$ evolutionary thinking. |
| **05** | `05-Fresher-Interview-Problems/05-remove-duplicates-sorted.js` | In-place array deduplication, tracking unique boundary pointer. |
| **06** | `06-Daily-Practice-Challenges/beginner-problem-bank.md` | 25 curated beginner problems with hints to solve on your own. |

---

## 🧠 The 4-Step Problem-Solving Technique (Follow for EVERY Problem)

When you see a problem, **never start typing code immediately**. Follow this golden routine:

1. **Understand (Input, Output, Constraints, Edge Cases)**
   - What are the inputs? (e.g., negative numbers allowed? empty arrays? 0?)
   - What is the expected output? (number, boolean, array?)
2. **Dry Run on Paper (Mental Simulation)**
   - Take a small sample input (e.g., `[4, 2, 7, 1]`).
   - Draw a table tracking your variables: `i`, `current`, `maxSoFar`.
   - Walk through iteration by iteration manually.
3. **Write Pseudocode / Plain English Steps**
   - Write comments describing each line before writing JS syntax.
4. **Code, Test, & Optimize**
   - Run the code using `node <filename>.js`.
   - Test normal cases AND edge cases (empty input, single element, negative values).

---

## 🏃 How to Run Any File

All files in this folder are completely standalone and runnable with Node.js:

```bash
# Example: Run digit extraction
node 0-Hero-DSA/01-Number-and-Math-Basics/01-extracting-digits.js

# Example: Run pattern printing
node 0-Hero-DSA/02-Patterns-and-Nested-Loops/01-star-patterns.js
```
