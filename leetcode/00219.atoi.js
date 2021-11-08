// 8. String to Integer (atoi)
// Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).

// The algorithm for myAtoi(string s) is as follows:

// Read in and ignore any leading whitespace.
// Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
// Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
// Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
// If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
// Return the integer as the final result.
// Note:

// Only the space character ' ' is considered a whitespace character.
// Do not ignore any characters other than the leading whitespace or the rest of the string after the digits.
 

// Example 1:

// Input: s = "42"
// Output: 42
// Explanation: The underlined characters are what is read in, the caret is the current reader position.
// Step 1: "42" (no characters read because there is no leading whitespace)
//          ^
// Step 2: "42" (no characters read because there is neither a '-' nor '+')
//          ^
// Step 3: "42" ("42" is read in)
//            ^
// The parsed integer is 42.
// Since 42 is in the range [-231, 231 - 1], the final result is 42.

var myAtoi = function(s) {
    const set = new Set(["1","2","3","4","5","6","7","8","9","0"])
    const resultArr = [];
    let isNegative = false;
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        const result = Number(char);
        
        if (!resultArr.length) { // is empty
            const nextChar = s[i + 1];
            if (char === "0") {
                if (!set.has(nextChar)) return 0;
                if ( !isNaN( Number(nextChar)) ) {
                    continue;
                } else {
                    return 0;
                }
            }
            if (char === " " || result === 0 ) continue;
            if (char === "-") {
                if ( !isNaN( Number(nextChar)) ) {
                    isNegative = true;
                    continue;
                } else {
                    return 0;
                }
            }
            if (char === "+") {
                if ( !isNaN( Number(nextChar)) ) {
                    if (!set.has(nextChar)) {
                        return 0;
                    } else {
                      continue;   
                    }
                } else {
                    return 0;
                }
            }
            if ( isNaN(result) ) return 0;
        } else { // not empty
            if ( isNaN(result) || char === " ") break;
        }
        if (!isNaN(result)) {
            resultArr.push(char);
        }
    }
    
    let finalResult = isNegative ? Number(resultArr.join("")) * -1 : Number(resultArr.join(""));
    
    const posLimit = Math.pow(2, 31) - 1,
          negLimit = Math.pow(-2, 31);
    

    if (finalResult > posLimit) {
        return posLimit;
    } else if (finalResult < negLimit) {
        return negLimit;
    } else {
        return finalResult;
    }
    
};
// time o(n) | space o(n)
// I hate this problem
// https://leetcode.com/problems/string-to-integer-atoi/
