// 394. Decode String

// Given an encoded string, return its decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the 
// square brackets is being repeated exactly k times. Note that k is guaranteed 
// to be a positive integer.

// You may assume that the input string is always valid; there are no extra 
// white spaces, square brackets are well-formed, etc. Furthermore, you may assume 
// that the original data does not contain any digits and that digits are only for 
// those repeat numbers, k. For example, there will not be input like 3a or 2[4].

// The test cases are generated so that the length of the output will never exceed 105. 

// Example 1:
// Input: s = "3[a]2[bc]"
// Output: "aaabcbc"

// Example 2:
// Input: s = "3[a2[c]]"
// Output: "accaccacc"

// Example 3:
// Input: s = "2[abc]3[cd]ef"
// Output: "abcabccdcdcdef"

// Constraints:

// 1 <= s.length <= 30
// s consists of lowercase English letters, digits, and square brackets '[]'.
// s is guaranteed to be a valid input.
// All the integers in s are in the range [1, 300].

enum Brackets {
    OPEN = "[",
    CLOSE = "]",
}

function decodeString(s: string): string {
    const stack: string[] = [];
    const digitSet = new Set<string>();

    for (let i = 0; i <= 9; i++) {
        digitSet.add(i.toString());
    }

    for (const char of s) {
        if (char === Brackets.CLOSE) {
            const decoded = getDecodedChar(stack);
            const multiplier = getMultiplier(stack, digitSet);
            stack.push(decoded.repeat(multiplier));
        } else {
            stack.push(char);
        }
    }

    return stack.join("");
};

function getDecodedChar(stack: string[]): string {
    const result: string[] = [];
    
    while (stack[stack.length - 1] !== Brackets.OPEN) {
        const ele = stack.pop();
        if (ele) {
            result.push(ele);
        }
    }
    
    // remove opening bracket
    stack.pop();
    
    return result.reverse().join("");
}

function getMultiplier(stack: string[], set: Set<string>): number {
    const result: string[] = [];
    
    while (set.has(stack[stack.length - 1])) {
        const ele = stack.pop();
        if (ele) {
            result.push(ele);
        }
    }
    
    return parseInt(result.reverse().join(""));
}