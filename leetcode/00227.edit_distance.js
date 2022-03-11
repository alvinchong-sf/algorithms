// 72. Edit Distance

// Given two strings word1 and word2, return the minimum number of operations 
// required to convert word1 to word2.

// You have the following three operations permitted on a word:

// Insert a character
// Delete a character
// Replace a character
 

// Example 1:
// Input: word1 = "horse", word2 = "ros"
// Output: 3
// Explanation: 
// horse -> rorse (replace 'h' with 'r')
// rorse -> rose (remove 'r')
// rose -> ros (remove 'e')

// Example 2:
// Input: word1 = "intention", word2 = "execution"
// Output: 5
// Explanation: 
// intention -> inention (remove 't')
// inention -> enention (replace 'i' with 'e')
// enention -> exention (replace 'n' with 'x')
// exention -> exection (replace 'n' with 'c')
// exection -> execution (insert 'u')
 
// Constraints:
// 0 <= word1.length, word2.length <= 500
// word1 and word2 consist of lowercase English letters.

// time o(n * m) | space o(n * m)
var minDistance = function(word1, word2) {
    const dp = new Array(word1.length + 1).fill(null).map(() => new Array(word2.length + 1));
    
    for (let row = 0; row < dp.length; row++) {
        for (let col = 0; col < dp[0].length; col++) {
            if (row === 0 || col === 0) {
                dp[row][col] = row + col;
            } else if (word1[row - 1] === word2[col - 1]) {
                dp[row][col] = dp[row - 1][col - 1];
            } else {
                const left = dp[row][col - 1],
                      top = dp[row - 1][col],
                      diag = dp[row - 1][col - 1];
                dp[row][col] = Math.min(left, top, diag) + 1;
            }
        }
    }
    return dp[dp.length - 1][dp[0].length - 1];
};