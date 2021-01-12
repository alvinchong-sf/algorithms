// View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

const { TreeNode } = require("./bst");


function sortedArrayToBST(nums) {
    if(!nums.length) return null;

    let midIdx = Math.floor(nums.length / 2);
    let midPos = nums[midIdx];
    let root = new TreeNode(midPos);

    let leftArr = nums.slice(0, midIdx);
    let rightArr = nums.slice(midIdx + 1);

    root.left = sortedArrayToBST(leftArr);
    root.right = sortedArrayToBST(rightArr);

    return root;

}