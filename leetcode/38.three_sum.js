// 15. 3Sum

// Given an array nums of n integers, are there elements a, b, c in nums 
// such that a + b + c = 0? Find all unique triplets in the array which gives 
// the sum of zero.

// Notice that the solution set must not contain duplicate triplets.

var threeSum = function(nums) {
    let result = [];
    let sorted = nums.sort((a, b) => a - b);
    
    for(let i = 0; i < sorted.length - 2; i++) {
        if (i > 0 && sorted[i] === sorted[i - 1]) continue;
        let current = sorted[i];
        let left = i + 1;
        let right = sorted.length - 1;
        while(left < right) {
            let sum = current + sorted[left] + sorted[right];
            if(sum === 0) {
                result.push([current, sorted[left], sorted[right]]);
                while(left < right && sorted[left] === sorted[left + 1]) left++;
                while(left < right && sorted[right] === sorted[right - 1]) right--;
                left++;
                right--;
            } else if(sum < 0) {
                left++;
            } else if(sum > 0) {
                right--;
            }
        }
    }
    return result;
};

