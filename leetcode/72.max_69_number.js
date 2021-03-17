// 1323. Maximum 69 Number

// Given a positive integer num consisting only of digits 6 and 9.

// Return the maximum number you can get by changing at most one digit 
// (6 becomes 9, and 9 becomes 6).

// Input: num = 9669
// Output: 9969

var maximum69Number  = function(num) {
    let str = num.toString();
    let arr = [];
    
    for(let i = 0; i < str.length; i++) {
        let string = str[i]
        
        if(string === "6") {
            arr.push("9");
            i = i + 1;
            while(i < str.length) {
                arr.push(str[i]);
                i++;
            }
            break;
        } else {
            arr.push(string);
        }
    }
    return parseInt(arr.join(""));
};

// time o(n)
// space o(n)

// https://leetcode.com/problems/maximum-69-number/