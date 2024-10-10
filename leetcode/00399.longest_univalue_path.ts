/*
687. Longest Univalue Path
Solved
Medium
Topics
Companies

Given the root of a binary tree, return the length of the longest path, where each node in the path has the same value. This path may or may not pass through the root.

The length of the path between two nodes is represented by the number of edges between them.

 

Example 1:

Input: root = [5,4,5,1,1,null,5]
Output: 2
Explanation: The shown image shows that the longest path of the same value (i.e. 5).

Example 2:

Input: root = [1,4,5,4,4,null,5]
Output: 2
Explanation: The shown image shows that the longest path of the same value (i.e. 4).

 

Constraints:

    The number of nodes in the tree is in the range [0, 104].
    -1000 <= Node.val <= 1000
    The depth of the tree will not exceed 1000.

https://leetcode.com/problems/longest-univalue-path/description/
Time: O(n) | Space: O(h)
*/

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function longestUnivaluePath(root: TreeNode | null): number {
    const dfs = (root: TreeNode | null, parentVal: number): number => {
        if (!root) return 0;
        const left = dfs(root.left, root.val);
        const right = dfs(root.right, root.val);
        longest = Math.max(longest, left + right);
        return root.val === parentVal ? 1 + Math.max(left, right) : 0;
    };
    let longest = 0;
    dfs(root, 2000);
    return longest;
};