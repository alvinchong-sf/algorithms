# You are given an array of integers. On each move you are allowed to increase 
# exactly one of its element by one. Find the minimal number of moves required to 
# obtain a strictly increasing sequence from the input.

# Example

# For inputArray = [1, 1, 1], the output should be
# solution(inputArray) = 3.

# The minimal number of moves needed to obtain a strictly increasing sequence 
# from inputArray. It's guaranteed that for the given test cases the answer always 
# fits signed 32-bit integer type.

# https://app.codesignal.com/arcade/intro/level-4/xvkRbxYkdHdHNCKjg

def solution(inputArray):
    n = len(inputArray)
    count = 0
    
    for i in range(1, n):
        prev = inputArray[i-1]
        curr = inputArray[i]
        if prev >= curr:
            diff = prev - curr
            inputArray[i] += (diff + 1)
            count += (diff + 1)
    
    return count