// Move Zeros To End
// Given a static-sized array of integers arr, move all zeroes in the array to the 
// end of the array. You should preserve the relative order of items in the array.

// We should implement a solution that is more efficient than a naive brute force.

// Examples:

// input:  arr = [1, 10, 0, 2, 8, 3, 0, 0, 6, 4, 0, 5, 7, 0]
// output: [1, 10, 2, 8, 3, 6, 4, 5, 7, 0, 0, 0, 0, 0]

// time o(n) | space o(n)
function moveZerosToEnd(arr) {
  if (arr.length === 0) return [];
  
	const nonZeroArr = [],
        zeroArr = [];
  
  for (const num of arr) {
    if (num !== 0) {
      nonZeroArr.push(num);
    } else {
      zeroArr.push(num);
    }
  }
  
  return [...nonZeroArr, ...zeroArr]
}

// time o(n) | space o(1) | notes = QuickSelect Hybrid of partitioning
function moveZerosToEnd(arr) {
  let j = 0;
  
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (num !== 0) {
      swap(arr, i , j);
      j++;
    }
  }
  
  return arr;
};

const swap = (arr, i, j) => {
  [ arr[i], arr[j] ] = [ arr[j], arr[i] ]
};

let arr = [1, 10, 0, 2, 8, 3, 0, 0, 6, 4, 0, 5, 7, 0]
console.log(moveZerosToEnd(arr));