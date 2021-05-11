var bstFromPreorder = function(preorder) {
    if(!preorder.length) return null;
    let rootVal = preorder[0];
    const newNode = new TreeNode(rootVal);
    let rightIdx = Infinity;
    
    for(let i = 0; i < preorder.length; i++) {
        let num = preorder[i];
        if(num > rootVal) {
            rightIdx = i;
            break;
        }
    }
    
    let leftArr = preorder.slice(1, rightIdx);
    let rightArr = preorder.slice(rightIdx);
    newNode.left = bstFromPreorder(leftArr);
    newNode.right = bstFromPreorder(rightArr);
    return newNode;
};

// time o(n^2)
// space o(n)
// https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/