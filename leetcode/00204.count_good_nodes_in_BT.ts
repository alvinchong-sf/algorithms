/*
1448. Count Good Nodes in Binary Tree

Given a binary tree root, a node X in the tree is named good if in the path 
from root to X there are no nodes with a value greater than X.

Return the number of good nodes in the binary tree.

Example 1:
Input: root = [3,1,4,3,null,1,5]
Output: 4
Explanation: Nodes in blue are good.
Root Node (3) is always a good node.
Node 4 -> (3,4) is the maximum value in the path starting from the root.
Node 5 -> (3,4,5) is the maximum value in the path
Node 3 -> (3,1,3) is the maximum value in the path.

Time: O(n) | Space O(h)
https://leetcode.com/problems/count-good-nodes-in-binary-tree/
*/

function goodNodes(root: TreeNode | null): number {
    if (!root) return 0;
    const dfs = (root: TreeNode | null, largestVal: number): void => {
        if (!root) return;
        if (root.val >= largestVal) result++;
        dfs(root.left, Math.max(largestVal, root.val));
        dfs(root.right, Math.max(largestVal, root.val));
    }
    let result = 0;
    dfs(root, root.val)
    return result;
};