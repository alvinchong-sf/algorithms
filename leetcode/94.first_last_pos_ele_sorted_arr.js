// 34. Find First and Last Position of Element in Sorted Array

// Given an array of integers nums sorted in ascending order, find the starting 
// and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// Follow up: Could you write an algorithm with O(log n) runtime complexity?

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]

var searchRange = function(nums, target) {
    let resultArr = [];
    for(let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if(num === target) resultArr.push(i);
    }
    const firstIdx = resultArr[0];
    const lastIdx = resultArr[resultArr.length - 1];
    if(!resultArr.length) return [-1, -1];
    return [firstIdx, lastIdx];
};

// time o(n) linear => looping thru entire array once and storing ALL indices
// space o(n) linear => using auxiliary array to store ALL indices

///////////////////////////////////////////////////////////////////////////////////

var searchRange = function(nums, target) {
    let resultArr = [-1, -1];
    
    let i = 0;
    let j = nums.length - 1;
    
    while(i <= j) {
        let midIdx = Math.floor((i + j) / 2);
        let midEle = nums[midIdx];
        
        if(midEle > target) {
            j = midIdx - 1;
        } else if (midEle < target) {
            i = midIdx + 1;
        } else {
            let left = midIdx - 1;
            let right = midIdx + 1;
            while(nums[left] === target && left >= 0) {
                left--;
            }
            resultArr[0] = left + 1;
            while(nums[right] === target && right < nums.length) {
                right++;
            }
            resultArr[1] = right - 1;
            return resultArr;
        }
    }
    return resultArr;
};

// time o(n) => best case is 0(1) => some case is o(log(n)) => worst case is o(n) linear
// space o(1) => resultArr does not grow with input

//////////////////////////////////////////////////////////////////////////////////

