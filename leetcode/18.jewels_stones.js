// Jewels and Stones

// You're given strings jewels representing the types of stones that are jewels,
//  and stones representing the stones you have. Each character in stones is a 
//  type of stone you have. You want to know how many of the stones you have 
//  are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone 
// from "A".

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3

var numJewelsInStones = function(jewels, stones) {
    
    let newSet = new Set();
    let count = 0;
    
    for(let i = 0; i < jewels.length; i++) {
        let jewel = jewels[i];
        if(!newSet.has(jewel)) {
            newSet.add(jewel)
        }
    }
    
    for(let j = 0; j < stones.length; j++) {
        let jewel = stones[j];
        if(newSet.has(jewel)) {
            count++
        }
    }
    return count;
};

// time: o(n)

// https://leetcode.com/problems/jewels-and-stones/

