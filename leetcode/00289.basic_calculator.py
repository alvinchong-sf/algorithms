# 224. Basic Calculator
# Given a string s representing a valid expression, implement a basic calculator to evaluate it, 
# and return the result of the evaluation.
# Note: You are not allowed to use any built-in function which evaluates strings as mathematical 
# expressions, such as eval().

# Example 1:
# Input: s = "1 + 1"
# Output: 2

# Example 2:
# Input: s = " 2-1 + 2 "
# Output: 3

# Example 3:
# Input: s = "(1+(4+5+2)-3)+(6+8)"
# Output: 23

# Constraints:
#     1 <= s.length <= 3 * 105
#     s consists of digits, '+', '-', '(', ')', and ' '.
#     s represents a valid expression.
#     '+' is not used as a unary operation (i.e., "+1" and "+(2 + 3)" is invalid).
#     '-' could be used as a unary operation (i.e., "-1" and "-(2 + 3)" is valid).
#     There will be no two consecutive operators in the input.
#     Every number and running calculation will fit in a signed 32-bit integer.

# https://leetcode.com/problems/basic-calculator/description/
# Need to refactor to make code prettier but time and space complexity should be alright
# Time: O(n) | Space: O(n)
class Solution:
    def calculate(self, s: str) -> int:
        digits = tuple([str(i) for i in range(10)])
        stack = []
        operator = "+"
        total = 0
        n = len(s)
        i = 0
        while i < n:
            c = s[i]
            if c in digits:
                digit, end_idx = self.get_digits(i, s, digits)
                if operator == "+":
                    total += digit
                else:
                    total -= digit
                    operator = "+"
                i = end_idx
            elif c == "(":
                stack.append((total, operator))
                total = 0
                operator = "+"
                i += 1
            elif c == ")":
                sub_total, ops = stack.pop()
                if ops == "+" and operator == "+":
                    total += sub_total
                elif ops == "-" and operator == "-":
                    total = sub_total + abs(total)
                    operator = "+"
                else:
                    total = sub_total - total
                    operator = "+"
                i += 1
            elif c == "+":
                operator = "+"
                i += 1
            elif c == "-":
                operator = "-"
                i += 1
            else:
                i += 1

        return total

    def get_digits(self, idx, s, digits):
        n = len(s)
        temp = []

        for i in range(idx, n):
            if s[i] in digits:
                temp.append(s[i])
            else:
                return (int("".join(temp)), i)
        
        return (int("".join(temp)), n)