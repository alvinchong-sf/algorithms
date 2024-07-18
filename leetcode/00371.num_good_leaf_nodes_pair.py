"""
1530. Number of Good Leaf Nodes Pairs
You are given the root of a binary tree and an integer distance. A pair of two different leaf 
nodes of a binary tree is said to be good if the length of the shortest path between them is 
less than or equal to distance. Return the number of good leaf node pairs in the tree.

Example 1:
Input: root = [1,2,3,null,4], distance = 3
Output: 1
Explanation: The leaf nodes of the tree are 3 and 4 and the length of the shortest path between them is 3. This is the only good pair.

Example 2:
Input: root = [1,2,3,4,5,6,7], distance = 3
Output: 2
Explanation: The good pairs are [4,5] and [6,7] with shortest path = 2. The pair [4,6] is not good because the length of ther shortest path between them is 4.

Example 3:
Input: root = [7,1,4,6,null,5,3,null,null,null,null,null,2], distance = 3
Output: 1
Explanation: The only good pair is [2,5].

Constraints:
    The number of nodes in the tree is in the range [1, 210].
    1 <= Node.val <= 100
    1 <= distance <= 10

https://leetcode.com/problems/number-of-good-leaf-nodes-pairs/
Time: O(n * L) where L is the number of leaf nodes
Space: O(L)
"""
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    good_pairs = 0
    def countPairs(self, root: TreeNode, distance: int) -> int:
        self.dfs(root, distance)
        return self.good_pairs
        
    def dfs(self, root, distance):
        if root is None: return []
        if root.left is None and root.right is None:
            return [1]
        left, right = [], []
        if root.left:
            left = self.dfs(root.left, distance)        
        if root.right:
            right = self.dfs(root.right, distance)
        for dist1 in left:
            for dist2 in right:
                if dist1 + dist2 <= distance:
                    self.good_pairs += 1
        new_arr = []
        for d1 in left:
            new_arr.append(d1 + 1)
        for d2 in right:
            new_arr.append(d2 + 1)
        return new_arr