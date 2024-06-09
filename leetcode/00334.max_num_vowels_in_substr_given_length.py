"""
1456. Maximum Number of Vowels in a Substring of Given Length

Given a string s and an integer k, return the maximum number of vowel letters in any 
substring of s with length k.
Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

Example 1:
Input: s = "abciiidef", k = 3
Output: 3
Explanation: The substring "iii" contains 3 vowel letters.

Example 2:
Input: s = "aeiou", k = 2
Output: 2
Explanation: Any substring of length 2 contains 2 vowels.

Example 3:
Input: s = "leetcode", k = 3
Output: 2
Explanation: "lee", "eet" and "ode" contain 2 vowels.

Constraints:
    1 <= s.length <= 105
    s consists of lowercase English letters.
    1 <= k <= s.length

https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length
Time: O(n) | Space: O(1)
"""

class Solution:
    def maxVowels(self, s: str, k: int) -> int:
        vowels = ("a", "e", "i", "o", "u")
        j = max_vowels = curr_vowels = 0
        for i, char in enumerate(s):
            if char in vowels:
                curr_vowels += 1
            size = i - j + 1
            if size == k:
                max_vowels = max(max_vowels, curr_vowels)
                if s[j] in vowels:
                    curr_vowels -= 1
                j += 1
        return max_vowels
