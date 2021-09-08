// 42. Trapping Rain Water

// Given n non-negative integers representing an elevation map where the width 
// of each bar is 1, compute how much water it can trap after raining.

// Example 1:
// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by 
// array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water 
// (blue section) are being trapped.


// time o(n) | space o(1)
var trap = function(height) {
    let leftIdx = 0, 
        rightIdx = height.length - 1,
        maxLeft = height[leftIdx],
        maxRight = height[rightIdx],
        total = 0;
    
    while (leftIdx < rightIdx) {
        if (height[leftIdx] < height[rightIdx]) {
            leftIdx++;
            maxLeft = Math.max(maxLeft, height[leftIdx]);
            total += (maxLeft - height[leftIdx]);
        } else {
            rightIdx--;
            maxRight = Math.max(maxRight, height[rightIdx]);
            total += (maxRight - height[rightIdx]);
        }
    }
    
    return total;
};


// time o(n) | space o(n)
var trap = function(height) {
    const leftArr = [], rightArr = [];
    let maxLeft = -Infinity, maxRight = -Infinity, total = 0;
    
    for (let i = 0; i < height.length; i++) {
        const leftBar = height[i];
        maxLeft = Math.max(maxLeft, leftBar);
        const res = maxLeft - leftBar;
        leftArr.push(res);
    };
    
    for (let j = height.length - 1; j >= 0; j--) {
        const rightBar = height[j];
        maxRight = Math.max(maxRight, rightBar);
        const res = maxRight - rightBar;
        rightArr.unshift(res);
    };
    
    for (let k = 0; k < height.length; k++) {
        total += Math.min(leftArr[k], rightArr[k]);
    };
    
    return total;
};