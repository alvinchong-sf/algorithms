// Number of Good Pairs

// Given an array of integers nums.

// A pair (i,j) is called good if nums[i] == nums[j] and i < j.

// Return the number of good pairs.

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.


var numIdenticalPairs = function(nums) {
    let count = 0;
    
    for(let i = 0; i < nums.length - 1; i++) {
        let num1 = nums[i];
        for(let j = i + 1; j < nums.length; j++) {
            let num2 = nums[j]
            if (num1 === num2 && i < j) count++
        }
    }
    return count;
};

// time: o(n^2)