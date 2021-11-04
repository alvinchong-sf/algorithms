// Word Count Engine
// Implement a document scanning function wordCountEngine, which receives a string 
// document and returns a list of all unique words in it and their number of 
// occurrences, sorted by the number of occurrences in a descending order. If 
// two or more words have the same count, they should be sorted according to 
// their order in the original sentence. Assume that all letters are in english 
// alphabet. You function should be case-insensitive, so for instance, the 
// words “Perfect” and “perfect” should be considered the same word.

// The engine should strip out punctuation (even in the middle of a word) and use 
// whitespaces to separate words.

// Analyze the time and space complexities of your solution. Try to optimize for 
// time while keeping a polynomial space complexity.

// Examples:

// input:  document = "Practice makes perfect. you'll only
//                     get Perfect by practice. just practice!"

// output: [ ["practice", "3"], ["perfect", "2"],
//           ["makes", "1"], ["youll", "1"], ["only", "1"], 
//           ["get", "1"], ["by", "1"], ["just", "1"] ]


// time o(m * w) | m is length of split arr by single space | w is the longest length of each word
// space o(m) 
function wordCountEngine(document) {
  const splitArr = document.split(" "); // time o(n)
  const hashMap = {};
  const resultArr = [];
  
  // place into hashMap
  for (const word of splitArr) {  // time o(m)
    if (word === "") continue;
    const res = helper(word);     // time o(w)
    if (hashMap[res] === undefined) hashMap[res] = 0;
    hashMap[res]++;
  }
  
  // put all values into arr to find max val
  const valuesArr = [];              // time o(m)
  for (const key in hashMap) {
    const val = hashMap[key];
    valuesArr.push(val);
  };
  
  // bucket sort
  const max = Math.max(...valuesArr);    // time o(m)
  const buckets = new Array(max + 1).fill().map(() => new Array());
  for (const key in hashMap) {        // time o(w)
    const val = hashMap[key];
    buckets[val].push(key)
  }
  
  // format output
  for (let i = buckets.length - 1; i >= 0; i--) {
    const bucket = buckets[i];
    while (bucket.length) {
      const word = bucket.shift();
      resultArr.push([word, i.toString()])
    }
  }
  
  return resultArr;
}

const helper = (word) => {
  const lowerCaseAlpha = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseAlpha = lowerCaseAlpha.toUpperCase();
  const arr1 = lowerCaseAlpha.split("");
  const arr2 = upperCaseAlpha.split("");
  const set = new Set([... arr1, ...arr2]);
  const resultArr = [];
  
  for (const char of word) {
    if (!set.has(char)) continue;
    resultArr.push(char);
  }
  
  return resultArr.join("").toLowerCase();
}


const document1 = "Practice makes perfect. you'll only get Perfect by practice. just practice!"
const document2 = "Every book is a quotation; and every house is a quotation out of all forests, and mines, and stone quarries; and every man is a quotation from all his ancestors. "
console.log(wordCountEngine(document2));