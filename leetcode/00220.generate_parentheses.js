// 22. Generate Parentheses

// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Example 1:
// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]

// Example 2:
// Input: n = 1
// Output: ["()"]


var generateParenthesis = function(n) {
    const resultArr = [],
          tempArr = [];
    
    const dfs = (left, right) => {
        if (tempArr.length === (2 * n)) {
            const resultStr = tempArr.slice().join("");
            resultArr.push(resultStr);
            return;
        }
        
        if (left < n) {
            tempArr.push("(");
            dfs(left + 1, right);
            tempArr.pop();
        }
        
        if (left > right) {
            tempArr.push(")");
            dfs(left, right + 1);
            tempArr.pop();
        }
    };

    dfs(0, 0);
    return resultArr;
};

// https://leetcode.com/problems/generate-parentheses/