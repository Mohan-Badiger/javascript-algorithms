# 🎯 0-Hero Beginner Problem Bank (25 Days of Problem Solving)

> **"Solve 1 problem a day with pen & paper before typing code."**

Track your journey from 0 to Hero. Check off each box as you write and execute your solution!

---

## 🧮 Phase 1: Number & Logic Fundamentals (Days 1 – 5)

- [ ] **Day 1: Sum of Digits**
  - **Task:** Given an integer `n = 459`, return `4 + 5 + 9 = 18`.
  - **Hint:** Use `% 10` to get the last digit, `Math.floor(n / 10)` to shrink.
  - **Concept File:** [`01-extracting-digits.js`](file:///c:/Users/mohan/Documents/Learnings/Programs/Javascript/0-Hero-DSA/01-Number-and-Math-Basics/01-extracting-digits.js)

- [ ] **Day 2: Palindrome Number**
  - **Task:** Return `true` if `12321` reads the same backward.
  - **Hint:** Reverse the number mathematically and compare with original. Remember negative numbers are not palindromes!
  - **Concept File:** [`02-palindrome-and-armstrong.js`](file:///c:/Users/mohan/Documents/Learnings/Programs/Javascript/0-Hero-DSA/01-Number-and-Math-Basics/02-palindrome-and-armstrong.js)

- [ ] **Day 3: Check Prime Number**
  - **Task:** Check if `n = 29` is prime.
  - **Hint:** Loop up to `i * i <= n`. If `n % i === 0`, it's not prime.
  - **Concept File:** [`03-factors-primes-and-gcd.js`](file:///c:/Users/mohan/Documents/Learnings/Programs/Javascript/0-Hero-DSA/01-Number-and-Math-Basics/03-factors-primes-and-gcd.js)

- [ ] **Day 4: Factorial of a Number**
  - **Task:** Given `n = 5`, compute `5 * 4 * 3 * 2 * 1 = 120`.
  - **Hint:** Loop from 1 to `n` multiplying into `let fact = 1`.

- [ ] **Day 5: Greatest Common Divisor (GCD)**
  - **Task:** Find the GCD of `24` and `36` (Answer: `12`).
  - **Hint:** Euclidean remainder rule `while (b !== 0) { ... }`.

---

## 📐 Phase 2: Patterns & Nested Loops (Days 6 – 10)

- [ ] **Day 6: Right Star Triangle**
  - **Task:** Print triangle of height `n = 4`.
  - **Hint:** Outer loop `i` from 1 to `n`, inner loop `j` from 1 to `i`.
  - **Concept File:** [`01-star-patterns.js`](file:///c:/Users/mohan/Documents/Learnings/Programs/Javascript/0-Hero-DSA/02-Patterns-and-Nested-Loops/01-star-patterns.js)

- [ ] **Day 7: Inverted Star Triangle**
  - **Task:** Print inverted triangle of height `n = 4` (`****` down to `*`).
  - **Hint:** Inner loop runs `n - i + 1` times.

- [ ] **Day 8: Centered Pyramid**
  - **Task:** Print pyramid of height `n = 4`.
  - **Hint:** First inner loop prints `n - i` spaces, second prints `2 * i - 1` stars.

- [ ] **Day 9: Floyd's Triangle**
  - **Task:** Print 1 to 10 consecutively in a triangle.
  - **Hint:** Keep a single continuous counter `count++` outside inner loop.
  - **Concept File:** [`02-number-patterns.js`](file:///c:/Users/mohan/Documents/Learnings/Programs/Javascript/0-Hero-DSA/02-Patterns-and-Nested-Loops/02-number-patterns.js)

- [ ] **Day 10: Alternating 0-1 Triangle**
  - **Task:** Print alternating binary matrix triangle.
  - **Hint:** If `(row + col) % 2 === 0` print `1`, else print `0`.

---

## 📦 Phase 3: Array Traversal & Manipulation (Days 11 – 15)

- [ ] **Day 11: Find Min & Max by Hand**
  - **Task:** Return smallest and largest in `[14, 5, 29, -3, 8]` without `Math.min/max`.
  - **Hint:** Initialize both to `arr[0]`.
  - **Concept File:** [`01-traversal-and-accumulators.js`](file:///c:/Users/mohan/Documents/Learnings/Programs/Javascript/0-Hero-DSA/03-Array-Basics-HandsOn/01-traversal-and-accumulators.js)

- [ ] **Day 12: Second Largest Element**
  - **Task:** Return 2nd largest distinct value in `[10, 5, 10, 8]` (Answer: `8`).
  - **Hint:** Gold medalist / Silver medalist promotion logic.

- [ ] **Day 13: Linear Search & Count**
  - **Task:** Count how many times `x` appears in array.
  - **Concept File:** [`02-search-and-counts.js`](file:///c:/Users/mohan/Documents/Learnings/Programs/Javascript/0-Hero-DSA/03-Array-Basics-HandsOn/02-search-and-counts.js)

- [ ] **Day 14: Reverse Array In-Place**
  - **Task:** Reverse `[1, 2, 3, 4]` in place using $O(1)$ space.
  - **Hint:** Two pointers: `left = 0`, `right = arr.length - 1`.
  - **Concept File:** [`03-reversing-and-swapping.js`](file:///c:/Users/mohan/Documents/Learnings/Programs/Javascript/0-Hero-DSA/03-Array-Basics-HandsOn/03-reversing-and-swapping.js)

- [ ] **Day 15: Frequency Counter**
  - **Task:** Find the element that occurs most frequently in `[2, 3, 2, 5, 2]`.
  - **Hint:** Use a JavaScript object `{}` to track counts.
  - **Concept File:** [`04-frequency-and-uniques.js`](file:///c:/Users/mohan/Documents/Learnings/Programs/Javascript/0-Hero-DSA/03-Array-Basics-HandsOn/04-frequency-and-uniques.js)

---

## 🔤 Phase 4: Strings & Frequency Maps (Days 16 – 20)

- [ ] **Day 16: Count Vowels and Consonants**
  - **Task:** Count vowels vs consonants in `"Web Developer 2026"`.
  - **Concept File:** [`01-string-traversal-and-vowels.js`](file:///c:/Users/mohan/Documents/Learnings/Programs/Javascript/0-Hero-DSA/04-String-Basics-HandsOn/01-string-traversal-and-vowels.js)

- [ ] **Day 17: Manual String Reverse**
  - **Task:** Reverse `"coder"` to `"redoc"` without `.reverse()`.
  - **Hint:** Decrementing for-loop building a new string.

- [ ] **Day 18: String Palindrome**
  - **Task:** Check if `"racecar"` is palindrome using two pointers.
  - **Concept File:** [`02-palindrome-and-anagram.js`](file:///c:/Users/mohan/Documents/Learnings/Programs/Javascript/0-Hero-DSA/04-String-Basics-HandsOn/02-palindrome-and-anagram.js)

- [ ] **Day 19: Valid Anagram**
  - **Task:** Return true if `"listen"` and `"silent"` are anagrams.
  - **Hint:** Compare character frequencies using an object.

- [ ] **Day 20: First Non-Repeating Character**
  - **Task:** In `"swiss"`, find first unique character (`'w'`).
  - **Hint:** Build frequency map first, then loop through original string to find first with count 1.

---

## 💼 Phase 5: Campus Placement Classics (Days 21 – 25)

- [ ] **Day 21: FizzBuzz**
  - **Task:** Solve multiples of 3 ("Fizz"), 5 ("Buzz"), and both ("FizzBuzz").
  - **Concept File:** [`01-fizz-buzz.js`](file:///c:/Users/mohan/Documents/Learnings/Programs/Javascript/0-Hero-DSA/05-Fresher-Interview-Problems/01-fizz-buzz.js)

- [ ] **Day 22: Missing Number (1 to N)**
  - **Task:** Find missing number from `[0, 1, 3]`.
  - **Hint:** Expected sum `N*(N+1)/2` minus actual sum.
  - **Concept File:** [`02-missing-number-1-to-n.js`](file:///c:/Users/mohan/Documents/Learnings/Programs/Javascript/0-Hero-DSA/05-Fresher-Interview-Problems/02-missing-number-1-to-n.js)

- [ ] **Day 23: Move Zeroes to End**
  - **Task:** Move all 0s in `[0, 1, 0, 3, 12]` to end in-place.
  - **Concept File:** [`03-move-zeroes-to-end.js`](file:///c:/Users/mohan/Documents/Learnings/Programs/Javascript/0-Hero-DSA/05-Fresher-Interview-Problems/03-move-zeroes-to-end.js)

- [ ] **Day 24: Two Sum**
  - **Task:** Return indices of 2 numbers summing to target.
  - **Concept File:** [`04-two-sum-beginner-to-optimal.js`](file:///c:/Users/mohan/Documents/Learnings/Programs/Javascript/0-Hero-DSA/05-Fresher-Interview-Problems/04-two-sum-beginner-to-optimal.js)

- [ ] **Day 25: Remove Duplicates from Sorted Array**
  - **Task:** Deduplicate sorted array in-place, return unique count.
  - **Concept File:** [`05-remove-duplicates-sorted.js`](file:///c:/Users/mohan/Documents/Learnings/Programs/Javascript/0-Hero-DSA/05-Fresher-Interview-Problems/05-remove-duplicates-sorted.js)

---

## 🎓 Next Step After Completing This Bank:
When you have finished these 25 problems, your problem-solving muscle and loop confidence will be rock-solid! You are now fully ready to jump into **`DSA-Mastery_JS`** to tackle Sliding Window, Two-Pointer patterns, Stacks, Trees, and Dynamic Programming!

