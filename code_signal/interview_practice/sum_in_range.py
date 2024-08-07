"""
You have an array of integers nums and an array queries, where queries[i] is a pair of indices (0-based). Find the sum of the elements in nums from the indices at queries[i][0] to queries[i][1] (inclusive) for each query, then add all of the sums for all the queries together. Return that number modulo 109 + 7.

Example
For nums = [3, 0, -2, 6, -3, 2] and queries = [[0, 2], [2, 5], [0, 5]], the output should be
solution(nums, queries) = 10.

The array of results for queries is [1, 3, 6], so the answer is 1 + 3 + 6 = 10.

Input/Output
[input] array.integer nums

An array of integers.

Guaranteed constraints:
1 ≤ nums.length ≤ 105,
-1000 ≤ nums[i] ≤ 1000.

[input] array.array.integer queries

An array containing sets of integers that represent the indices to query in the nums array.

Guaranteed constraints:
1 ≤ queries.length ≤ 3 · 105,
queries[i].length = 2,
0 ≤ queries[i][j] ≤ nums.length - 1,
queries[i][0] ≤ queries[i][1].

[output] integer

An integer that is the sum of all of the sums gotten from querying nums, taken modulo 109 + 7.
"""

def solution(nums, queries):
    n = len(nums)
    left = [0 for l in range(n)]
    right = [0 for r in range(n)]
    total = sum(nums)
    result = 0
    
    for i in range(1, n):
        j = n - i - 1
        if i != 0:
            left[i] = left[i - 1] + nums[i - 1]
        if j != n - 1:
            right[j] = right[j + 1] + nums[j + 1]
        
    for left_idx, right_idx in queries:
        result +=  (total - left[left_idx] - right[right_idx])
        
    return result % (pow(10, 9) + 7)
