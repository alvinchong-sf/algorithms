// Given a zero-based permutation nums (0-indexed), build an array ans of the same 
// length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.

// A zero-based permutation nums is an array of distinct integers from 0 to 
// nums.length - 1 (inclusive).

// Example 1:
// Input: nums = [0,2,1,5,3,4]
// Output: [0,1,2,4,5,3]
// Explanation: The array ans is built as follows: 
// ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]
//     = [nums[0], nums[2], nums[1], nums[5], nums[3], nums[4]]
//     = [0,1,2,4,5,3]



// time o(n) | space o(1)
var buildArray = function(nums) {
    
    const size = nums.length;
    
    for (let i = 0; i < nums.length; i++) {
        const temp = nums[i],
              res = nums[temp];
        nums[i] = nums[i] + (res % size) * size;
    }
    
    for (let i = 0; i < nums.length; i++) {
        nums[i] = Math.floor(nums[i] / size);
    }
    
    return nums;
};


// time o(n) | space o(n)
var buildArray = function(nums) {
    const ans = [];
    
    for (let i = 0; i < nums.length; i++) {
        const temp = nums[i];
        const res = nums[temp];
        ans.push(res);
    }
    
    return ans;
};