// Sentence Reverse
// You are given an array of characters arr that consists of sequences of characters 
// separated by space characters. Each space-delimited sequence of characters defines a word.

// Implement a function reverseWords that reverses the order of the words in 
// the array in the most efficient manner.

// Explain your solution and analyze its time and space complexities.

// Example:

// input:  arr = [ 'p', 'e', 'r', 'f', 'e', 'c', 't', '  ',
//                 'm', 'a', 'k', 'e', 's', '  ',
//                 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e' ]

// output: [ 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e', '  ',
//           'm', 'a', 'k', 'e', 's', '  ',
//           'p', 'e', 'r', 'f', 'e', 'c', 't' ]


// time o(n) | space o(1)
function reverseWords(arr) {
  arr.reverse();
  
  let i = 0, j = 0;
  
  while (i < arr.length) {
    if (arr[i] === " ") {
      i++; j++;
    } else {
      while (arr[j] !== " " && j < arr.length) j++;
      reverseHelper(arr, i, j - 1);
      i = j;
    }
  }
  
  return arr;
}

const reverseHelper = (arr, i, j) => {
  while (i < j) {
    [ arr[i], arr[j] ] = [ arr[j], arr[i] ]
    i++; j--;
  }
};

const arr = [ 'p', 'e', 'r', 'f', 'e', 'c', 't', ' ',
                'm', 'a', 'k', 'e', 's', ' ',
                'p', 'r', 'a', 'c', 't', 'i', 'c', 'e' ]

console.log(reverseWords(arr));