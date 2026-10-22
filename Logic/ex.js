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


//take a characten and check weather it is a vowel or character ------------------------------

// function vorc(char){

//     let newchar = char.toUpperCase()

//     let vowel = "AEIOU"

//     if(vowel.includes(newchar)){
//         return "vowel"
//     }
//     if(newchar >= "A" && newchar <= "Z"){
//         return "Constant"
//     }

//     return "Invali Input"
// }

// console.log(vorc("4"));

// Take a character and check whether it’s uppercase, lowercase, a digit, or a special character.-----------------------

// function validation(char) {

//     if (char >= "A" && char <= "Z") {
//         return "It is a uppercase"
//     }
//     else if (char >= "a" && char <= "z") {
//         return "It is a lowercase"
//     }
//     else if (char > 0 && char < 9) {
//         return "It is a digit"
//     } else {
//         return "It is a special character"
//     }
// }

// console.log(validation("-"));


// Take marks (0–100) and print the corresponding grade (A/B/C/D/F).-------------------------------------------

// function grade(marks) {
//     // Optional: Check if the input is a valid number within a normal range
//     if (typeof marks !== 'number' || marks < 0 || marks > 100) {
//         return "Enter correct Input";
//     }

//     let grade;

//     switch (true) {
//         case marks > 90:
//             grade = "A";
//             break;
//         case marks >= 70: // Catches everything from 70 to 90
//             grade = "B";
//             break;
//         case marks >= 50: // Catches everything from 50 to 69
//             grade = "c";
//             break;
//         case marks >= 35: // Catches everything from 35 to 49
//             grade = "D";
//             break;
//         case marks >= 30: // Catches everything from 30 to 34
//             grade = "E";
//             break;
//         default:
//             grade = "F"; // Standard failing grade for marks below 30
//             break;
//     }
//     return grade;
// }

// console.log(grade(60)); // Outputs: "c"


// Take the hour of the day (0–23) and print “Good Morning”, “Good Afternoon”, “Good Evening”, or “Good Night”.

function wish(time) {

    let wish;

    if (time > 24 && time < 0) {
        return "Invalid Time"
    } else {
        switch (true) {
            case time > 19: wish = "Gud Night"
                break;
            case time > 15: wish = "Gud Evening"
                break;
            case time > 12: wish = "Gud Afternoon"
                break;
            case time > 0: wish = "Gud Morning"
                break;
            default: wish = "Invalid Time"
                break;
        }
    }
    return wish;
}

console.log(wish(20));
