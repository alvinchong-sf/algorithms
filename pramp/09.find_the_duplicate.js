// Find The Duplicates
// Given two sorted arrays arr1 and arr2 of passport numbers, implement a function 
// findDuplicates that returns an array of all passport numbers that are both in 
// arr1 and arr2. Note that the output array should be sorted in an ascending order.

// Let N and M be the lengths of arr1 and arr2, respectively. Solve for two cases 
// and analyze the time & space complexities of your solutions: M ≈ N - the array 
// lengths are approximately the same M ≫ N - arr2 is much bigger than arr1.

// Example:
// input:  arr1 = [1, 2, 3, 5, 6, 7], arr2 = [3, 6, 7, 8, 20]
// output: [3, 6, 7]

// time o(n + m) | space o(n + m)
function findDuplicates(arr1, arr2) {
  const n1 = arr1.length,
        n2 = arr2.length;
  let tempArr;
  let setArr;
  if (n1 > n2) {
    tempArr = arr1;
    setArr = arr2;
  } else {
    tempArr = arr2;
    setArr = arr1
  }
  const set = new Set(setArr); 
  const resultArr = [];
  
  for (let i = 0; i < tempArr.length; i++) { 
    const num = tempArr[i];
    if (set.has(num)) {
      resultArr.push(num);
    }
  }
  
  return resultArr;
}

// time o(n + m) | space o(1)
function findDuplicates(arr1, arr2) {
  const resultArr = [];
  let i = 0, j = 0;
  
  while (i < arr1.length && j < arr2.length) {
    const num1 = arr1[i],
          num2 = arr2[j];
    
    if (num1 === num2) {
      resultArr.push(num1);
      i++; j++;
    } else if (num1 < num2) {
      i++;
    } else {
      j++;
    }
  }
  return resultArr;
}

// time o(m log (n)) | space o(1)
function findDuplicates(arr1, arr2) {
  const n1 = arr1.length,
        n2 = arr2.length;
  let tempArr;
  let longArr;
  if (n1 > n2) {
    tempArr = arr2;
    longArr = arr1;
  } else {
    tempArr = arr1;
    longArr = arr2;
  }
  
  const resultArr = [];
  for(const num of tempArr) {
    if (binarySearch(num, longArr) !== -1) resultArr.push(num)
  }
  
  return resultArr;
}

const binarySearch = (target, longArr) => {
  let left = 0, right = longArr.length - 1;
  
  while ( left <= right ) {
    const midIdx = Math.floor((left + right) / 2);
    const midVal = longArr[midIdx];
    
    if (midVal === target) {
      return midIdx;
    } else if (target < midVal) {
      right = midIdx - 1;
    } else {
      left = midIdx + 1;
    }
  }
  return -1;
};