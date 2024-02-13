# Given integers n, l and r, find the number of ways to represent n as a sum of two
# integers A and B such that l ≤ A ≤ B ≤ r.

# Example

# For n = 6, l = 2, and r = 4, the output should be
# solution(n, l, r) = 2.

# There are just two ways to write 6 as A + B, where 2 ≤ A ≤ B ≤ 4: 6 = 2 + 4 and 6 = 3 + 3.

# https://app.codesignal.com/arcade/code-arcade/loop-tunnel/hBw5BJiZ4LmXcy92u/drafts

def solution(n, l, r):
    count = 0
    hash_set = set(list(range(l, r+1)))
    for i in range(l, r+1):
        diff = n - i
        if diff in hash_set:
            hash_set.remove(i)
            count += 1
    
    return count