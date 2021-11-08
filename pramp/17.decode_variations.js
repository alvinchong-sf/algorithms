// Decode Variations
// A letter can be encoded to a number in the following way:

// 'A' -> '1', 'B' -> '2', 'C' -> '3', ..., 'Z' -> '26'
// A message is a string of uppercase letters, and it is encoded first using this 
// scheme. For example, 'AZB' -> '1262'

// Given a string of digits S from 0-9 representing an encoded message, return 
// the number of ways to decode it.

// Examples:
// input:  S = '1262'
// output: 3
// explanation: There are 3 messages that encode to '1262': 'AZB', 'ABFB', and 'LFB'



function decodeVariations(S) {
  let count = 0;
  
  const dfs = (i) => {
    
    if (i >= S.length) {
      count++;
      return;
    }
    
    for (let j = i + 1; j <= S.length; j++) {
      const str = S.slice(i, j);
      const num = parseInt(str);
      if (num > 26) break;
      dfs(j);
    }
  }
  dfs(0)
  return count;
};

console.log(decodeVariations('1262'))