var twoSum = function(numbers, target) {
    let hash = {};
    
    for(let i = 0; i < numbers.length; i++) {
        let num = numbers[i];
        let res = target - num;
        if(hash[res] === undefined) {
            hash[num] = i
        } else {
            return [hash[res] + 1, i + 1];
        }
    }
};

// time o(n)
// space o(n)

// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/