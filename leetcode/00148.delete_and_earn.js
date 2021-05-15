// 740. Delete and Earn

// Given an array nums of integers, you can perform operations on the array.

// In each operation, you pick any nums[i] and delete it to earn nums[i] points. 
// After, you must delete every element equal to nums[i] - 1 or nums[i] + 1.

// You start with 0 points. Return the maximum number of points you can earn by 
// applying such operations.

// Input: nums = [3,4,2]
// Output: 6
// Explanation: Delete 4 to earn 4 points, consequently 3 is also deleted.
// Then, delete 2 to earn 2 points.
// 6 total points are earned.

var deleteAndEarn = function(nums) {
                                              
    let maxNum = Math.max(...nums);          
    let table = new Array(maxNum + 1).fill(0);  
                                             
    for(let i = 0; i < nums.length; i++) {    
        let num = nums[i];                    
        table[num] += num;
    }
    
    let evenIdxSum = 0;     
    let oddIdxSum = 0;                         
    
    for(let i = 1; i < table.length; i++) { 
        if(i % 2 === 0) {
            evenIdxSum = Math.max(table[i] + evenIdxSum, oddIdxSum);
        } else {
            oddIdxSum = Math.max(table[i] + oddIdxSum, evenIdxSum);
        }
    }
    
    return Math.max(evenIdxSum, oddIdxSum);
};

// time o(n) | space o(n)
// https://leetcode.com/problems/delete-and-earn/

