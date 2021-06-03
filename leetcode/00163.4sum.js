var fourSum = function(nums, target) {
    nums.sort((a, b) => a - b);
    let resultArr = [];
    
    for(let i = 0; i < nums.length - 1; i++) {
        let num1 = nums[i];
        
        for(let j = i + 1; j < nums.length; j++) {
            let num2 = nums[j];
            let left = j + 1;
            let right = nums.length - 1;
            
            while(left < right) {
                let num3 = nums[left];
                let num4 = nums[right];
                let sum = num1 + num2 + num3 + num4;
                
                if(sum === target) {
                    resultArr.push([num1, num2, num3, num4]);
                    while(left < right && nums[left] === nums[left + 1]) left++;
                    while(left < right && nums[right] === nums[right - 1]) right--;
                    left++; right--;
                } else if (sum < target) {
                    left++;
                } else if ( sum > target) {
                    right--;
                }
            }
            while(j < nums.length - 1 && nums[j] === nums[j + 1]) j++;
        }
        while(i < nums.length - 1 && nums[i] === nums[i + 1]) i++;
    }
    return resultArr;
};

// time o(n^3) | space o(n^2)
// https://leetcode.com/problems/4sum/