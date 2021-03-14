// Snail Sort

// Given an n x n array, return the array elements arranged from outermost 
// elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]

const snail = function(array) {
  // top is left to right => j = 0 to j < array[0].length
  // right is top to bottom => i = 1 to j < array.length
  // bottom is right to left => j = second last to j >= 0
  // left is bottom to top => i second last to i > 0
  
  let resultArr = [];
  
  let startingRow = 0;
  let endingRow = array.length - 1;
  let startingCol = 0;
  let endingCol = array[0].length - 1;
  
  while(startingRow <= endingRow && startingCol <= endingCol) {
    //top row
    for(let col = startingCol; col <= endingCol; col++) {
      resultArr.push(array[startingRow][col])
    }
    // right col
    for(let row = startingRow + 1; row <= endingRow; row++) {
      resultArr.push(array[row][endingCol])
    }
    // bottom row
    for(let col = endingCol - 1; col >= startingCol; col--) {
      if(startingRow === endingRow) break;
      resultArr.push(array[endingRow][col])
    }
    // left col
    for(let row = endingRow - 1; row > startingRow; row--) {
      if(startingCol === endingCol) break;
      resultArr.push(array[row][startingCol])
    }
    
    startingRow++;
    endingRow--;
    startingCol++;
    endingCol--;
  }
  return resultArr;
}

// time o(n)
// space o(n)

// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript