// 150. Evaluate Reverse Polish Notation

// Evaluate the value of an arithmetic expression in Reverse Polish Notation.

// Valid operators are +, -, *, and /. Each operand may be an integer or another 
// expression.

// Note that division between two integers should truncate toward zero.

// It is guaranteed that the given RPN expression is always valid. That means 
// the expression would always evaluate to a result, and there will not be 
// any division by zero operation.

// Input: tokens = ["2","1","+","3","*"]
// Output: 9
// Explanation: ((2 + 1) * 3) = 9

var evalRPN = function(tokens) {
    // approach 
	// create a for loop to iterate thru input
	// implement a stack = []
	// create a set = {“+”, “-”, “*”, “/”}
	// on each iteration, if the element is a number => parseInt(element)
	// stack.push(element)
	// if element is operand is “+” stack[stack.length] + stack.pop()
	//                                        “-” stack[stack.length] - stack.pop()
 	//                                        “*” stack[stack.length] * stack.pop()
	//                                        “/”  stack[stack.length] / stack.pop()
	// save the result =   “/”  stack[stack.length] / stack.pop()
	// stack.pop() again => stack.push(result)
	// at the end we return stack[stack.length - 1];
    
    let stack = [];
    let set = new Set(["+","-","*","/"]);
    
    for(let i = 0; i < tokens.length; i++) {
        let ele = tokens[i];
        if(set.has(ele)) {
            let firstEle = stack.pop();
            let secondEle = stack[stack.length - 1];
            let result;
            
            if(ele === "+") {
                result = secondEle + firstEle;
            } else if (ele === "-") {
                result = secondEle - firstEle;
            } else if (ele === "*") {
                result = secondEle * firstEle;
            } else {
                let temp = secondEle / firstEle;
                result = temp >= 0 ? Math.floor(temp) : Math.ceil(temp);
            }
            
            stack.pop();
            stack.push(result);
        } else {
            stack.push(parseInt(ele))
        }
    }
    return stack[stack.length - 1];
};

// time o(n) ;n is the length of the input
// space o(n) ; length of the stack
// https://leetcode.com/problems/evaluate-reverse-polish-notation/