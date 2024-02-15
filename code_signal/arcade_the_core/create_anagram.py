# You are given two strings s and t of the same length, consisting of uppercase English 
# letters. Your task is to find the minimum number of "replacement operations" needed to 
# get some anagram of the string t from the string s. A replacement operation is performed
# by picking exactly one character from the string s and replacing it by some other character.

# Example

# For s = "AABAA" and t = "BBAAA", the output should be
# solution(s, t) = 1;
# For s = "OVGHK" and t = "RPGUC", the output should be
# solution(s, t) = 4.
# Input/Output

# The minimum number of replacement operations needed to get an anagram of the string t from the string s.

# https://app.codesignal.com/arcade/code-arcade/mirror-lake/BsShkFDfbkWxozmMN

def solution(s, t):
    hash_map = {}
    
    for c in s:
        if c in hash_map:
            hash_map[c] += 1
        else:
            hash_map[c] = 1
            
    for c2 in t:
        if c2 in hash_map:
            hash_map[c2] -= 1
            if hash_map[c2] <= 0:
                del hash_map[c2]
    
    return sum(list(hash_map.values()))