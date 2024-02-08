# Given an array of equal-length strings, you'd like to know if it's possible to 
# rearrange the order of the elements in such a way that each consecutive pair of 
# strings differ by exactly one character. Return true if it's possible, 
# and false if not.

# Note: You're only rearranging the order of the strings, not the order of the letters 
# within the strings!

# Example

# For inputArray = ["aba", "bbb", "bab"], the output should be
# solution(inputArray) = false.

# There are 6 possible arrangements for these strings:

# ["aba", "bbb", "bab"]
# ["aba", "bab", "bbb"]
# ["bbb", "aba", "bab"]
# ["bbb", "bab", "aba"]
# ["bab", "bbb", "aba"]
# ["bab", "aba", "bbb"]
# None of these satisfy the condition of consecutive strings differing by 1 character, so the answer is false.

# For inputArray = ["ab", "bb", "aa"], the output should be
# solution(inputArray) = true.

# It's possible to arrange these strings in a way that each consecutive pair of strings 
# differ by 1 character (eg: "aa", "ab", "bb" or "bb", "ab", "aa"), so return true.

# Input/Output

# [execution time limit] 4 seconds (py3)

# [memory limit] 1 GB

# [input] array.string inputArray

# A non-empty array of strings of lowercase letters.

# Guaranteed constraints:
# 2 ≤ inputArray.length ≤ 10,
# 1 ≤ inputArray[i].length ≤ 15.

# [output] boolean

# Return true if the strings can be reordered in such a way that each neighbouring 
# pair of strings differ by exactly one character (false otherwise).

# https://app.codesignal.com/arcade/intro/level-7/PTWhv2oWqd6p4AHB9

def solution(inputArray):
    permutations = []
    get_permutations(0, inputArray, permutations)
    
    for i in range(len(permutations)):
        permutation = permutations[i]
        is_diff_one = True
        for j in range(1, len(permutation)):
            prev = permutation[j-1]
            curr = permutation[j]
            res = is_one_char_apart(prev, curr)
            if not res:
                is_diff_one = False
                break
        
        if is_diff_one:
            return True
    
    return False
    
def is_one_char_apart(str1, str2):
    diff_count = 0
    for c1, c2 in zip(str1, str2):
        if c1 != c2:
            diff_count += 1
            if diff_count > 1:
                return False
    return diff_count == 1
    
def get_permutations(idx, inputArray, result):
    if idx >= len(inputArray):
        copy_arr = inputArray.copy()
        result.append(copy_arr)
        return
    
    for j in range(idx, len(inputArray)):
        inputArray[idx], inputArray[j] = inputArray[j], inputArray[idx]
        get_permutations(idx+1, inputArray, result)
        inputArray[idx], inputArray[j] = inputArray[j], inputArray[idx]
    