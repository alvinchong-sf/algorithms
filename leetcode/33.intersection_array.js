// 349. Intersection of Two Arrays
// Given two arrays, write a function to compute their intersection.

// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]

// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]

var intersection = function(nums1, nums2) {
    // create an empty arr to store the intersection
    // maybe create a hash map to store all unique values from one of the arrays
    // iterate the next array and check for inclusion, if include push to empty arr
    // return empty arr
    
    let result = [];
    let hash = {};
    
    nums1.forEach((num) => {
        if(hash[num] === undefined) hash[num] = true;
    })
    
    nums2.forEach((num) => {
        if(hash[num]) {
            hash[num] = false;
            result.push(num)
        }
    })
    
    return result;
};

// time: o(n)
// space: o(n)
// https://leetcode.com/problems/intersection-of-two-arrays/