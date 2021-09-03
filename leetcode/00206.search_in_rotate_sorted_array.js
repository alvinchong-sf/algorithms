// 33. Search in Rotated Sorted Array

// There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function, nums is rotated at an unknown pivot 
// index k (0 <= k < nums.length) such that the resulting array is [nums[k], 
// nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). 
// For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the rotation and an integer target, return the 
// index of target if it is in nums, or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.

 
// Example 1:
// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4

var search = function(nums, target) {
    let left = 0, right = nums.length - 1;
    
    while (left <= right) {
        const midIdx = Math.floor((left + right) / 2),
              midVal = nums[midIdx],
              leftVal = nums[left],
              rightVal = nums[right];
        
        if (target === midVal) {
            return midIdx;
        } else if (leftVal <= midVal) {
            if (target >= leftVal && target < midVal) {
                right = midIdx - 1;
            } else {
                left = midIdx + 1;
            }
        } else {
            if (target <= rightVal && target > midVal) {
                left = midIdx + 1;
            } else {
                right = midIdx - 1;
            }
        }
    };
    
    return -1;
};

// time o(log(n)) | space o(1)


var search = function(nums, target, left = 0, right = nums.length - 1) {
    if (left > right) return -1;
    
    const midIdx = Math.floor((left + right) / 2),
          midVal = nums[midIdx],
          leftVal = nums[left],
          rightVal = nums[right];
    
    if (target === midVal) {
        return midIdx;
    } else if (leftVal <= midVal) {
        if (target >= leftVal && target < midVal) {
            return search(nums, target, left, midIdx - 1);
        } else {
            return search(nums, target, midIdx + 1, right);
        }
    } else if (rightVal >= midVal) {
        if (target <= rightVal && target > midVal) {
            return search(nums, target, midIdx + 1, right);
        } else {
            return search(nums, target, left, midIdx - 1);
        }
    }
    return -1;
};

// time o(log(n)) | space o(log(n))