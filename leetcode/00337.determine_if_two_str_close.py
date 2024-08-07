"""
1657. Determine if Two Strings Are Close
Solved
Medium
Topics
Companies
Hint

Two strings are considered close if you can attain one from the other using the following operations:

    Operation 1: Swap any two existing characters.
        For example, abcde -> aecdb
    Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
        For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)

You can use the operations on either string as many times as necessary.

Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

 

Example 1:

Input: word1 = "abc", word2 = "bca"
Output: true
Explanation: You can attain word2 from word1 in 2 operations.
Apply Operation 1: "abc" -> "acb"
Apply Operation 1: "acb" -> "bca"

Example 2:

Input: word1 = "a", word2 = "aa"
Output: false
Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations.

Example 3:

Input: word1 = "cabbba", word2 = "abbccc"
Output: true
Explanation: You can attain word2 from word1 in 3 operations.
Apply Operation 1: "cabbba" -> "caabbb"
Apply Operation 2: "caabbb" -> "baaccc"
Apply Operation 2: "baaccc" -> "abbccc"

Constraints:
    1 <= word1.length, word2.length <= 105
    word1 and word2 contain only lowercase English letters.

https://leetcode.com/problems/determine-if-two-strings-are-close/description

Time: O(n + wlog(w)) | Space: O(W)
where 'W' is the max unique characters in word1
"""

from collections import Counter
class Solution:
    def closeStrings(self, word1: str, word2: str) -> bool:
        n, m = len(word1), len(word2)
        if n != m: return False
        if word1 == word2: return True
        c1 = Counter(word1)
        c2 = Counter(word2)
        if len(c1) == len(c2) and self.is_same_val(c1, c2) and self.is_same_key(c1, c2):
            return True
        return False
    
    def is_same_key(self, c1, c2):
        s1 = set(c1.keys())
        s2 = set(c2.keys())
        return s1 == s2
    
    def is_same_val(self, c1, c2):
        s1 = sorted(list(c1.values()))
        s2 = sorted(list(c2.values()))
        for i in range(len(s1)):
            if s1[i] != s2[i]: return False
        return True