// You will be given an array of numbers. You have to sort the odd numbers in 
// ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(array) {
  
  for(let i = 0; i < array.length - 1; i++) {
    let minNum = Infinity, minIdx = null;
    const num1 = array[i];
    if(num1 % 2 === 0) continue;
    
    for(let j = i + 1; j < array.length; j++) {
      const num2 = array[j];
      if(num2 % 2 !== 0) {
        if(num2 < minNum) {
          minNum = num2; minIdx = j;
        }
      }
    }
    if(minNum % 2 !== 0 && num1 % 2 !== 0) {
      if(minNum < num1) swap(array, i, minIdx);
    }
  }
  return array;
}

const swap = (array, i , j) => {
  [ array[i], array[j] ] = [ array[j], array[i] ];
}

// time o(n^2) | space o(1)
// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/javascript