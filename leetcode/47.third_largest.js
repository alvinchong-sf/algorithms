// 414. Third Maximum Number

// Given integer array nums, return the third maximum number in this array. 
// If the third maximum does not exist, return the maximum number.

// Follow up: Can you find an O(n) solution?

var thirdMax = function(nums) {
    if(nums.length < 3) return Math.max(...nums);
    let set = new Set(nums);
    let arrFromSet = [...set];
    if(arrFromSet.length < 3) return Math.max(...arrFromSet);
    let hash = {};
    
    for(let i = 0; i < arrFromSet.length; i++) {
        let num = arrFromSet[i];
        if(hash[num] === undefined) hash[num] = i;
    }
    
    for(let i = 1; i <= 3; i++) {
        if(i === 3) return Math.max(...arrFromSet);
        let val = Math.max(...arrFromSet);
        arrFromSet[hash[val]] = -Infinity;
    }
};

// time o(4n) => o(n)
// space o(3n) => o(n)
// https://leetcode.com/problems/third-maximum-number/