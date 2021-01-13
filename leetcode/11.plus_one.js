// Given a non-empty array of decimal digits representing a non-negative integer, 
// increment one to the integer.
// The digits are stored such that the most significant digit is at the head of 
// the list, and each element in the array contains a single digit.
// You may assume the integer does not contain any leading zero, except the number 
// 0 itself.

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.

var plusOne = function(digits) {
    
    let carry = 1;
    for(let i = digits.length - 1; i >= 0; i--) {
        let num = digits[i] + carry;
        carry = 0;
        
        if(num > 9) {
            num -= 10
            carry = 1
            digits[i] = num
        } else {
            digits[i] = num
        }
    }
    // return carry ? [1, ...digits] : digits;
    if (!carry) {
        return digits;
    } else {
        return [1, ...digits];
    }
};

// time: o(n)
// https://leetcode.com/problems/plus-one/