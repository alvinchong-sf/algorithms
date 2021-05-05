// 872. Leaf-Similar Trees

// Consider all the leaves of a binary tree, from left to right order, the 
// values of those leaves form a leaf value sequence.

// dfs
var leafSimilar = function(root1, root2) {
    let resultArr = [];
    
    const dfs1 = (root) => {
        if(!root) return null;
        
        if(!root.left && !root.right) {
            resultArr.push(root.val);
        }
        
        if(root.left) dfs1(root.left);
        if(root.right) dfs1(root.right);
    }
    
    const dfs2 = (root) => {
        if(!root) return null;
        
        if(!root.left && !root.right) {
            if(root.val === resultArr[resultArr.length - 1]) {
                resultArr.pop();   
            } else {
                resultArr.push(root.val);
            }
        }
        
        if(root.right) dfs2(root.right);
        if(root.left) dfs2(root.left);
    }
    
    dfs1(root1);
    dfs2(root2);

    return !resultArr.length ? true : false;
};

// time o(n + m) n is root1 and m is root2
// space o(d + h + j) d is height of roo1 and h is height of root2 and j is combine leaf nodes of root1 and roo2
// https://leetcode.com/problems/leaf-similar-trees/