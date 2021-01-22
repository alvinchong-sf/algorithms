var majorityElement = function(nums) {
    let hash = {};
    
    nums.forEach((num) => {
        if(hash[num] === undefined) hash[num] = 0;
        hash[num]++;
    })
    
    let values = Object.values(hash);
    let majority = Math.max(...values);
    
    for(const [k, v] of Object.entries(hash)) {
        if(v === majority) return k;
    }
    
};

// time o(n)
// space o(n)

// https://leetcode.com/problems/majority-element/