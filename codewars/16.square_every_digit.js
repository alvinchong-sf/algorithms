// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, 
// because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num){
  if(num === 0) return 0;
  const resultArr = [];
  
  let tempNum = num;
  while(tempNum !== 0) {
    const lastDigit = tempNum % 10;
    tempNum = Math.floor(tempNum / 10);
    const squared = lastDigit * lastDigit;
    resultArr.unshift(squared);
  }
  return parseInt(resultArr.join(""));
}

// time o(n) | space o(n)
// https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript