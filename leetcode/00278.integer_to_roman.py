# 12. Integer to Roman
# Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

# Symbol       Value
# I             1
# V             5
# X             10
# L             50
# C             100
# D             500
# M             1000

# For example, 2 is written as II in Roman numeral, just two one's added together. 
# 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which 
# is XX + V + II.

# Roman numerals are usually written largest to smallest from left to right. However, the 
# numeral for four is not IIII. Instead, the number four is written as IV. Because the one is 
# before the five we subtract it making four. The same principle applies to the number nine, 
# which is written as IX. There are six instances where subtraction is used:

# I can be placed before V (5) and X (10) to make 4 and 9. 
# X can be placed before L (50) and C (100) to make 40 and 90. 
# C can be placed before D (500) and M (1000) to make 400 and 900.

# Given an integer, convert it to a roman numeral.

# Example 1:
# Input: num = 3
# Output: "III"
# Explanation: 3 is represented as 3 ones.

# Example 2:
# Input: num = 58
# Output: "LVIII"
# Explanation: L = 50, V = 5, III = 3.

# Example 3:
# Input: num = 1994
# Output: "MCMXCIV"
# Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

# Constraints: 1 <= num <= 3999

class Solution:
    def intToRoman(self, num: int) -> str:
        s = str(num)
        n = len(s)
        num_digits = n
        result = []
        while num_digits != 0:
            digit = int(s[n - num_digits])
            letters = self.get_roman_letters(digit, num_digits)
            result.append(letters)
            num_digits -= 1

        return "".join(result)

    def get_roman_letters(self, digit, num_digits):
        if num_digits == 4:
            return self.get_letters("M", "", "", "", digit)
        elif num_digits == 3:
            return self.get_letters("C", "CD", "D", "CM", digit)
        elif num_digits == 2:
            return self.get_letters("X", "XL", "L", "XC", digit)
        else:
            return self.get_letters("I", "IV", "V", "IX", digit)

    def get_letters(self, char1, char2, char3, char4, digit):
        if 0 <= digit <= 3:
            return char1 * digit
        elif digit == 4:
            return char2
        elif 5 <= digit <= 8:
            return char3 + (char1 * (digit - 5))
        elif digit == 9:
            return char4