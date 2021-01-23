var findMaxConsecutiveOnes = function(nums) {
    let maxConsecutives = 0;
    let currConsecutives = 0;
    
    nums.forEach((num) => {
        if(num === 1) {
            currConsecutives++;
            if(currConsecutives > maxConsecutives) maxConsecutives = currConsecutives
        } else {
            currConsecutives = 0;
        }
    })
    return maxConsecutives;
};

// time: o(n);
// space: o(1);
// https://leetcode.com/problems/max-consecutive-ones/