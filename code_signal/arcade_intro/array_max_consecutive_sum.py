# Given array of integers, find the maximal possible sum of some of its k 
# consecutive elements.

# Example

# For inputArray = [2, 3, 5, 1, 6] and k = 2, the output should be
# solution(inputArray, k) = 8.
# All possible sums of 2 consecutive elements are:

# 2 + 3 = 5;
# 3 + 5 = 8;
# 5 + 1 = 6;
# 1 + 6 = 7.
# Thus, the answer is 8.

def solution(inputArray, k):
    n = len(inputArray)
    max_sum = 0
    curr_sum = 0
    j = 0
    
    for i in range(n):
        curr_sum += inputArray[i]
        
        while i-j+1 >= k:
            max_sum = max(max_sum, curr_sum)
            curr_sum -= inputArray[j]
            j += 1
    
    return max_sum