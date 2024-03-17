# 69. Sqrt(x)

# Given a non-negative integer x, return the square root of x rounded down to the nearest integer. 
# The returned integer should be non-negative as well. You must not use any built-in 
# exponent function or operator.

# Example 1:
# Input: x = 4
# Output: 2
# Explanation: The square root of 4 is 2, so we return 2.

# Example 2:
# Input: x = 8
# Output: 2
# Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest 
# integer, 2 is returned.


class Solution:
    def mySqrt(self, x: int) -> int:
        if x == 0 or x == 1: return x
        left, right = 1, x

        while left <= right:
            mid = ((right - left) // 2) + left
            square = mid * mid

            if square == x:
                return mid
            elif square > x:
                right = mid - 1
            else:
                left = mid + 1

        return right