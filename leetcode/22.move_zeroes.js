// Move Zeroes

// Given an array nums, write a function to move all 0's to the end of it while 
// maintaining the relative order of the non-zero elements.

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]

var moveZeroes = function(nums) {
    
    let maxLength = nums.length;
    
    for(let i = 0; i < maxLength; i++) {
        let num = nums[i];
        if(num === 0) {
            nums.splice(i, 1);
            nums.push(0);
            i--;
            maxLength--
        }
    }
    return nums;
};

// time: o(n)
// https://leetcode.com/problems/move-zeroes/