/*
297. Serialize and Deserialize Binary Tree
Serialization is the process of converting a data structure or object into a sequence of bits 
so that it can be stored in a file or memory buffer, or transmitted across a network connection 
link to be reconstructed later in the same or another computer environment.
Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how 
your serialization/deserialization algorithm should work. You just need to ensure that a binary 
tree can be serialized to a string and this string can be deserialized to the original tree 
structure. Clarification: The input/output format is the same as how LeetCode serializes a binary 
tree. You do not necessarily need to follow this format, so please be creative and come up with 
different approaches yourself.

Example 1:
Input: root = [1,2,3,null,null,4,5]
Output: [1,2,3,null,null,4,5]

Example 2:
Input: root = []
Output: []

Constraints:
    The number of nodes in the tree is in the range [0, 104].
    -1000 <= Node.val <= 1000

https://leetcode.com/problems/serialize-and-deserialize-binary-tree/description/
Time: O(n) | Space: O(n)
*/

/**
 * Definition for a binary tree node.
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

function serialize(root: TreeNode | null): string {
    if (!root) return "";
    const queue: (TreeNode | null)[] = [root];
    const result: (number | null)[] = [];

    while (queue.length) {
        const node = queue.shift();
        if (node) {
            queue.push(node.left);
            queue.push(node.right);
            result.push(node.val)
        } else {
            result.push(null)
        }
    }

    while (result[result.length - 1] === null) result.pop();
    return JSON.stringify(result) as string;
};

function deserialize(data: string): TreeNode | null {
    if (!data) return null;
    const arr: (number | null)[] = JSON.parse(data);
    let i = 1;
    const root = new TreeNode(arr[0] as number);
    const queue: (TreeNode | null)[] = [root];

    while (i < arr.length && queue.length) {
        const node = queue.shift() as TreeNode;
        if (arr[i] !== null) {
            node.left = new TreeNode(arr[i] as number);
            queue.push(node.left)
        }
        i++;

        if (i < arr.length && arr[i] !== null) {
            node.right = new TreeNode(arr[i] as number);
            queue.push(node.right)
        }
        i++;
    }
    return root;
};