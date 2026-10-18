// Given an integer n, compute the sum of all natural numbers from 1 to n (inclusive). If n is 0, the sum should be 0.

// function sofn(n) {

//     var sum = 0;

//     for (let i = 1; i <= n; i++) {
//         sum = sum + i
//     }
//     return sum
// }

// console.log(sofn(5));



//--------------------------------------------using Recursion 

function findSum(n) {

    // base condition
    if (n == 1) return 1;
    return n + findSum(n - 1);
}

//Driver code 
console.log(findSum(6));