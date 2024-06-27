"""
2476. Closest Nodes Queries in a Binary Search Tree
You are given the root of a binary search tree and an array queries of size n consisting of 
positive integers. Find a 2D array answer of size n where answer[i] = [mini, maxi]:
mini is the largest value in the tree that is smaller than or equal to queries[i]. 
maxi is the smallest value in the tree that is greater than or equal to queries[i]. 
If a such value does not exist, add -1 instead. Return the array answer.

Example 1:
Input: root = [6,2,13,1,4,9,15,null,null,null,null,null,null,14], queries = [2,5,16]
Output: [[2,2],[4,6],[15,-1]]
Explanation: We answer the queries in the following way:
- The largest number that is smaller or equal than 2 in the tree is 2, and the smallest number that is greater or equal than 2 is still 2. So the answer for the first query is [2,2].
- The largest number that is smaller or equal than 5 in the tree is 4, and the smallest number that is greater or equal than 5 is 6. So the answer for the second query is [4,6].
- The largest number that is smaller or equal than 16 in the tree is 15, and the smallest number that is greater or equal than 16 does not exist. So the answer for the third query is [15,-1].

Example 2:
Input: root = [4,null,9], queries = [3]
Output: [[-1,4]]
Explanation: The largest number that is smaller or equal to 3 in the tree does not exist, and the smallest number that is greater or equal to 3 is 4. So the answer for the query is [-1,4].

Constraints:
    The number of nodes in the tree is in the range [2, 105].
    1 <= Node.val <= 106
    n == queries.length
    1 <= n <= 105
    1 <= queries[i] <= 106

https://leetcode.com/problems/closest-nodes-queries-in-a-binary-search-tree/description/
Time: O(nlog(n) + m) | Space: O(n + m)
"""

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def closestNodes(self, root: Optional[TreeNode], queries: List[int]) -> List[List[int]]:
        n = len(queries)
        result = [[-1, -1] for _ in range(n)]
        new_queries = [[query, idx] for idx, query in enumerate(queries)]
        new_queries.sort(key=lambda x: x[0])
        inorders = self.inorder(root, [])
        inorders.append(-1)
        m = len(inorders)
        j = 0
        for query, i in new_queries:
            while j < m:
                prev = -1 if j - 1 < 0 else inorders[j - 1]
                if j == m - 1:
                    result[i][0] = prev
                    break
                elif query == inorders[j]:
                    result[i][0] = query
                    result[i][1] = query
                    break
                elif query < inorders[j]:
                    result[i][0] = prev
                    result[i][1] = inorders[j]
                    break
                j += 1
        return result

    def inorder(self, root, arr):
        if root is None: return arr
        self.inorder(root.left, arr)
        arr.append(root.val)
        self.inorder(root.right, arr)
        return arr
