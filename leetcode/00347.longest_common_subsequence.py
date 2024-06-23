"""
1143. Longest Common Subsequence
Given two strings text1 and text2, return the length of their longest common subsequence. If 
there is no common subsequence, return 0.
A subsequence of a string is a new string generated from the original string with some characters 
(can be none) deleted without changing the relative order of the remaining characters.
For example, "ace" is a subsequence of "abcde".
A common subsequence of two strings is a subsequence that is common to both strings.

Example 1:
Input: text1 = "abcde", text2 = "ace" 
Output: 3  
Explanation: The longest common subsequence is "ace" and its length is 3.

Example 2:
Input: text1 = "abc", text2 = "abc"
Output: 3
Explanation: The longest common subsequence is "abc" and its length is 3.

Example 3:
Input: text1 = "abc", text2 = "def"
Output: 0
Explanation: There is no such common subsequence, so the result is 0.

Constraints:
    1 <= text1.length, text2.length <= 1000
    text1 and text2 consist of only lowercase English characters.
https://leetcode.com/problems/longest-common-subsequence/description
Time: O(n1 * n2) | Space: O(max(n1, n2))
"""
class Solution:
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:
        n1, n2 = len(text1), len(text2)
        memo = [[ -1 for _ in range(n2 + 1)] for _ in range(n1 + 1)]
        return self.recursion(text1, text2, n1, n2, 0, 0, memo)

    def recursion(self, s1, s2, n1, n2, i, j, memo):
        if memo[i][j] >= 0: return memo[i][j]
        if i >= n1 or j >= n2:
            memo[i][j] = 0
        elif s1[i] == s2[j]:
            memo[i][j] = self.recursion(s1, s2, n1, n2, i + 1, j + 1, memo) + 1
        else:
            left = self.recursion(s1, s2, n1, n2, i + 1, j, memo)
            right = self.recursion(s1, s2, n1, n2, i, j + 1, memo)
            memo[i][j] = max(left, right)
        return memo[i][j]