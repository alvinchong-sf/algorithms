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
# Time: O(n) | Space: O(n)
class Solution:
    def calculate(self, s: str) -> int:
        digits = tuple([str(i) for i in range(10)])
        stack = []
        is_add = True
        total = 0
        n = len(s)
        i = 0
        while i < n:
            c = s[i]
            if c in digits:
                digit, end_idx = self.get_digits(i, s, digits, n)
                if is_add:
                    total += digit
                else:
                    total -= digit
                    is_add = True
                i = end_idx
            else:
                if c == "(" or c == ")":
                    if c == "(":
                        stack.append((total, is_add))
                        total = 0
                    else:
                        outer_total, outer_is_plus = stack.pop()
                        if outer_is_plus:
                            total += outer_total
                        else:
                            total = outer_total - total
                    is_add = True

                if c == "-":
                    is_add = False

                i += 1

        return total

    def get_digits(self, idx, s, digits, n):
        temp = []
        for i in range(idx, n):
            if s[i] in digits:
                temp.append(s[i])
            else:
                return (int("".join(temp)), i)
        return (int("".join(temp)), n)
