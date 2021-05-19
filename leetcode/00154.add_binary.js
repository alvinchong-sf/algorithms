// 67. Add Binary

// Given two binary strings a and b, return their sum as a binary string.

// Input: a = "11", b = "1"
// Output: "100"

var addBinary = function(a, b) {
    let num1 = BigInt(`0b${a}`);
    let num2 = BigInt(`0b${b}`);
    let sum = num1 + num2;
    return sum.toString(2)
};

// time o(1) 
// space o(1)
// https://leetcode.com/problems/add-binary/