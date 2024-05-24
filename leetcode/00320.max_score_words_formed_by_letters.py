"""
1255. Maximum Score Words Formed by Letters
Given a list of words, list of  single letters (might be repeating) and score of every character.
Return the maximum score of any valid set of words formed by using the given letters (words[i] 
cannot be used two or more times). It is not necessary to use all characters in letters and 
each letter can only be used once. Score of letters 'a', 'b', 'c', ... ,'z' is given by score[0], 
score[1], ... , score[25] respectively.

Example 1:
Input: words = ["dog","cat","dad","good"], letters = ["a","a","c","d","d","d","g","o","o"], 
score = [1,0,9,5,0,0,3,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0]
Output: 23
Explanation: Score  a=1, c=9, d=5, g=3, o=2
Given letters, we can form the words "dad" (5+1+5) and "good" (3+2+2+5) with a score of 23.
Words "dad" and "dog" only get a score of 21.

Example 2:
Input: words = ["xxxz","ax","bx","cx"], letters = ["z","a","b","c","x","x","x"], 
score = [4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,10]
Output: 27
Explanation: Score  a=4, b=4, c=4, x=5, z=10
Given letters, we can form the words "ax" (4+5), "bx" (4+5) and "cx" (4+5) with a score of 27.
Word "xxxz" only get a score of 25.

Example 3:
Input: words = ["leetcode"], letters = ["l","e","t","c","o","d"], 
score = [0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0]
Output: 0
Explanation: Letter "e" can only be used once.

Constraints:
    1 <= words.length <= 14
    1 <= words[i].length <= 15
    1 <= letters.length <= 100
    letters[i].length == 1
    score.length == 26
    0 <= score[i] <= 10
    words[i], letters[i] contains only lower case English letters.

https://leetcode.com/problems/maximum-score-words-formed-by-letters/description
Time: O(m * 2^n) | Space: O(n + m)
"""

from collections import Counter
import string
class Solution:
    def maxScoreWords(self, words: List[str], letters: List[str], score: List[int]) -> int:
        counter = Counter(letters)
        scores = self.get_scores(score)
        max_score = [0]
        n = len(words)
        self.dfs(0, words, counter, scores, n, max_score, 0)
        return max_score[0]

    def dfs(self, i, words, counter, scores, n, max_score, curr_score):
        if i >= n:
            return

        for j in range(i, n):
            word = words[j]
            if self.is_valid(word, counter):
                self.update_counter(word, counter, "subtract")
                score = curr_score + self.get_score(word, scores)
                max_score[0] = max(max_score[0], score)
                self.dfs(j + 1, words, counter, scores, n, max_score, score)
                self.update_counter(word, counter, "add")

    def get_score(self, word, scores):
        total = 0
        for c in word:
            total += scores[c]
        return total

    def update_counter(self, word, counter, operator):
        if operator == "add":
            for c in word:
                counter[c] += 1
        
        if operator == "subtract":
            for c in word:
                counter[c] -= 1

    def is_valid(self, word, counter):
        word_counter = Counter(word)
        for char1, count1 in word_counter.items():
            if char1 not in counter:
                return False
            if count1 > counter[char1]:
                return False
        return True

    def get_scores(self, score):
        alphabet = string.ascii_lowercase
        size = len(alphabet)
        scores = {}
        for i in range(size):
            scores[alphabet[i]] = score[i]
        return scores