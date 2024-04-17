"""
You have two strings, s and t. The string t contains only unique elements. Find and return the minimum consecutive substring of s that contains all of the elements from t.

It's guaranteed that the answer exists. If there are several answers, return the one which starts from the smallest index.

Example
For s = "adobecodebanc" and t = "abc", the output should be
solution(s, t) = "banc".
"""

def solution(s, t):
    if len(t) == 1: return t
    if not t: return ""
    n = len(s)
    min_length = n
    result = s
    j = 0
    hash_map = {}
    for char in t:
        hash_map[char] = 0
        
    for i in range(n):
        ch = s[i]
        if ch in hash_map:
            hash_map[ch] += 1
        
        while all(num > 0 for num in list(hash_map.values())) and j <= i:
            curr_length = i - j + 1
            if curr_length < min_length:
                min_length = curr_length
                result = s[j:i+1]
            if s[j] in hash_map:
                hash_map[s[j]] -= 1
            j += 1
        
    return result
