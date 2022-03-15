// 347. Top K Frequent Elements

// Given an integer array nums and an integer k, return the k most 
// frequent elements. You may return the answer in any order.

// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Example 2:
// Input: nums = [1], k = 1
// Output: [1]


// quick select | time o(n) | space o(n)
var topKFrequent = function(nums, k) {
    const buckets = placeNumsInBuckets(nums);
    
    let leftIdx = 0, 
        rightIdx = buckets.length - 1, 
        targetIdx = buckets.length - k;
    
    while (leftIdx <= rightIdx) {
        const randomIdx = randomIdxGenerator(leftIdx, rightIdx);
        const partitionIdx = partition(buckets, leftIdx, rightIdx, randomIdx);
        
        if (partitionIdx === targetIdx) {
            return buckets.slice(partitionIdx).map((bucket) => bucket[0]);
        } else if (partitionIdx < targetIdx) { // go left
            leftIdx = partitionIdx + 1;
        } else { // go right
            rightIdx = partitionIdx - 1;
        }
    }
    
};

const placeNumsInBuckets = (nums) => {
    const hash = {};
    
    for (const num of nums) {
        if (num in hash) {
            hash[num][1]++;
        } else {
            hash[num] = [num, 1];
        }
    }
    
    return Object.values(hash);
}

const partition = (buckets, leftIdx, rightIdx, randomIdx) => {
    const randomCountNum = buckets[randomIdx][1];
    swap(randomIdx, rightIdx, buckets);
    let j = leftIdx;
    for (let i = leftIdx; i < rightIdx; i++) {
        const bucket = buckets[i];
        const [num, count] = bucket;
        if (count < randomCountNum) {
            swap(i, j, buckets);
            j++;
        }
    }
    swap(j, rightIdx, buckets);
    return j;
}

const swap = (i, j, buckets) => {
    [ buckets[i], buckets[j] ] = [ buckets[j], buckets[i] ]
}

const randomIdxGenerator = (leftIdx, rightIdx) => {
    return Math.floor(Math.random() * (rightIdx - leftIdx + 1)) + leftIdx;
}





// brute force (n log(n))
var topKFrequent = function(nums, k) {
    const hash = {};
    
    for (const num of nums) {
        if (num in hash) {
            hash[num][1]++;
        } else {
            hash[num] = [num, 1]
        }
    }
    
    const buckets = Object.values(hash);
    buckets.sort((a, b) => b[1] - a[1]);
    
    const result = [];
    let i = 0;
    while (k > 0) {
        const num = buckets[i][0];
        result.push(num);
        i++; k--;
    };
    
    return result;
};