// Pancake Sort
// Given an array of integers arr:

// Write a function flip(arr, k) that reverses the order of the first k elements in the array arr.
// Write a function pancakeSort(arr) that sorts and returns the input array. You are 
// allowed to use only the function flip you wrote in the first step in order to make 
// changes in the array.
// Example:

// input:  arr = [1, 5, 4, 3, 2]

// output: [1, 2, 3, 4, 5] # to clarify, this is pancakeSort's output
// Analyze the time and space complexities of your solution.

// Note: it’s called pancake sort because it resembles sorting pancakes on a plate 
// with a spatula, where you can only use the spatula to flip some of the top 
// pancakes in the plate. To read more about the problem, see the Pancake Sorting 
// Wikipedia page.

function pancakeSort(arr) {
   for (let i = arr.length - 1; i >= 0; i--) {
     const resIdx = largestIdx(arr, i);
     flip(arr, resIdx);
     flip(arr, i);
   };
  return arr;
}

const largestIdx = (arr, n) => {
  let largest = -Infinity, largestIdx = null;
  
  for (let i = 0; i <= n; i++) {
    const num = arr[i];
    if (num > largest) {
      largest = num;
      largestIdx = i
    }
  }
  
  return largestIdx;
}

const flip = (arr, k) => {
  let i = 0, j = k;
  
  while ( i < j) {
    swap(arr, i, j);
    i++; j--;
  };
};

const swap = (arr, i, j) => {
  [ arr[i], arr[j] ] = [ arr[j], arr[i] ]
};

console.log(pancakeSort([1, 5, 4, 3, 2]));