// You are going to be given an array of integers. Your job is to take that array 
// and find an index N where the sum of the integers to the left of N is equal to 
// the sum of the integers to the right of N. If there is no index that would make 
// this happen, return -1.

// For example:

// Let's say you are given the array {1,2,3,4,3,2,1}:
// Your function will return the index 3, because at the 3rd position of the array, 
// the sum of left side of the index ({1,2,3}) and the sum of the right side of the 
// index ({3,2,1}) both equal 6.

function findEvenIndex(arr) {
  if(!arr.length) return -1;
  for(let i = 0; i < arr.length; i++) {
    let left = arr.slice(0, i);
    let right = arr.slice(i + 1);
    let leftSum = left.length ? left.reduce((accu, ele) => accu + ele) : 0;
    let rightSum = right.length?  right.reduce((accu, ele) => accu + ele): 0;
    if(i === 0) if(rightSum === 0) return i;
    if(leftSum === rightSum) return i;
  }
  return -1;
}

// time o(n * m^2 * p^2)
// space o(m + p)
// https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript

