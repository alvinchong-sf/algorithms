/*
131. Palindrome Partitioning
Given a string s, partition s such that every substring of the partition is a
palindrome. Return all possible palindrome partitioning of s.

Example 1:
Input: s = "aab"
Output: [["a","a","b"],["aa","b"]]

Example 2:
Input: s = "a"
Output: [["a"]]

Constraints:
    1 <= s.length <= 16
    s contains only lowercase English letters.
*/
# time: O(k^n) | space: O(n)
# https://leetcode.com/problems/palindrome-partitioning/description/
class Solution:
    def partition(self, s: str) -> List[List[str]]:
        result = []
        temp = []
        self.dfs(0, s, temp, result)
        return result

    def dfs(self, i, s, temp, result):
        n = len(s)
        if i >= n:
            result.append(temp.copy())
            return

        for j in range(i, n):
            if self.is_palindrome(s, i, j):
                temp.append(s[i:j+1])
                self.dfs(j + 1, s, temp, result)
                temp.pop()

    def is_palindrome(self, s, i, j):
        while i < j:
            if s[i] != s[j]:
                return False
            i += 1
            j -= 1
        return True
