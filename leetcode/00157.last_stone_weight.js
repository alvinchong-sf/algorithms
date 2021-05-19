// 1046. Last Stone Weight

// We have a collection of stones, each stone has a positive integer weight.

// Each turn, we choose the two heaviest stones and smash them together.  
// Suppose the stones have weights x and y with x <= y.  The result of this smash is:

// If x == y, both stones are totally destroyed;
// If x != y, the stone of weight x is totally destroyed, and the stone of 
// weight y has new weight y-x.
// At the end, there is at most 1 stone left.  Return the weight of this 
// stone (or 0 if there are no stones left.)

var lastStoneWeight = function(stones) {
    
    if(stones.length === 1) return stones[0];
    
    stones.sort((a, b) => a - b);
    
    while(stones.length > 1) {
        let s1 = stones.pop();
        let s2 = stones.pop();
        
        let diff = Math.abs(s1 - s2);
        
        if(diff === 0) {
            continue;
        } else {
            stones.push(diff);
            stones.sort((a, b) => a - b)
        }
    }
    
    return stones.length > 0 ? stones[0] : 0;
};

// time o(n^2 log(n))
// space o(1)
// https://leetcode.com/problems/last-stone-weight/