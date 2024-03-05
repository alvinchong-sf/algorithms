# Given two version strings composed of several non-negative decimal fields separated by periods 
# ("."), both strings contain equal number of numeric fields. Return true if the first version 
# is higher than the second version and false otherwise.

# The syntax follows the regular semver ordering rules:

# 1.0.5 < 1.1.0 < 1.1.5 < 1.1.10 < 1.2.0 < 1.2.2
# < 1.2.10 < 1.10.2 < 2.0.0 < 10.0.0
# There are no leading zeros in any of the numeric fields, i.e. you do not have to handle inputs 
# like 100.020.003 (it would instead be given as 100.20.3).

# Example

# For ver1 = "1.2.2" and ver2 = "1.2.0", the output should be
# solution(ver1, ver2) = true;
# For ver1 = "1.0.5" and ver2 = "1.1.0", the output should be
# solution(ver1, ver2) = false.

def solution(ver1, ver2):    
    arr1 = list(map(lambda x: int(x), ver1.split(".")))
    arr2 = list(map(lambda x: int(x), ver2.split(".")))
    
    for i in range(len(arr1)):
        num1 = arr1[i]
        num2 = arr2[i]

        if num1 < num2:
            return False
            
        if num1 > num2:
            return True
    
    return False