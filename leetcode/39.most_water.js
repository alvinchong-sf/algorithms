var maxArea = function(height) {
    let maxArea = -Infinity;
    let i = 0;
    let j = height.length - 1;
    
    while(i < j) {
        let h1 = height[i];
        let h2 = height[j];
        let shortest = Math.min(h1, h2);
        let length = j - i;
        let currentArea = shortest * length;
        maxArea = Math.max(maxArea, currentArea);
        if(h1 <= h2) {
            i++
        } else {
            j--;
        }
    }
    return maxArea;
};

// time o(n) 1 iteration, 2 pointers;
// space o(1) only storing integer
// https://leetcode.com/problems/container-with-most-water/