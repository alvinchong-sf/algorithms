// make a hash map to keep track of "seen" elements
// set up a for loop iteration
// use the 'target - ele' trick to find corresponding element that adds up to target.
// eg. x + y = target, we have target and we have x; find y
// if y is not present in the hash, add it to the hash
// we will find the solution because the problem promises that there is exactly one solution

var twoSum = function(nums, target) {
    let hash = {}; 
    
    for(let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let res = target - num;
        let i2 = hash[res];
        if(i2 === undefined) {
            hash[num] = i;
        } else {
            return [i2, i];
        }
    }
};

// time: o(n) because no nested loop present

