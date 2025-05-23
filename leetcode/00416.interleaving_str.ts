/*
97. Interleaving String
Solved
Medium
Topics
Companies

Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2.

An interleaving of two strings s and t is a configuration where s and t are divided into n and m
substrings
respectively, such that:

    s = s1 + s2 + ... + sn
    t = t1 + t2 + ... + tm
    |n - m| <= 1
    The interleaving is s1 + t1 + s2 + t2 + s3 + t3 + ... or t1 + s1 + t2 + s2 + t3 + s3 + ...

Note: a + b is the concatenation of strings a and b.

 

Example 1:

Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
Output: true
Explanation: One way to obtain s3 is:
Split s1 into s1 = "aa" + "bc" + "c", and s2 into s2 = "dbbc" + "a".
Interleaving the two splits, we get "aa" + "dbbc" + "bc" + "a" + "c" = "aadbbcbcac".
Since s3 can be obtained by interleaving s1 and s2, we return true.

Example 2:

Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
Output: false
Explanation: Notice how it is impossible to interleave s2 with any other string to obtain s3.

Example 3:

Input: s1 = "", s2 = "", s3 = ""
Output: true

 

Constraints:

    0 <= s1.length, s2.length <= 100
    0 <= s3.length <= 200
    s1, s2, and s3 consist of lowercase English letters.

Follow up: Could you solve it using only O(s2.length) additional memory space?

https://leetcode.com/problems/interleaving-string/description/
Time: O(n * m) | Space: O(n * m)
*/

function isInterleave(s1: string, s2: string, s3: string): boolean {
    const n1 = s1.length, n2 = s2.length, n3 = s3.length;
    if (n1 + n2 !== n3) return false;
    const dp = new Array(n1 + 1)
                .fill(null)
                .map(() => new Array(n2 + 1).fill(false));
    
    for (let row = 0; row <= n1; row++) {
        for (let col = 0; col <= n2; col++) {
            if (row === 0 && col === 0) {
                dp[row][col] = true;
            } else {
                let b1 = false, b2 = false;
                if (col - 1 >= 0) {
                    b1 = dp[row][col - 1] && s3[col + row - 1] === s2[col - 1];
                }
                if (row - 1 >= 0) {
                    b2 = dp[row - 1][col] && s3[row + col - 1] === s1[row - 1];
                }
                if (row === 0) {
                    dp[row][col] = b1;
                } else if (col === 0) {
                    dp[row][col] = b2;
                } else {
                    dp[row][col] = b1 || b2;
                }
            }
        }
    }
    return dp[n1][n2];
};