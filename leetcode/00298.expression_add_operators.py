# 282. Expression Add Operators
# Given a string num that contains only digits and an integer target, return all possibilities 
# to insert the binary operators '+', '-', and/or '*' between the digits of num so that the 
# resultant expression evaluates to the target value.
# Note that operands in the returned expressions should not contain leading zeros.

# Example 1:
# Input: num = "123", target = 6
# Output: ["1*2*3","1+2+3"]
# Explanation: Both "1*2*3" and "1+2+3" evaluate to 6.

# Example 2:
# Input: num = "232", target = 8
# Output: ["2*3+2","2+3*2"]
# Explanation: Both "2*3+2" and "2+3*2" evaluate to 8.

# Example 3:
# Input: num = "3456237490", target = 9191
# Output: []
# Explanation: There are no expressions that can be created from "3456237490" to evaluate to 9191.

# Constraints:
# 1 <= num.length <= 10
# num consists of only digits.
# -231 <= target <= 231 - 1

# https://leetcode.com/problems/expression-add-operators/
# Time: O(3^n) | Space: O(n) 
class Solution:
    def addOperators(self, num: str, target: int) -> List[str]:
        n = len(num)
        temp, result = [], []
        self.dfs(0, num, target, n, temp, result)
        return result

    def dfs(self, i, num, target, n, temp, result):
        if i >= n:
            expression = "".join(temp)
            if eval(expression) == target:
                result.append(expression)
            return

        for j in range(i, n):
            num_str = num[i:j+1]
            if num_str[0] == '0' and len(num_str) > 1: return
            if i == 0:
                temp.append(num_str)
                self.dfs(j + 1, num, target, n, temp, result)
                temp.pop()
            else:
                for operator in ["+", "-", "*"]:
                    temp.append(operator)
                    temp.append(num_str)
                    self.dfs(j + 1, num, target, n, temp, result)
                    temp.pop()
                    temp.pop()