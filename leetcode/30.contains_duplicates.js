// Contains Duplicate

var containsDuplicate = function(nums) {
    let set = new Set();
    
    for(let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if(!set.has(num)) {
            set.add(num)
        } else {
            return true;
        }
    }
    return false;
};

// time o(n)
// space o(n)
// https://leetcode.com/problems/contains-duplicate/