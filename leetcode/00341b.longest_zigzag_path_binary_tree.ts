/*
1372. Longest ZigZag Path in a Binary Tree
You are given the root of a binary tree.
A ZigZag path for a binary tree is defined as follow:
    Choose any node in the binary tree and a direction (right or left).
    If the current direction is right, move to the right child of the current node; otherwise, move to the left child.
    Change the direction from right to left or from left to right.
    Repeat the second and third steps until you can't move in the tree.

Zigzag length is defined as the number of nodes visited - 1. (A single node has a length of 0).
Return the longest ZigZag path contained in that tree.

Example 1:
Input: root = [1,null,1,1,1,null,null,1,1,null,1,null,null,null,1]
Output: 3
Explanation: Longest ZigZag path in blue nodes (right -> left -> right).

Example 2:
Input: root = [1,1,1,null,1,null,null,1,1,null,1]
Output: 4
Explanation: Longest ZigZag path in blue nodes (left -> right -> left -> right).

Example 3:
Input: root = [1]
Output: 0

Constraints:
    The number of nodes in the tree is in the range [1, 5 * 104].
    1 <= Node.val <= 100
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

function longestZigZag(root: TreeNode | null): number {
    const result: [number] = [0];
    dfs(root, "", result);
    return result[0];
};

function dfs(root: TreeNode | null, dir: string, result: [number]): number {
    if (!root) return 0;
    const left = dfs(root.left, "left", result);
    const right = dfs(root.right, "right", result);
    let currLongest = 0;
    if (dir === "left") currLongest = right + 1;
    if (dir === "right") currLongest = left + 1;
    result[0] = Math.max(result[0], currLongest);
    return currLongest;
}