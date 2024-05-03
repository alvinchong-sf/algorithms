# 30. Substring with Concatenation of All Words
# You are given a string s and an array of strings words. All the strings of words are of the same length.
# A concatenated string is a string that exactly contains all the strings of any permutation of words concatenated.

# For example, if words = ["ab","cd","ef"], then "abcdef", "abefcd", "cdabef", "cdefab", "efabcd", 
# and "efcdab" are all concatenated strings. "acdbef" is not a concatenated string because it is 
# not the concatenation of any permutation of words. Return an array of the starting indices of 
# all the concatenated substrings in s. You can return the answer in any order.

# Example 1:
# Input: s = "barfoothefoobarman", words = ["foo","bar"]
# Output: [0,9]
# Explanation:
# The substring starting at 0 is "barfoo". It is the concatenation of ["bar","foo"] which is a permutation of words.
# The substring starting at 9 is "foobar". It is the concatenation of ["foo","bar"] which is a permutation of words.

# Example 2:
# Input: s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
# Output: []
# Explanation:
# There is no concatenated substring.

# Example 3:
# Input: s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]
# Output: [6,9,12]
# Explanation:
# The substring starting at 6 is "foobarthe". It is the concatenation of ["foo","bar","the"].
# The substring starting at 9 is "barthefoo". It is the concatenation of ["bar","the","foo"].
# The substring starting at 12 is "thefoobar". It is the concatenation of ["the","foo","bar"].

# Constraints:
# 1 <= s.length <= 104
# 1 <= words.length <= 5000
# 1 <= words[i].length <= 30
# s and words[i] consist of lowercase English letters.

# https://leetcode.com/problems/substring-with-concatenation-of-all-words/
# Time: O(n * (m * w)) | Space: O(m)
from collections import Counter
class Solution:
    def findSubstring(self, s: str, words: List[str]) -> List[int]:
        n, m, w = len(s), len(words), len(words[0])
        indices = []
        if w > n or m * w > n: return indices
        hash_map = Counter(words)

        for i in range(0, n - (m * w) + 1):
            if s[i:i+w] in hash_map:
                if self.get_substring_idx(s, i, m, w, hash_map) != -1:
                    indices.append(i)

        return indices
    
    def get_substring_idx(self, s, i, m, w, hash_map):
        new_hash_map = {}

        for key in hash_map:
            new_hash_map[key] = hash_map[key]

        for j in range(i, i + (m * w), w):
            word = s[j:j+w]
            if word not in new_hash_map or new_hash_map[word] <= 0:
                return -1
            new_hash_map[word] -= 1

        return i