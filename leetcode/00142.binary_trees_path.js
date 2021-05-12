// 257. Binary Tree Paths

// Given the root of a binary tree, return all root-to-leaf paths in any order.

// A leaf is a node with no children.

// Input: root = [1,2,3,null,5]
// Output: ["1->2->5","1->3"]

var binaryTreePaths = function(root) {
    let resultArr = [];
    let tempArr = [root.val];
    
    const dfs = (root) => {
        
        if(!root) return;
        if(!root.left && !root.right) {
            const res = tempArr.join("->");
            resultArr.push(res);
        }
        
        if(root.left) {
            tempArr.push(root.left.val);
            dfs(root.left);
            tempArr.pop();
        }
        
        if(root.right) {
            tempArr.push(root.right.val);
            dfs(root.right);
            tempArr.pop();
        }
        return;
    }
    
    dfs(root)
    return resultArr;
};

// time o(n)
// space o(h)
// https://leetcode.com/problems/binary-tree-paths/