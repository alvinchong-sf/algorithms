# Imagine a white rectangular grid of n rows and m columns divided into two parts by a 
# diagonal line running from the upper left to the lower right corner. Now let's paint 
# the grid in two colors according to the following rules:

# A cell is painted black if it has at least one point in common with the diagonal;
# Otherwise, a cell is painted white.
# Count the number of cells painted black.

# Example

# For n = 3 and m = 4, the output should be
# solution(n, m) = 6.

# There are 6 cells that have at least one common point with the diagonal and therefore are painted black.

# For n = 3 and m = 3, the output should be
# solution(n, m) = 7.

# 7 cells have at least one common point with the diagonal and are painted black.

# https://app.codesignal.com/arcade/code-arcade/loop-tunnel/RcK4vupi8sFhakjnh

def solution(n, m):
    return n + m + gcd(n, m) - 2

def gcd(num1, num2):
    small =  min(num1, num2)
    greatest = 1
    for i in range(small+1, 0, -1):
        if num1 % i == 0 and num2 % i == 0:
            return i
        
    return greatest