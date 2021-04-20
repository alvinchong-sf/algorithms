// 1207. Unique Number of Occurrences
// Share
// Given an array of integers arr, write a function that returns true if and only 
// if the number of occurrences of each value in the array is unique.

// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. 
// No two values have the same number of occurrences.

var uniqueOccurrences = function(arr) {
    // [1,2,2,1,1,3]
    // key = num in array ; value = counter
    // {
    //     1: 3
    //     2: 2
    //     3: 1
    // }
    // set = (3,2,1) => return true at end of iteration
    // we have a check, if num is in set already; return false
    // time o(n) | space o(n)
    
    let hash = {};
    let set = new Set();
    
    for(let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if(hash[num] === undefined) hash[num] = 0;
        hash[num]++;
    }
    
    let valuesArr = Object.values(hash);
    
    for(let i = 0; i < valuesArr.length; i++) {
        let num = valuesArr[i];
        if(!set.has(num)) {
            set.add(num)
        } else {
            return false;
        }
    }
    return true;
};