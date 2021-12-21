// 12 / 11 / 21

// This problem was asked by Uber.

// Given an array of integers, return a new array such that each element at index 
// i of the new array is the product of all the numbers in the original array 
// except the one at i.

// For example, if our input was [1, 2, 3, 4, 5], the expected output would be 
// [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would 
// be [2, 3, 6].

// Follow-up: what if you can't use division?

const productOfAllOtherNums = (nums) => {
    const leftArr = new Array(nums.length).fill(1);
    const rightArr = new Array(nums.length).fill(1);
    const resultArr = new Array(nums.length);

    // leftArr
    for (let i = 1; i < nums.length; i++) {
        const num = nums[i - 1];
        const leftNum = leftArr[i - 1];
        leftArr[i] = num * leftNum;
    }

    // rightArr
    for (let j = nums.length - 2; j >= 0; j--) {
        const num = nums[j + 1];
        const rightNum = rightArr[j + 1];
        rightArr[j] = num * rightNum;
    }

    // result
    for (let k = 0; k < nums.length; k++) {
        resultArr[k] = leftArr[k] * rightArr[k];
    }

    return resultArr;
};

console.log(productOfAllOtherNums([1, 2, 3, 4, 5]));
console.log(productOfAllOtherNums([2, 3]));
console.log(productOfAllOtherNums([5]));

/*
nums =  [1, 2, 3, 4, 5]
                  j
left =  [1, 1, 2, 6, 24]
right = [1, 1, 1, 1, 1]
result = [x,x,x,x,x]
*/
