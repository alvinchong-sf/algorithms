// 1481. Least Number of Unique Integers after K Removals

// Given an array of integers arr and an integer k. Find the least number of 
// unique integers after removing exactly k elements.

 

// Example 1:
// Input: arr = [5,5,4], k = 1
// Output: 1
// Explanation: Remove the single 4, only 5 is left.

// Example 2:
// Input: arr = [4,3,1,1,3,3,2], k = 3
// Output: 2
// Explanation: Remove 4, 2 and either one of the two 1s or three 3s. 1 and 
// 3 will be left.

// n = number of unique values in arr
// m = maximum number in arr    
// time O(n log(n) + m) | O(m + log(n))
var findLeastNumOfUniqueInts = function(arr, k) {
    // step1:
    const buckets = {};
    for (const num of arr) {
        if (num in buckets) {
            buckets[num][1]++;
        } else {
            buckets[num] = [num, 1];
        }
    }

    // step2:
    const bucketsArr = Object.values(buckets);
    
    // step3:
    bucketsArr.sort((a, b) => b[1] - a[1]);
    
    // step4:
    for (let i = bucketsArr.length - 1; i >= 0; i--) {
        if (k === 0) break;
        let count = bucketsArr[i][1];
        while (count > 0 && k > 0) {
            k--; count--;
            if (count === 0) {
                bucketsArr.pop();
                break;
            }
        }
    }
    // console.log(bucketsArr)
    return bucketsArr.length;
    
};
