// 921. Minimum Add to Make Parentheses Valid

// A parentheses string is valid if and only if:

// It is the empty string,
// It can be written as AB (A concatenated with B), where A and B are valid strings, or
// It can be written as (A), where A is a valid string.
// You are given a parentheses string s. In one move, you can insert a parenthesis at any position of the string.

// For example, if s = "()))", you can insert an opening parenthesis to be "(()))" or a closing parenthesis to be "())))".
// Return the minimum number of moves required to make s valid.

function minAddToMakeValid(text) {
  let opening = 0, count = 0;
  
  for (let i = 0; i < text.length; i++) {
    const ele = text[i];
    if (ele === "(") {
      opening++;
    } else if (ele === ")" && opening === 0) {
      count++;
    } else {
      opening--;
    }
  }
  
  return opening + count;
}

// time o(n) | space o(1)




var minAddToMakeValid = function(s) {
    if (s.length === 1) return 1;
    
    const stack = [s[0]];
    
    for (let i = 1; i < s.length; i++) {
        const ele = s[i];
        if (!stack.length) {
            stack.push(ele);
            continue;
        }
        const popVal = stack.pop();
        if (popVal === "(" && ele === ")") continue;
        if (popVal === ele || (popVal === ")" && ele === "(") ) {
            stack.push(popVal);
            stack.push(ele);
        }
    }
    
    return stack.length;
};

// time o(n) | space o(n)
// https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/