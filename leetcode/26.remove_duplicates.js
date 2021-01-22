// Remove Duplicates from Sorted Array

// Given a sorted array nums, remove the duplicates in-place such that each 
// element appears only once and returns the new length.

// Do not allocate extra space for another array, you must do this by modifying 
// the input array in-place with O(1) extra memory.

var removeDuplicates = function(nums) {
    
    let length = nums.length
    for(let i = 0; i < length - 1; i++) {
        let num = nums[i];
        let nextNum = nums[i + 1];
        if(num === nextNum) {
            nums.splice(i, 1);
            i--;
            length--;
        }
    }
    return nums.length;
};

// time: o(n)
// space: o(1)

// https://leetcode.com/problems/remove-duplicates-from-sorted-array/