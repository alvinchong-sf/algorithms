// Shortest Word Edit Path
// Given two words source and target, and a list of words words, find the length 
// of the shortest series of edits that transforms source to target.

// Each edit must change exactly one letter at a time, and each intermediate word 
// (and the final target word) must exist in words.

// If the task is impossible, return -1.

// Example1:
// source = "bit", target = "dog"
// words = ["but", "put", "big", "pot", "pog", "dog", "lot"]
// output: 5
// explanation: bit -> but -> put -> pot -> pog -> dog has 5 transitions.

// Example2:
// source = "no", target = "go"
// words = ["to"]
// output: -1

function shortestWordEditPath(source, target, words) {
  const set = new Set(words);
  if (!set.has(target)) return -1;
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  
  const queue = [[source, 0]];
  
  while (queue.length) {
    const [string, count] = queue.shift();
    if (string === target) return count;
    const arr = string.split("");
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < alphabet.length; j++) {
        if (alphabet[j] === arr[i]) continue;
        const slicedArr = [...arr];
        slicedArr[i] = alphabet[j];
        const newStr = slicedArr.join("");
        if (set.has(newStr)) queue.push([newStr, count + 1]);
      }
    }
  }
 
  return -1;
}


const source = "bit", target = "dog"
const words = ["but", "put", "big", "pot", "pog", "dog", "lot"]

const source1 = "no", target1 = "go", words1 = ["to"]

const source2 = "aa", target2 = "bbb", words2 = ["ab","bb"]

const res = shortestWordEditPath(source, target, words);
console.log(res);