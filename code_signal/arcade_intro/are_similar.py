# Two arrays are called similar if one can be obtained from another by swapping 
# at most one pair of elements in one of the arrays.

# Given two arrays a and b, check whether they are similar.

# Example

# For a = [1, 2, 3] and b = [1, 2, 3], the output should be
# solution(a, b) = true.

# The arrays are equal, no need to swap any elements.

# For a = [1, 2, 3] and b = [2, 1, 3], the output should be
# solution(a, b) = true.

# We can obtain b from a by swapping 2 and 1 in b.

# For a = [1, 2, 2] and b = [2, 1, 1], the output should be
# solution(a, b) = false.

# Any swap of any two elements either in a or in b won't make a and b equal.

# https://app.codesignal.com/arcade/intro/level-4/xYXfzQmnhBvEKJwXP/drafts

# Updated solution
def solution(a, b):
    changes = 0
    a_num, b_num = None, None
    
    for i in range(len(a)):
        num1, num2 = a[i], b[i]
        if num1 != num2:
            changes += 1
            if changes > 2: 
                return False
            elif changes == 1:
                a_num = num1
                b_num = num2
            else:
                if num1 != b_num or num2 != a_num:
                    return False
    
    return False if changes == 1 else True




# Brute force solution
def solution(a, b):
    hash_map1, hash_map2 = {}, {}
    
    for i in range(len(a)):
        num1 = a[i]
        num2 = b[i]
        
        if num1 != num2:
            if num1 in hash_map1:
                # return False
                hash_map1[num1] += 1
            else:
                hash_map1[num1] = 1
            
            if num2 in hash_map2:
                # return False
                hash_map2[num2] += 1
            else:
                hash_map2[num2] = 1
    
    if len(hash_map1) == 0 and len(hash_map2) == 0: return True
    if len(hash_map1) != 2 and len(hash_map2) != 2: return False
    
    vals1 = list(hash_map1.values())
    vals2 = list(hash_map2.values())
    for j in range(len(vals1)):
        val1 = vals1[j]
        val2 = vals2[j]
        if val1 > 1 or val2 > 1: return False
    
    keys1 = set(hash_map1.keys())
    keys2 = set(hash_map2.keys())
    if keys1 == keys2: return True
    
    return False