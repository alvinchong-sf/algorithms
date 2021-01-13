// Valid Parentheses

//Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// eg.1
// Input: s = "()"
// Output: true

// eg.2
// Input: s = "()[]{}"
// Output: true

// eg.3
// Input: s = "(]"
// Output: false

var isValid = function(s) {
    let stack = [];
    
    for(let i = 0; i < s.length; i++) {
        let char = s[i];
        if(char === "(" || char === "{" || char === "[") {
            stack.push(char);
        }
        if(char === ")" || char === "}" || char === "]") {
            let opening = stack.pop()
            if ( !(opening + char === "{}" || opening + char === "[]" || opening + char === "()") ) {
               return false; 
            }
        }
    }
    if(!stack.length) {
        return true;
    } else {
        return false;
    }
};

// time: o(n);
// https://leetcode.com/problems/valid-parentheses/

