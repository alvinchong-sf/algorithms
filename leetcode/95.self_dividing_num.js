// 728. Self Dividing Numbers
// A self-dividing number is a number that is divisible by every digit it contains.

// For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.

// Also, a self-dividing number is not allowed to contain the digit zero.

// Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.

// Example 1:
// Input: 
// left = 1, right = 22
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]


var selfDividingNumbers = function(left, right) {
    // resultArr = []
    // for loop; i = left; end = right; i++    left = 1 right = 22
    // make a while loop (num !== 0)            num = 1
    // get right_most_number = num % 10;        right_most_number = 1
    // if right_most_number === 0; break;     
    // res = num % right_most_number                    1 % 1 = 0
    // if res !== 0; break; not a self dividing number                   
    // at end of while loop, resultArr.push(num)
    // return resultArr
    
    let resultArr = [];
    
    for(let i = left; i <= right; i++) {
        let num = i;
        if(num === 0) continue;
        while(num !== 0) {
            let rightMostNumber = num % 10;
            if(rightMostNumber === 0) break;
            let result = i % rightMostNumber
            if(result !== 0) break;
            num = Math.floor(num / 10);
        }
        if(num === 0) resultArr.push(i);
    }
    return resultArr;
};

// time o(n * m); n is length between left and right; m is the number of digits on each number
// space o(n); result array

// https://leetcode.com/problems/self-dividing-numbers/