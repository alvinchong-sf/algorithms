# 40. Combination Sum II
# Given a collection of candidate numbers (candidates) and a target number (target), find 
# all unique combinations in candidates where the candidate numbers sum to target.

# Each number in candidates may only be used once in the combination.

# Note: The solution set must not contain duplicate combinations.

# Example 1:
# Input: candidates = [10,1,2,7,6,1,5], target = 8
# Output: [[1,1,6],[1,2,5],[1,7],[2,6]]

# Example 2:
# Input: candidates = [2,5,2,1,2], target = 5
# Output: [[1,2,2],[5]]

class Solution:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        def dfs(i, curr_sum):
            if curr_sum >= target:
                if curr_sum == target:
                    copy_arr = temp.copy()
                    new_str = "".join(list(map(lambda x: str(x), sorted(copy_arr))))
                    if new_str not in new_set:
                        new_set.add(new_str)
                        combinations.append(copy_arr)
                return
            
            for j in range(i, len(candidates)):
                if j > i and candidates[j] == candidates[j-1]:
                    continue
                num = candidates[j]
                temp.append(num)
                dfs(j + 1, curr_sum + num)
                temp.pop()

        new_set = set()
        combinations = []
        temp = []
        dfs(0, 0)
        return combinations