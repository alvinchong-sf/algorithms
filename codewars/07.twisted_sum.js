// Find the sum of the digits of all the numbers from 1 to N (both ends included).

// Examples
// # N = 4
// 1 + 2 + 3 + 4 = 10

// # N = 10
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) = 46

// # N = 12
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) + (1 + 1) + (1 + 2) = 51

function twistedSum(n) {
  let sum = 0;
  if(n < 10) {
    for(let i = 1; i <= n; i++) {
      sum += i
    }
  } else {
    for(let i = 1; i <= n; i++) {
      if(i >= 10) {
        sum += helper(i);
      } else {
        sum += i 
      }
    }
  }
  return sum
}

const helper = (num) => {
  let sum = 0;
  let number = num;
  while(number !== 0) {
    let right = number % 10;
    let left = Math.floor(number / 10);
    number = left;
    sum += right;
  }
  return sum;
}

// time o(n) n is number of digits
// space o(1)
// https://www.codewars.com/kata/527e4141bb2ea5ea4f00072f/train/javascript