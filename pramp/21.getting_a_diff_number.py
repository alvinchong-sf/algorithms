# Getting a Different Number
# Given an array arr of unique nonnegative integers, implement a function getDifferentNumber that 
# finds the smallest nonnegative integer that is NOT in the array. Even if your programming 
# language of choice doesn’t have that restriction (like Python), assume that the maximum value 
# an integer can have is MAX_INT = 2^31-1. So, for instance, the operation MAX_INT + 1 would be 
# undefined in our case. Your algorithm should be efficient, both from a time and a space 
# complexity perspectives. Solve first for the case when you’re NOT allowed to modify the input arr. 
# If successful and still have time, see if you can come up with an algorithm with an improved 
# space complexity when modifying arr is allowed. Do so without trading off the time complexity.
# Analyze the time and space complexities of your algorithm.

# Example:
# input:  arr = [0, 1, 2, 3]
# output: 4 

# Cycle Sort implementation
# time: O(n) | space: O(1)
def get_different_number(arr):
  n = len(arr)
  idx = 0
  
  while idx < n:
    swap_idx = arr[idx]
    if 0 <= swap_idx < n and arr[idx] != idx:
      arr[idx], arr[swap_idx] = arr[swap_idx], arr[idx]
    else:
      idx += 1
  
  for i in range(n):
    if arr[i] != i:
      return i
    
  return n

