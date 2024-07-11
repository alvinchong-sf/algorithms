"""
1190. Reverse Substrings Between Each Pair of Parentheses
You are given a string s that consists of lower case English letters and brackets.
Reverse the strings in each pair of matching parentheses, starting from the innermost one.
Your result should not contain any brackets.

Example 1:
Input: s = "(abcd)"
Output: "dcba"

Example 2:
Input: s = "(u(love)i)"
Output: "iloveu"
Explanation: The substring "love" is reversed first, then the whole string is reversed.

Example 3:
Input: s = "(ed(et(oc))el)"
Output: "leetcode"
Explanation: First, we reverse the substring "oc", then "etco", and finally, the whole string.

Constraints:
    1 <= s.length <= 2000
    s only contains lower case English characters and parentheses.
    It is guaranteed that all parentheses are balanced.

https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/description/
Time: O(n) | Space: O(n)
"""

class Solution:
    def reverseParentheses(self, s: str) -> str:
        stack = []
        for char in s:
            if char == ")":
                stack.append(self.helper(stack))
            else:
                stack.append(char)
        return "".join(stack)

    def helper(self, stack):
        build_str = []
        while stack:
            char = stack.pop()
            if char == "(":
                break
            build_str.append(self.reverse_string(char))
        return "".join(build_str)
        
    def reverse_string(self, s):
        arr = [c for c in s]
        i, j = 0, len(s) - 1
        while i < j:
            arr[i], arr[j] = arr[j], arr[i]
            i, j = i + 1, j - 1
        return "".join(arr)
