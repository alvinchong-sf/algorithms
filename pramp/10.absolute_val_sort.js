// Absolute Value Sort
// Given an array of integers arr, write a function absSort(arr), that sorts the 
// array according to the absolute values of the numbers in arr. If two numbers 
// have the same absolute value, sort them according to sign, where the negative 
// numbers come before the positive numbers.

// Examples:
// input:  arr = [2, -7, -2, -2, 0]
// output: [0, -2, -2, 2, -7]

function absSort(arr) {
  if (arr.length <= 1) return arr;
  
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    while (j >= 0) {
      const num1 = arr[j],
            num2 = arr[j + 1];
      if (Math.abs(num1) > Math.abs(num2)) {
        swap(arr, j , j + 1);
      } else if (Math.abs(num1) === Math.abs(num2)) {
        if (num1 > num2) swap(arr, j, j + 1)
      }
      j--;
    }
  }
  return arr;
};


const swap = (arr, i, j) => {
  [ arr[i], arr[j] ] = [ arr[j], arr[i] ];
};

