// Missing Number

// Given an array nums containing n distinct numbers in the range [0, n], return 
// the only number in the range that is missing from the array.

// Follow up: Could you implement a solution using only O(1) extra space 
// complexity and O(n) runtime complexity?

var missingNumber = function(nums) {
    let n = nums.length;
    let hash = {}
    for(let i = 0; i <= n; i++) {
        if(hash[i] === undefined) hash[i] = true;
    }
    
    nums.forEach((num) => {
        if(hash[num]) delete hash[num]
    })
    
    return Object.keys(hash)[0];
};

// time o(n)
// space o(n)
// https://leetcode.com/problems/missing-number/
