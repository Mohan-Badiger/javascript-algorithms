//print a number positive or negative or zero.

// function num(number) {
//     if (number === 0) {
//         return "Number is Zero"
//     }
//     if (number > 0) {
//         return ("Number is Positive")
//     } else {
//         return "Number is Negative";
//     }
// }

// console.log(num(0));

// --------------------------------------------
//check number is even or odd

// function evenorodd(n) {
//     if (n % 2 === 0) {
//         return "even"
//     } else {
//         return "odd"
//     }
// }

// console.log(evenorodd(4));

// ---------------------------------------------
//check if a number is devisible by 5

// function devisible(n) {
//     return n % 5 === 0 ? "yes" : "not"
// }

// console.log(devisible(25));

// ---------------------------------------------
//check if a number is devisible by both 3 and 5

// function devisible(n) {
//     return n % 5 === 0 && n % 3 === 0 ? "yes" : "not"
// }

// console.log(devisible(30));


// ----------------------------------------------
// check if a given year is leaf year

// function leafYear(year) {

//     // return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
//     return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

// }

// console.log(leafYear(2005));


// --------------------------------------------------------------------
//Take two numbers and print larger one

// function larger(num1, num2) {

//     if (num1 > num2) return num1
//     else return num2

// }

// console.log(larger(5, 6));


// ------------------------------------------------------------
//Take three numbers and print larger one

// function largestOfThree(num1, num2, num3) {
//     if (num1 >= num2 && num1 >= num3) {
//         return num1
//     } else if (num2 >= num1 && num2 >= num3) {
//         return num2
//     }
//     else {
//         return num3
//     }
// }

// console.log(largestOfThree(5, 7, 5));


//temperature values for cold warm and hot


//linear search

// function linearSearch(num, target){

//     for(let i=0; i<num.length; i++){
//         if(target === num[i]){
//             return i
//         }
//     }
//     return -1
// }


// console.log(linearSearch([5,2,6,4,8,2,7,6,7], 4));


//take a characten and check weather it is a vowel or character

function vorc(char){

    let newchar = char.toUpperCase()

    let vowel = "AEIOU"

    if(vowel.includes(newchar)){
        return "vowel"
    }
    if(newchar >= "A" && newchar <= "Z"){
        return "Constant"
    }

    return "Invali Input"
}

console.log(vorc("4"));