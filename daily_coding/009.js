// Good morning! Here's your coding interview problem for today.

// This problem was asked by Facebook.

// Given a string of round, curly, and square open and closing brackets, return 
// whether the brackets are balanced (well-formed).

// For example, given the string "([])[]({})", you should return true.

// Given the string "([)]" or "((()", you should return false.

function balanceBrackets(brackets) {
    const hash = {
        "(": ")",
        "[": "]",
        "{": "}"
    },
    stack = [];

    for (let i = 0; i < brackets.length; i++) {
        const bracket = brackets[i];
        if (bracket in hash) { // if opening
            stack.push(bracket);
        } else {
            if (!stack.length) return false;
            const opening = stack.pop();
            const closing = hash[opening];
            if (closing !== bracket) return false;
        }
    }

    return stack.length ? false : true;
};

const str1 = "([])[]({})",
      str2 = "([)]",
      str3 = "((()";
const res1 = balanceBrackets(str1);
const res2 = balanceBrackets(str2);
const res3 = balanceBrackets(str3);
console.log(res1, res2, res3);