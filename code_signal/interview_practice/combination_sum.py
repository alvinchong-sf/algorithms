# Given an array of integers a and an integer sum, find all of the unique combinations in a that 
# add up to sum. The same number from a can be used an unlimited number of times in a combination.
# Elements in a combination (a1 a2 … ak) must be sorted in non-descending order, while the 
# combinations themselves must be sorted in ascending order. If there are no possible combinations 
# that add up to sum, the output should be the string "Empty".

# Example
# For a = [2, 3, 5, 9] and sum = 9, the output should be
# solution(a, sum) = "(2 2 2 3)(2 2 5)(3 3 3)(9)".

# All possible combinations that add up to a given sum, or "Empty" if there are no possible combinations.

def solution(a, sum):
    a.sort()
    temp, result, visited = [], [], set()
    dfs(a, sum, temp, result, 0, 0, len(a), visited)
    if not result: return "Empty"
    return "".join(result)
        
    
def dfs(nums, target, temp, result, curr_sum, i, n, visited):
    if curr_sum >= target:
        if curr_sum == target:
            res = "(" + " ".join(list(map(lambda x: str(x), temp.copy()))) + ")"
            if res not in visited:
                visited.add(res)
                result.append(res)
        return
    
    for j in range(i, n):
        new_sum = curr_sum + nums[j]
        temp.append(nums[j])
        dfs(nums, target, temp, result, new_sum, j, n, visited)
        temp.pop()