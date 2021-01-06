//Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

// Input: 38
// Output: 2 
// Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2. 
//              Since 2 has only one digit, return it.

// num / 10 always gets the left most single digit
// num % 10 always gets the right most single digit
// call the function twice to trigger the recursive call
// base case is if the number is num < 10 then return num

var addDigits = function(num) {
    if (num < 10) return num;
    
    return addDigits( addDigits(Math.floor(num / 10)) + (num % 10) )
};

//  https://leetcode.com/problems/add-digits/