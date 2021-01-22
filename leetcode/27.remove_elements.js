// Remove Element

// Given an array nums and a value val, remove all instances of that value in-place 
// and return the new length.

// Do not allocate extra space for another array, you must do this by modifying 
// the input array in-place with O(1) extra memory.

// The order of elements can be changed. It doesn't matter what you leave beyond 
// the new length.

var removeElement = function(nums, val) {
    let length = nums.length;
    for(let i = 0; i < length; i++) {
        let num = nums[i];
        if(num === val) {
            nums.splice(i, 1);
            i--;
            length--;
        }
    }
    
    return nums.length;
};

// time: o(n)
// space: o(1)

// https://leetcode.com/problems/remove-element/