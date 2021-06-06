// 75. Sort Colors

// Given an array nums with n objects colored red, white, or blue, sort them in-place 
// so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

// Example 1:
// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

// time o(n) | space o(1)
// 2 pass solution
var sortColors = function(nums) {
    const order = [0,1,2]
    
    let firstIdx = 0;
    let lastIdx = nums.length - 1;
    
    for(let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if(num === order[0]) {
            swap(nums, i, firstIdx);
            firstIdx++;
        }
    }
    
    for(let i = nums.length - 1; i >= 0; i--) {
        let num = nums[i];
        if(num === order[2]) {
            swap(nums, i, lastIdx);
            lastIdx--
        }
    }
    
    return nums;
};

const swap = (array, i , j) => {
    [ array[i], array[j] ] = [ array[j], array[i] ];
}

// 1 pass solution
// time o(n) | space o(1)
var sortColors = function(nums) {
    let order = [0,1,2];
    
    let firstIdx = 0;
    let secondIdx = 0;
    let thirdIdx = nums.length - 1;
    
    while(secondIdx <= thirdIdx) {
        if(nums[secondIdx] === order[0]) {
            swap(nums, firstIdx, secondIdx);
            firstIdx++; secondIdx++;
        } else if (nums[secondIdx] === order[1]) {
            secondIdx++;
        } else if (nums[secondIdx] === order[2]) {
            swap(nums, secondIdx, thirdIdx);
            thirdIdx--;
        }
    }
};

const swap = (array, i , j) => {
    [ array[i], array[j] ] = [ array[j], array[i] ];
}

// https://leetcode.com/problems/sort-colors/submissions/