// Fizz Buzz

// Write a program that outputs the string representation of numbers from 1 to n.

// But for multiples of three it should output “Fizz” instead of the number 
// and for the multiples of five output “Buzz”. For numbers which are multiples 
// of both three and five output “FizzBuzz”.

// n = 15,

// Return:
// [
//     "1",
//     "2",
//     "Fizz",
//     "4",
//     "Buzz",
//     "Fizz",
//     "7",
//     "8",
//     "Fizz",
//     "Buzz",
//     "11",
//     "Fizz",
//     "13",
//     "14",
//     "FizzBuzz"
// ]

var fizzBuzz = function(n) {
    let newArr = [];
    
    for(let i = 1; i <= n; i++) {
        // 4 different conditions
        // first: stringify version of number
        // second: multiple of three should output "Fizz"
        // third: multiple of fives should output "Buzz"
        // fourth: multiple of both should output "FizzBuzz"
        
        
        if( i % 15 === 0) {
          newArr.push("FizzBuzz")
        } else if( i % 3 === 0) {
            newArr.push("Fizz")
        } else if(i % 5 === 0) {
            newArr.push("Buzz")
        } else {
            newArr.push(i.toString())
        }
    }
    
    return newArr;
};

// time: o(n)

// https://leetcode.com/problems/fizz-buzz/