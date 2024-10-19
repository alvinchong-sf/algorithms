/*
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
*/

interface Result {
    start: number;
    end: string[];
    final: string;
}

function getDirections(root: TreeNode | null, startValue: number, destValue: number): string {
    const ancestorNode = findLowestCommonAncestor(root, startValue, destValue);
    const result: Result = { start: 0, end: [], final: "" }
    findSteps(ancestorNode, startValue, destValue, 0, result);
    return "U".repeat(result.start) + result.final;
};

function findSteps(
    root: TreeNode | null, 
    startValue: number, 
    destValue: number, 
    level: number, 
    result: Result
): void {
    if (!root) return;
    if (root.val === startValue) result.start = level;
    if (root.val === destValue) result.final = result.end.slice().join("");

    if (root.left) {
        result.end.push("L");
        findSteps(root.left, startValue, destValue, level + 1, result);
        result.end.pop();
    }

    if (root.right) {
        result.end.push("R");
        findSteps(root.right, startValue, destValue, level + 1, result);
        result.end.pop();
    }
}

function findLowestCommonAncestor(root: TreeNode | null, p: number, q: number): TreeNode | null {
    if (!root) return null;
    if (root.val ===  p || root.val === q) return root;
    const left = findLowestCommonAncestor(root.left, p, q);
    const right =  findLowestCommonAncestor(root.right, p, q);
    return (left && right) ? root: (left || right);
}