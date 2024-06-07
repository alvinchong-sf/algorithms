"""
648. Replace Words
In English, we have a concept called root, which can be followed by some other word to form 
another longer word - let's call this word derivative. For example, when the root "help" is 
followed by the word "ful", we can form a derivative "helpful". Given a dictionary consisting 
of many roots and a sentence consisting of words separated by spaces, replace all the 
derivatives in the sentence with the root forming it. If a derivative can be replaced by more 
than one root, replace it with the root that has the shortest length.
Return the sentence after the replacement.

Example 1:
Input: dictionary = ["cat","bat","rat"], sentence = "the cattle was rattled by the battery"
Output: "the cat was rat by the bat"

Example 2:
Input: dictionary = ["a","b","c"], sentence = "aadsfasf absbs bbab cadsfafs"
Output: "a a b c"

Constraints:
    1 <= dictionary.length <= 1000
    1 <= dictionary[i].length <= 100
    dictionary[i] consists of only lower-case letters.
    1 <= sentence.length <= 106
    sentence consists of only lower-case letters and spaces.
    The number of words in sentence is in the range [1, 1000]
    The length of each word in sentence is in the range [1, 1000]
    Every two consecutive words in sentence will be separated by exactly one space.
    sentence does not have leading or trailing spaces.

https://leetcode.com/problems/replace-words
Time: O(n + m * w) | Space: O(n + m)
n = dictionary length
m = sentence length
w = longest word in Trie
"""

class Solution:
    def replaceWords(self, dictionary: List[str], sentence: str) -> str:
        result = []
        trie = Trie()
        for root in dictionary:
            trie.add(root)
        
        words = sentence.split(" ")
        for word in words:
            has_word, root_word = trie.search(word)
            if has_word:
                result.append(root_word)
            else:
                result.append(word)
        return " ".join(result)

class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_terminal = False
        self.word = ""

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def add(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.is_terminal = True
        node.word = word

    def search(self, word):
        node = self.root
        for char in word:
            if node.is_terminal:
                return (True, node.word)
            if char not in node.children:
                return (False, "")
            node = node.children[char]
        return (True, node.word) if node.is_terminal else (False, "")