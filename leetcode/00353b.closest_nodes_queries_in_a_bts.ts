/*
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
Time: O(n + m(log(n))) | Space: O(n + m)
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

function closestNodes(root: TreeNode | null, queries: number[]): number[][] {
    const result: number[][] = []
    const newRoot = balanceBST(root);
    for (const query of queries) {
        const temp: number[] = [0, Math.pow(10,7)];
        binarySearch(newRoot, query, temp);
        if (temp[0] === 0) temp[0] = -1;
        if (temp[1] === Math.pow(10, 7)) temp[1] = -1
        result.push(temp);
    }
    return result;
};

function balanceBST(root: TreeNode | null): TreeNode | null {
    const arr: number[] = [];
    inorder(root, arr);
    return buildTree(arr, 0, arr.length - 1);
}

function buildTree(arr: number[], left: number, right: number): TreeNode | null {
    if (left > right) return null;
    const mid = Math.floor((right - left) / 2) + left;
    const root = new TreeNode(arr[mid]);
    root.left = buildTree(arr, left, mid - 1);
    root.right = buildTree(arr, mid + 1, right);
    return root;
}

function inorder(root: TreeNode | null, arr: number[]): void {
    if (!root) return;
    inorder(root.left, arr);
    arr.push(root.val);
    inorder(root.right, arr);
}

function binarySearch(root: TreeNode | null, target: number, temp: number[]): void {
    if (!root) return;
    let node: TreeNode | null = root;
    while (node) {
        if (node.val === target) {
            temp[0] = node.val;
            temp[1] = node.val;
            return;
        } else if (node.val < target) {
            temp[0] = Math.max(temp[0], node.val);
            node = node.right
        } else if (node.val > target) {
            temp[1] = Math.min(temp[1], node.val);
            node = node.left
        }
    }
}