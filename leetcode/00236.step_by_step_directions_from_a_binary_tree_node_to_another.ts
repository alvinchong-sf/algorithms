// 2096. Step-By-Step Directions From a Binary Tree Node to Another

// You are given the root of a binary tree with n nodes. Each node is uniquely 
// assigned a value from 1 to n. You are also given an integer startValue 
// representing the value of the start node s, and a different integer destValue 
// representing the value of the destination node t.

// Find the shortest path starting from node s and ending at node t. Generate 
// step-by-step directions of such path as a string consisting of only the 
// uppercase letters 'L', 'R', and 'U'. Each letter indicates a specific direction:

// 'L' means to go from a node to its left child node.
// 'R' means to go from a node to its right child node.
// 'U' means to go from a node to its parent node.
// Return the step-by-step directions of the shortest path from node s to node t.

 

// Example 1:
// Input: root = [5,1,2,3,null,6,4], startValue = 3, destValue = 6
// Output: "UURL"
// Explanation: The shortest path is: 3 → 1 → 5 → 2 → 6.

// Example 2:
// Input: root = [2,1], startValue = 2, destValue = 1
// Output: "L"
// Explanation: The shortest path is: 2 → 1.
 

// Constraints:
// The number of nodes in the tree is n.
// 2 <= n <= 105
// 1 <= Node.val <= n
// All the values in the tree are unique.
// 1 <= startValue, destValue <= n
// startValue != destValue
// https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/

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

function getDirections(root: TreeNode | null, startValue: number, destValue: number): string {
    enum Direction {
        L = "L",
        R = "R",
        U = "U",
    }
    const tempArr: string[] = [];
    const paths = { left: "", right: ""};

    dfs(root, tempArr, startValue, destValue, Direction, paths);

    let idx = 0;
    while (paths.left[idx] === paths.right[idx]) {
        idx++;
    }

    const leftSlice = paths.left.slice(idx).split("").map((_) => Direction.U).join("");
    const rightSlice = paths.right.slice(idx);

    return leftSlice + rightSlice;
};

function dfs(
    root: TreeNode | null,
    tempArr: string[],
    startValue: number,
    destValue: number,
    Direction,
    paths: { left: string, right: string },
): void {
    if (!root) return;
    
    if (root.val === startValue) {
        paths.left = tempArr.slice().join("");
    }

    if (root.val === destValue) {
        paths.right = tempArr.slice().join("");
    }
    
    if (root.left) {
        tempArr.push(Direction.L);
        dfs(root.left, tempArr, startValue, destValue, Direction, paths);
        tempArr.pop();
    }

    if (root.right) {
        tempArr.push(Direction.R);
        dfs(root.right, tempArr, startValue, destValue, Direction, paths);
        tempArr.pop();
    }
}