"""
187. Repeated DNA Sequences
The DNA sequence is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T'.
    For example, "ACGAATTCCG" is a DNA sequence.
When studying DNA, it is useful to identify repeated sequences within the DNA.
Given a string s that represents a DNA sequence, return all the 10-letter-long sequences 
(substrings) that occur more than once in a DNA molecule. You may return the answer in any order.

Example 1:
Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
Output: ["AAAAACCCCC","CCCCCAAAAA"]

Example 2:
Input: s = "AAAAAAAAAAAAA"
Output: ["AAAAAAAAAA"]

Constraints:
    1 <= s.length <= 105
    s[i] is either 'A', 'C', 'G', or 'T'.

https://leetcode.com/problems/repeated-dna-sequences/
Time: O(n) | Space: O(n)
"""
from collections import deque
class Solution:
    def findRepeatedDnaSequences(self, s: str) -> List[str]:
        n = len(s)
        if n < 10: return []
        queue = deque([])
        hmap = {}
        for i in range(10):
            queue.append(s[i])
        sub = "".join(queue.copy())
        hmap[sub] = 1
        queue.popleft()
        for j in range(10, n):
            queue.append(s[j])
            sub = "".join(queue.copy())
            if sub not in hmap:
                hmap[sub] = 0
            hmap[sub] += 1
            queue.popleft()
        result = []
        for dna, count in hmap.items():
            if count > 1:
                result.append(dna)
        return result