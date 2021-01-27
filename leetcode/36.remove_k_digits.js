var removeKdigits = function(num, k) {
    
    const stack = [];
    for (let i = 0; i < num.length; i++) {
        while (k > 0 && stack.length > 0 && stack[stack.length - 1] > num[i]) {
            stack.pop();
            k--;
        }
        stack.push(num[i]);
    }
    while (k > 0) {
        stack.pop();
        k--;
    }
    
    while (stack[0] === '0') {
        stack.shift();
    }
    
    if (stack.length === 0) {
        return '0';
    }
    
    return stack.join('');
};

// time o(n^2)
// https://leetcode.com/problems/remove-k-digits/