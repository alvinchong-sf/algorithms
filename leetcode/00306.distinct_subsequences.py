# 115. Distinct Subsequences
# Given two strings s and t, return the number of distinct subsequences of s which equals t.
# The test cases are generated so that the answer fits on a 32-bit signed integer.

# Example 1:
# Input: s = "rabbbit", t = "rabbit"
# Output: 3
# Explanation:
# As shown below, there are 3 ways you can generate "rabbit" from s.
# rabbbit
# rabbbit
# rabbbit

# Example 2:
# Input: s = "babgbag", t = "bag"
# Output: 5
# Explanation:
# As shown below, there are 5 ways you can generate "bag" from s.
# babgbag
# babgbag
# babgbag
# babgbag
# babgbag

# Constraints:
#     1 <= s.length, t.length <= 1000
#     s and t consist of English letters.

class Solution:
    def numDistinct(self, s: str, t: str) -> int:
        n, m = len(s), len(t)
        if n == m: return 1 if s == t else 0
        if m > n: return 0
        memo = {}
        return self.dfs(0, 0, s, t, n, m, memo)

    def dfs(self, i, k, s, t, n, m, memo):
        if (i, k) in memo: return memo[(i, k)]
        if k >= m: return 1
        if i >= n or n - i < m - k: return 0

        count = 0
        for j in range(i, n):
            if s[j] == t[k]:
                count += self.dfs(j + 1, k + 1, s, t, n, m, memo)

        memo[(i, k)] = count
        return count