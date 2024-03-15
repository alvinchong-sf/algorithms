# 93. Restore IP Addresses
# A valid IP address consists of exactly four integers separated by single dots. Each integer is 
# between 0 and 255 (inclusive) and cannot have leading zeros.

# For example, "0.1.2.201" and "192.168.1.1" are valid IP addresses, but "0.011.255.245", 
# "192.168.1.312" and "192.168@1.1" are invalid IP addresses.
# Given a string s containing only digits, return all possible valid IP addresses that can be 
# formed by inserting dots into s. You are not allowed to reorder or remove any digits in s. 
# You may return the valid IP addresses in any order.

# Example 1:
# Input: s = "25525511135"
# Output: ["255.255.11.135","255.255.111.35"]

# Example 2:
# Input: s = "0000"
# Output: ["0.0.0.0"]
# Example 3:

# Input: s = "101023"
# Output: ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
 
# Constraints:
# 1 <= s.length <= 20
# s consists of digits only.

class Solution:
    def restoreIpAddresses(self, s: str) -> List[str]:
        n = len(s)
        digits = tuple([str(num) for num in range(10)])
        if n > 12 or n < 4:
            return []

        results = []
        for i in range(0, 1):
            for j in range(i + 1, n - 2):
                str1 = s[i:j]
                num1 = int(str1)
                if not self.is_valid(str1, digits, num1):
                    continue
                for k in range(j + 1, n - 1):
                    str2 = s[j:k]
                    num2 = int(str2)
                    if not self.is_valid(str2, digits, num2):
                        continue
                    for l in range(k + 1, n):
                        str3 = s[k:l]
                        str4 = s[l:n]
                        num3 = int(str3)
                        num4 = int(str4)
                        if not (self.is_valid(str3, digits, num3) and self.is_valid(str4, digits, num4)):
                            continue
                        
                        results.append(f"{str1}.{str2}.{str3}.{str4}")
        return results
    
    def is_valid(self, s, digits, num):
        if (
            len(s) > 3 or
            not self.is_valid_str(s, digits) or
            self.is_leading_zero(s) or
            not self.is_valid_num(num)
        ): return False

        return True

    def is_valid_num(self, num):
        return False if num < 0 or num > 255 else True

    def is_valid_str(self, s, digits):
        for char in s:
            if char not in digits:
                return False
        return True

    def is_leading_zero(self, s):
        if len(s) == 1:
            return False
        
        if s[0] == "0":
            return True
        
        return False