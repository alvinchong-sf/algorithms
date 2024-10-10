/*
559. Maximum Depth of N-ary Tree

Given a n-ary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root 
node down to the farthest leaf node.

Nary-Tree input serialization is represented in their level order traversal, 
each group of children is separated by the null value (See examples).

Time: O(n) | Space: O(h)
https://leetcode.com/problems/maximum-depth-of-n-ary-tree/
*/


function maxDepth(root) {
    if (!root) return 0;
    let maxLevel = 0;
    for (const child of root.children) {
        maxLevel = Math.max(maxDepth(child), maxLevel);
    }
    return maxLevel + 1;
}