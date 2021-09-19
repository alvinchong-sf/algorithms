// Array Quadruplet
// Given an unsorted array of integers arr and a number s, write a function 
// findArrayQuadruplet that finds four numbers (quadruplet) in arr that sum up to s. 
// Your function should return an array of these numbers in an ascending order. 
// If such a quadruplet doesn’t exist, return an empty array.

// Note that there may be more than one quadruplet in arr whose sum is s. 
// You’re asked to return the first one you encounter (considering the results are sorted).

// Explain and code the most efficient solution possible, and analyze its time and space complexities.

// Example:
// input:  arr = [2, 7, 4, 0, 9, 5, 1, 3], s = 20
// output: [0, 4, 7, 9] # The ordered quadruplet of (7, 4, 0, 9)
//                      # whose sum is 20. Notice that there
//                      # are two other quadruplets whose sum is 20:
//                      # (7, 9, 1, 3) and (2, 4, 9, 5), but again you’re
//                      # asked to return the just one quadruplet (in an
//                      # ascending order)

function findArrayQuadruplet(arr, s) {
  arr.sort((a, b) => a - b);
  
  for (let i = 0; i < arr.length - 3; i++) {
    const num1 = arr[i];
    
    for (let j = i + 1; j < arr.length - 2; j++) {
      const num2 = arr[j];
      
      let left = j + 1, right = arr.length - 1;
      while (left < right) {
        const num3 = arr[left], num4 = arr[right];
        const currSum = num1 + num2 + num3 + num4;
        if (currSum === s) {
          return [num1, num2, num3, num4];
        } else if (currSum > s) {
          right--;
        } else {
          left++;
        }
      }
    }
  }
  
  return [];
};

// let arr = [2, 7, 4, 0, 9, 5, 1, 3], s = 20;
// console.log(findArrayQuadruplet(arr, s));

// time worst = o(n^3) | best o(n log(n)) | space o(1)