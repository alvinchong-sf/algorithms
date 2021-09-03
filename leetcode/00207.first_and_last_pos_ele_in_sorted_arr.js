// 34. Find First and Last Position of Element in Sorted Array

// Given an array of integers nums sorted in ascending order, find the starting and 
// ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

// Example 2:
// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

var searchRange = function(nums, target) {
    let first = -1,
        second = -1;
    
    const binarySearch = (left, right) => {
        if (left > right) return;
        const midIdx = Math.floor((left + right) / 2),
              midVal = nums[midIdx];
        
        if (target === midVal) {
            // find start
                if (nums[midIdx - 1] !== target) {
                    first = midIdx;
                } else {
                    binarySearch(left, midIdx - 1);
                }
            
            // find end
                if (nums[midIdx + 1] !== target) {
                    second = midIdx;
                } else {
                    binarySearch(midIdx + 1, right);
                }
            
        } else if (target < midVal) {
            binarySearch(left, midIdx - 1);
        } else {
            binarySearch(midIdx + 1, right);
        }
    };
    
    binarySearch(0, nums.length - 1);
    return [first, second];
};

// time o(log(n)) | space o(log(n))
// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/