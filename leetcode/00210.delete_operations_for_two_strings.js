// 583. Delete Operation for Two Strings

// Given two strings word1 and word2, return the minimum number of steps required 
// to make word1 and word2 the same.

// In one step, you can delete exactly one character in either string.

 
// Example 1:
// Input: word1 = "sea", word2 = "eat"
// Output: 2
// Explanation: You need one step to make "sea" to "ea" and another step to make "eat" to "ea".

// Example 2:
// Input: word1 = "leetcode", word2 = "etco"
// Output: 4

var minDistance = function(word1, word2) {
    let dp = new Array();
    for (let n = 0; n < word1.length+1; n++) {
        dp.push([]);
    }
    for (let i = 0; i <= word1.length; i++) {
        for (let j = 0; j <= word2.length; j++) {
            if (j === 0 || i === 0) { 
                dp[i][j] = i + j;
            } else if (word1[i-1] === word2[j-1]) {
                dp[i][j] = dp[i-1][j-1]
            } else {
                dp[i][j] = Math.min(dp[i-1][j],dp[i][j-1]) + 1
            }
        }
    }
    return dp[word1.length][word2.length];
};

// https://leetcode.com/problems/delete-operation-for-two-strings/