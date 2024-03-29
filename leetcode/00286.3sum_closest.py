# 16. 3Sum Closest

# Given an integer array nums of length n and an integer target, find three integers in nums such 
# that the sum is closest to target. Return the sum of the three integers. You may assume that 
# each input would have exactly one solution.

# Example 1:
# Input: nums = [-1,2,1,-4], target = 1
# Output: 2
# Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

# Example 2:
# Input: nums = [0,0,0], target = 1
# Output: 0
# Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).

class Solution:
    def threeSumClosest(self, nums: List[int], target: int) -> int:
        nums.sort()
        closest_num = nums[0]
        min_diff = float("inf")
        n = len(nums)
        i = 0

        while i < n - 2:
            num1 = nums[i]
            j, k = i + 1, n - 1
            while j < k:
                num2, num3 = nums[j], nums[k]
                total = num1 + num2 + num3
                diff = abs(total - target)
                if diff == 0:
                    return total

                if diff < min_diff:
                    min_diff = diff
                    closest_num = total

                if total < target:
                    j += 1
                elif total > target:
                    k -= 1
            i += 1
        return closest_num