// 7. Reverse Integer

// Given a signed 32-bit integer x, return x with its digits reversed. 
// If reversing x causes the value to go outside the signed 32-bit integer 
// range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

var reverse = function(x) {
    let temp = (x >= 0) ? x.toString().split("") : x.toString().slice(1).split(""); 
    let resultArr = (x >= 0) ? [] : ["-"]
    while(temp.length) {
        let char = temp.pop();
        resultArr.push(char);
    }
    let res = parseInt(resultArr.join(""));
    if(res > Math.pow(2, 31) - 1 || res < Math.pow(2, 31) * -1) return 0;
    return res;
};

// time o(n)
// space o(n)
// https://leetcode.com/problems/reverse-integer/