// 162. Find Peak Element


// Given an integer array nums, find a peak element, and return its index. If 
// the array contains multiple peaks, return the index to any of the peaks.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: 2
// Explanation: 3 is a peak element and your function should return the index number 2.

// Example 2:

// Input: nums = [1,2,1,3,5,6,4]
// Output: 5
// Explanation: Your function can return either index number 1 where the peak 
// element is 2, or index number 5 where the peak element is 6.

var findPeakElement = function(nums) {
    // [1,2,1,3,5,6,4] length = 7
    // largest = 3 ; i = 3; left (i - 1) right = (i + 1) if yes return i
    // left = [1,2,1] ;right = [5,6,4]
    // binary search
    // get mid = nums[nums.length / 2]
    // get left = nums[mid - 1]
    // get right = nums[mid + 1]
    // if (left < mid < right) return i of mid
    // if not recursive call the function while diving left and right
    // if nothing found return 0?
    
    let midIdx = Math.floor(nums.length / 2);
    let midEle = nums[midIdx];
    let leftEle = nums[midIdx - 1] === undefined ? -Infinity : nums[midIdx - 1];
    let rightEle = nums[midIdx + 1] === undefined ? -Infinity : nums[midIdx + 1];
    if((midEle > leftEle) && (midEle > rightEle)) {
        return midIdx
    } else if(leftEle > midEle) {
        let leftArr = nums.slice(0, midIdx);
        return findPeakElement(leftArr);
    } else if (rightEle > midEle) {
        let rightArr = nums.slice(midIdx + 1);
        let result = findPeakElement(rightArr);
        return result + midIdx + 1;
    }
};

// time o(log(n))
// space o(n) recursive stack + storing arrays
// https://leetcode.com/problems/find-peak-element/