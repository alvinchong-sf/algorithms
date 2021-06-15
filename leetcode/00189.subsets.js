// 78. Subsets

// Given an integer array nums of unique elements, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

// Example 1:
// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

var subsets = function(nums) {
    const resultArr = [[]];
    
    for(let i = 0; i < nums.length; i++) {
        const size = resultArr.length;
        const num = nums[i];
        for(let j = 0; j < size; j++) {
            const copyArr = resultArr[j].slice();
            copyArr.push(num);
            resultArr.push(copyArr);
        }
    }
    return resultArr;
};
// time o(n^2^n)
// space o(n^2^n)
// https://leetcode.com/problems/subsets/