"""
1662. Check If Two String Arrays are Equivalent
Given two string arrays word1 and word2, return true if the two arrays represent the same string, 
and false otherwise. A string is represented by an array if the array elements concatenated in 
order forms the string.

Example 1:
Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
Output: true
Explanation:
word1 represents string "ab" + "c" -> "abc"
word2 represents string "a" + "bc" -> "abc"
The strings are the same, so return true.

Example 2:
Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
Output: false

Example 3:
Input: word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]
Output: true

Constraints:
    1 <= word1.length, word2.length <= 103
    1 <= word1[i].length, word2[i].length <= 103
    1 <= sum(word1[i].length), sum(word2[i].length) <= 103
    word1[i] and word2[i] consist of lowercase letters.

https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/description/
Time: O(n) | Space O(1)
"""

class Solution:
    def arrayStringsAreEqual(self, word1: List[str], word2: List[str]) -> bool:
        m, n = len(word1), len(word2)
        i, j = 0, 0
        last_idx1, last_idx2 = 0, 0
        while i < m and j < n:
            s1, s2 = word1[i], word2[j]
            is_valid, idx1, idx2 = self.check_str(s1, s2, last_idx1, last_idx2)
            if not is_valid: return False
            if idx1 >= len(s1) and idx2 >= len(s2):
                last_idx1, last_idx2 = 0, 0
                i, j = i + 1, j + 1
            elif idx1 >= len(s1):
                last_idx1, last_idx2 = 0, idx2
                i += 1
            else:
                last_idx1, last_idx2 = idx1, 0
                j += 1
        return True if i >= m and j >= n else False

    def check_str(self, s1, s2, i, j):
        n1, n2 = len(s1), len(s2)
        if i > n1 or j > n2: return (False, i , j)
        while i < n1 and j < n2:
            if s1[i] != s2[j]: return (False, i, j)
            i, j = i + 1, j + 1
        return (True, i, j)