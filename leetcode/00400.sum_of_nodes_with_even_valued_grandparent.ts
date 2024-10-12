/*
1315. Sum of Nodes with Even-Valued Grandparent
Given the root of a binary tree, return the sum of values of nodes with an even-valued 
grandparent. If there are no nodes with an even-valued grandparent, return 0.
A grandparent of a node is the parent of its parent if it exists.

Example 1:
Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
Output: 18
Explanation: The red nodes are the nodes with even-value grandparent while the blue nodes are the even-value grandparents.

Example 2:
Input: root = [1]
Output: 0

Constraints:
    The number of nodes in the tree is in the range [1, 104].
    1 <= Node.val <= 100

https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/description/
*/

class TreeNode {
    constructor(
        public val: number = 0, 
        public left: TreeNode | null = null, 
        public right: TreeNode | null = null,
    ) {}
}

function sumEvenGrandparent(root: TreeNode | null): number {
    const result: [number] = [0];
    dfs(root, result);
    return result[0];
};

function dfs(root: TreeNode | null, result: [number]): void {
    if (!root) return;
    if (root.val % 2 === 0) {
        if (root.left) {
            if (root.left.left) result[0] += root.left.left.val;
            if (root.left.right) result[0] += root.left.right.val;
        }
        if (root.right) {
            if (root.right.left) result[0] += root.right.left.val;
            if (root.right.right) result[0] += root.right.right.val;
        }
    }
    dfs(root.left, result);
    dfs(root.right, result);
}