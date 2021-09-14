// 90. Subsets II

// Given an integer array nums that may contain duplicates, return all possible 
// subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

// Example 1:
// Input: nums = [1,2,2]
// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]

var subsetsWithDup = function(nums) {
    const set = new Set();
    const newArr = [[]];
    
    for(let i = 0; i < nums.length; i++) {
        const size = newArr.length;
        const num = nums[i];
        for(let j = 0; j < size; j++) {
            const copyArr = newArr[j].slice();
            copyArr.push(num);
            copyArr.sort((a, b) => a - b);
            const str = copyArr.join("");
            if(set.has(str)) continue;
            set.add(str);
            newArr.push(copyArr);
        }
    }
    return newArr;
};

// time o(n * (2^n * n log(n))) | space o(2^n)
// https://leetcode.com/problems/subsets-ii/