// 1305. All Elements in Two Binary Search Trees

// Given two binary search trees root1 and root2.

// Return a list containing all the integers from both trees sorted in 
// ascending order.

var getAllElements = function(root1, root2) {
    let arr1 = [];
    let arr2 = [];
    
    inorder(root1, arr1);
    inorder(root2, arr2);
    
    let finalArr = [];
    
    let i = 0;
    let j = 0;
    
    while(i < arr1.length && j < arr2.length) {
        let num1 = arr1[i];
        let num2 = arr2[j];
        
        if(num1 <= num2) {
            finalArr.push(num1)
            i++
        } else {
            finalArr.push(num2)
            j++;
        }
    }
    
    return finalArr.concat(arr1.slice(i)).concat(arr2.slice(j));
};

const inorder = (root, arr) => {
    if(!root) return null;
    
    inorder(root.left, arr);
    arr.push(root.val);
    inorder(root.right, arr);
}

// time o(n + m); n is root1; m is root2
// space o(n + m)
// https://leetcode.com/problems/all-elements-in-two-binary-search-trees/