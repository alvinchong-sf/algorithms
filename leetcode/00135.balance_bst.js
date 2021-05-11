// 1382. Balance a Binary Search Tree

// same node values.

// A binary search tree is balanced if and only if the depth of the two subtrees 
// of every node never differ by more than 1.

// If there is more than one answer, return any of them.

var balanceBST = function(root) {
    let arr = [];
    inorder(root, arr);
    
    const bst = (arr, left = 0, right = arr.length -1) => {
        if(left > right) return null;
        let midIdx = Math.floor((left + right) / 2);
        let midEle = arr[midIdx];
        
        const newNode = new TreeNode(midEle);
        newNode.left = bst(arr, left, midIdx - 1);
        newNode.right = bst(arr, midIdx + 1, right);
        
        return newNode;
    }
    
    return bst(arr);
};

const inorder = (root, arr) => {
    if(!root) return;
    inorder(root.left, arr);
    arr.push(root.val);
    inorder(root.right, arr);
}

// time o(n)
// space o(n)
// https://leetcode.com/problems/balance-a-binary-search-tree/