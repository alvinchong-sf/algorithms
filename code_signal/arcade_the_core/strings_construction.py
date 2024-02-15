# Given two strings a and b, both consisting only of lowercase English letters, your task 
# is to calculate how many strings equal to a can be constructed using only letters from the
# string b? Each letter can be used only once and in one string only.

# Example

# For a = "abc" and b = "abccba", the output should be solution(a, b) = 2.

# We can construct 2 strings a = "abc" using only letters from the string b.

# For a = "ab" and b = "abcbcb", the output should be solution(a, b) = 1.

# Input/Output

# [execution time limit] 4 seconds (py3)

# [memory limit] 1 GB

# [input] string a

# String to construct, containing only lowercase English letters.

# Guaranteed constraints:
# 1 ≤ a.length ≤ 105.

# [input] string b

# String containing needed letters, containing only lowercase English letters.

# Guaranteed constraints:
# 1 ≤ b.length ≤ 105.

# [output] integer

# The number of strings a that can be constructed from the string b.
# https://app.codesignal.com/arcade/code-arcade/mirror-lake/chW9F8bCgxYJBcgj3

def solution(a, b):
    hash_map = {}
    for c in b:
        if c in hash_map:
            hash_map[c] += 1
        else:
            hash_map[c] = 1
    
    i = 0
    n = len(a)
    count = 0
    while True:
        mod_idx = i % n
        char = a[mod_idx]
        if char in hash_map:
            hash_map[char] -= 1
            if hash_map[char] <= 0:
                del hash_map[char]
        else:
            return count
        
        i += 1
        if i % n == 0:
            count += 1
    
    return count
