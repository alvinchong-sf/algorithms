"""
2096. Step-By-Step Directions From a Binary Tree Node to Another
You are given the root of a binary tree with n nodes. Each node is uniquely assigned a value 
from 1 to n. You are also given an integer startValue representing the value of the start node s, 
and a different integer destValue representing the value of the destination node t.
Find the shortest path starting from node s and ending at node t. Generate step-by-step directions 
of such path as a string consisting of only the uppercase letters 'L', 'R', and 'U'. Each letter 
indicates a specific direction:
    'L' means to go from a node to its left child node.
    'R' means to go from a node to its right child node.
    'U' means to go from a node to its parent node.
Return the step-by-step directions of the shortest path from node s to node t.

Example 1:
Input: root = [5,1,2,3,null,6,4], startValue = 3, destValue = 6
Output: "UURL"
Explanation: The shortest path is: 3 → 1 → 5 → 2 → 6.

Example 2:
Input: root = [2,1], startValue = 2, destValue = 1
Output: "L"
Explanation: The shortest path is: 2 → 1.

Constraints:
    The number of nodes in the tree is n.
    2 <= n <= 105
    1 <= Node.val <= n
    All the values in the tree are unique.
    1 <= startValue, destValue <= n
    startValue != destValue

https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/description/
"""
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def getDirections(self, root: Optional[TreeNode], startValue: int, destValue: int) -> str:
        res = self.lca(root, startValue, destValue)
        if res == "":
            start_node = self.find_target(root, startValue)
            dest_node = self.find_target(root, destValue)
            if start_node is not None and dest_node is not None:
                _, num = self.get_height(dest_node, startValue, 0)
                return num * "U"
        else:
            return res

    def lca(self, root: Optional[TreeNode], startValue: int, destValue: int) -> str:
        if root is None: return ""
        left_val, left_str = self.dfs(root.left, startValue, destValue, ["L"])
        right_val, right_str = self.dfs(root.right, startValue, destValue, ["R"])
        if root.val == startValue and left_val == destValue:
            return left_str
        if root.val == startValue and right_val == destValue:
            return right_str
        if left_val == startValue and right_val == destValue:
            return "U" * len(left_str) + right_str
        if right_val == startValue and left_val == destValue:
            return "U" * len(right_str) + left_str
        
        if left_str == "":
            return self.lca(root.right, startValue, destValue)
        if right_str == "":
            return self.lca(root.left, startValue, destValue)
        return ""
        
    def dfs(self, root, startValue, destValue, temp):
        if root is None: return (0, "")
        if root.val == startValue or root.val == destValue:
            return (root.val, "".join(temp))
        
        left = right = 0
        left_str, right_str = "", ""
        if root.left:
            temp.append("L")
            left, left_str = self.dfs(root.left, startValue, destValue, temp)
            temp.pop()
        
        if root.right:
            temp.append("R")
            right, right_str = self.dfs(root.right, startValue, destValue, temp)
            temp.pop()

        return (left or right, left_str + right_str)

    def get_height(self, root, target_val, height):
        if root is None: return (False, 0)
        if root.val == target_val:
            return (True, height)
        left, l_height = self.get_height(root.left, target_val, height + 1)
        right, r_height = self.get_height(root.right, target_val, height + 1)
        if left:
            return (True, l_height)
        if right:
            return (True, r_height)
        else:
            return (False, 0)

    def find_target(self, root, target_val):
        if root is None: return None
        if root.val == target_val:
            return root
        left = self.find_target(root.left, target_val)
        right = self.find_target(root.right, target_val)
        return left or right