// 696. Count Binary Substrings

// Give a binary string s, return the number of non-empty substrings that have 
// the same number of 0's and 1's, and all the 0's and all the 1's in these 
// substrings are grouped consecutively.

// Substrings that occur multiple times are counted the number of times they occur.

// Example 1:
// Input: s = "00110011"
// Output: 6
// Explanation: There are 6 substrings that have equal number of consecutive 1's and 0's: "0011", "01", "1100", "10", "0011", and "01".
// Notice that some of these substrings repeat and are counted the number of times they occur.
// Also, "00110011" is not a valid substring because all the 0's (and 1's) are not grouped together.

var countBinarySubstrings = function(s) {
    const groupArr = [];
    let i = 0,
        result = 0;
    
    while ( i < s.length) {
        let count = 1,
            j = i + 1;
        while (s[i] === s[j]) {
            count++; j++;
        }
        groupArr.push(count);
        i = j;
    }
    
    for (let k = 0; k < groupArr.length - 1; k++) {
        const curr = groupArr[k],
              next = groupArr[k + 1];
        
        result += Math.min(curr, next);
    }
    
    return result;
    
};