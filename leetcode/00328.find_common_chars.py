"""
1002. Find Common Characters
Given a string array words, return an array of all characters that show up in all strings 
within the words (including duplicates). You may return the answer in any order.

Example 1:
Input: words = ["bella","label","roller"]
Output: ["e","l","l"]

Example 2:
Input: words = ["cool","lock","cook"]
Output: ["c","o"]

Constraints:
    1 <= words.length <= 100
    1 <= words[i].length <= 100
    words[i] consists of lowercase English letters.

https://leetcode.com/problems/find-common-characters/description
Time: O(n * w) | Space: O(n * w) where w is the longest word in words array
"""

from collections import Counter
class Solution:
    def commonChars(self, words: List[str]) -> List[str]:
        n = len(words)
        if n == 1: return [c for c in words[0]]
        result = []
        shortest_word = self.get_shortest_word(words)
        words_map = self.get_words_map(words)
        for char in shortest_word:
            has_common = True
            for hash_map in words_map:
                if char not in hash_map:
                    has_common = False
                    break
            if has_common:
                result.append(char)
                for hash_map in words_map:
                    hash_map[char] -= 1
                    if hash_map[char] == 0:
                        del hash_map[char]
        return result


    def get_words_map(self, words):
        words_map = []
        for word in words:
            hash_map = Counter(word)
            words_map.append(hash_map)
        return words_map

    def get_shortest_word(self, words) -> str:
        min_length = float("inf")
        min_word = ""
        for word in words:
            n = len(word)
            if n < min_length:
                min_length = n
                min_word = word
        return min_word