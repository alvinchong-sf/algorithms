"""
2196. Create Binary Tree From Descriptions
You are given a 2D integer array descriptions where descriptions[i] = [parenti, childi, isLefti] 
indicates that parenti is the parent of childi in a binary tree of unique values. Furthermore,
    If isLefti == 1, then childi is the left child of parenti.
    If isLefti == 0, then childi is the right child of parenti.
Construct the binary tree described by descriptions and return its root.
The test cases will be generated such that the binary tree is valid.

Example 1:
Input: descriptions = [[20,15,1],[20,17,0],[50,20,1],[50,80,0],[80,19,1]]
Output: [50,20,80,15,17,19]
Explanation: The root node is the node with value 50 since it has no parent.
The resulting binary tree is shown in the diagram.

Example 2:
Input: descriptions = [[1,2,1],[2,3,0],[3,4,1]]
Output: [1,2,null,null,3,4]
Explanation: The root node is the node with value 1 since it has no parent.
The resulting binary tree is shown in the diagram.

Constraints:
    1 <= descriptions.length <= 104
    descriptions[i].length == 3
    1 <= parenti, childi <= 105
    0 <= isLefti <= 1
    The binary tree described by descriptions is valid.

https://leetcode.com/problems/create-binary-tree-from-descriptions/description
Time: O(n) | Space: O(n)
"""
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def createBinaryTree(self, descriptions: List[List[int]]) -> Optional[TreeNode]:
        parent_hashmap = {}
        children_set = set()
        nodes = set()
        for parent, child, is_left in descriptions:
            nodes.add(parent)
            nodes.add(child)
            children_set.add(child)
            if parent not in parent_hashmap:
                parent_hashmap[parent] = [None, None]
            if is_left == 1:
                parent_hashmap[parent][0] = child
            else:
                parent_hashmap[parent][1] = child
        root_num = None
        for node in nodes:
            if node not in children_set:
                root_num = node
                break
        return self.build_tree(root_num, parent_hashmap, nodes)

    def build_tree(self, root_num, parent_hashmap, nodes):
        if root_num not in nodes:
            return None
        if root_num not in parent_hashmap:
            return TreeNode(root_num)
        root = TreeNode(root_num)
        left_num, right_num = parent_hashmap[root_num]
        root.left = self.build_tree(left_num, parent_hashmap, nodes)
        root.right = self.build_tree(right_num, parent_hashmap, nodes)
        return root
