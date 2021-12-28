// 12 / 21 / 21

// Good morning! Here's your coding interview problem for today.

// This problem was asked by Airbnb.

// Given a list of integers, write a function that returns the largest sum of 
// non-adjacent numbers. Numbers can be 0 or negative.

// For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. 
// [5, 1, 1, 5] should return 10, since we pick 5 and 5.

// Follow-up: Can you do this in O(N) time and constant space?

const largestSum = (integers) => {
    let evenIdxSum = 0, oddIdxSum = 0;

    for (let i = 0; i < integers.length; i++) {
        const integer = integers[i];
        if (i % 2 === 0) {
            evenIdxSum = Math.max(evenIdxSum + integer, oddIdxSum);
        } else {
            oddIdxSum = Math.max(oddIdxSum + integer, evenIdxSum);
        }
    }

    return Math.max(evenIdxSum, oddIdxSum);
};

const integers1 = [2, 4, 6, 2, 5],
      integers2 = [5, 1, 1, 5];

console.log(largestSum(integers1));
console.log(largestSum(integers2));

