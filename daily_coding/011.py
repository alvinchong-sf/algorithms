# Decode Variations
# A letter can be encoded to a number in the following way:

# 'A' -> '1', 'B' -> '2', 'C' -> '3', ..., 'Z' -> '26'
# A message is a string of uppercase letters, and it is encoded first using this scheme. For example, 'AZB' -> '1262'

# Given a string of digits S from 0-9 representing an encoded message, return the number of ways to decode it.

# Examples:

# input:  S = '1262'
# output: 3
# explanation: There are 3 messages that encode to '1262': 'AZB', 'ABFB', and 'LFB'.

def decodeVariations(s):
    result = [0]
    n = len(s)
    dfs(0, result, n, s)
    return result[0]

def dfs(idx, result, n, s):
    if idx >= n:
        result[0] += 1
        return

    for j in range(idx, n):
        num_s = s[idx : j + 1]
        num = int(num_s)
        if num > 26 or num == 0:
            return

        dfs(j+1, result, n, s)
