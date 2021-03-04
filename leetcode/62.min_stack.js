// 155. Min Stack

// Design a stack that supports push, pop, top, and retrieving the minimum 
// element in constant time.

// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.

var MinStack = function() {
    this.stack = [];    
    this.minStack = [];
};

MinStack.prototype.push = function(x) {
    this.stack.push(x);
    if(!this.minStack.length) {
        this.minStack.push(x);
    } else {
        let banana = this.minStack[this.minStack.length - 1];
        let min = Math.min(x, banana);
        this.minStack.push(min);
    }
};
// time o(1)

MinStack.prototype.pop = function() {
    this.stack.pop();
    this.minStack.pop();
};
// time o(1)

MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};
// time o(1)

MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1];
};
// time o(1)

// https://leetcode.com/problems/min-stack/