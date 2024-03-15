# 47. Permutations II
# Given a collection of numbers, nums, that might contain duplicates, return all possible unique 
# permutations in any order.

# Example 1:
# Input: nums = [1,1,2]
# Output:
# [[1,1,2],
#  [1,2,1],
#  [2,1,1]]


class Solution:
    def permuteUnique(self, nums: List[int]) -> List[List[int]]:
        def dfs(i):
            if i >= n:
                copy = nums.copy()
                new_str = "".join(list(map(lambda x: str(x), copy)))
                if new_str not in new_set:
                    new_set.add(new_str)
                    permutations.append(copy)
                return
            
            for j in range(i, n):
                self.swap(nums, i, j)
                dfs(i+1)
                self.swap(nums, i, j)
        
        new_set = set()
        n = len(nums)
        permutations = []
        dfs(0)
        return permutations
    
    def swap(self, nums, i, j):
        nums[i], nums[j] = nums[j], nums[i]