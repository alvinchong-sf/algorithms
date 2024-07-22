"""
1980. Find Unique Binary String
Given an array of strings nums containing n unique binary strings each of length n, return a 
binary string of length n that does not appear in nums. If there are multiple answers, you may 
return any of them.

Example 1:
Input: nums = ["01","10"]
Output: "11"
Explanation: "11" does not appear in nums. "00" would also be correct.

Example 2:
Input: nums = ["00","01"]
Output: "11"
Explanation: "11" does not appear in nums. "10" would also be correct.

Example 3:
Input: nums = ["111","011","001"]
Output: "101"
Explanation: "101" does not appear in nums. "000", "010", "100", and "110" would also be correct.

Constraints:
    n == nums.length
    1 <= n <= 16
    nums[i].length == n
    nums[i] is either '0' or '1'.
    All the strings of nums are unique.

https://leetcode.com/problems/find-unique-binary-string/description/
Time: O(n * 2^n) | Space: O(n)
"""

class Solution:
    def findDifferentBinaryString(self, nums: List[str]) -> str:
        n = len(nums)
        nums_set = set(nums)
        temp = []
        return self.dfs(0, nums_set, temp, n)[1]

    def dfs(self, i, nums, temp, n):
        if len(temp) >= n:
            s = "".join(temp.copy())
            return (False, "") if s in nums else (True, s)
        for j in range(0, 2):
            temp.append(str(j))
            has_unique, result = self.dfs(j, nums, temp, n)
            temp.pop()
            if has_unique: return (True, result)
        return (False, "")