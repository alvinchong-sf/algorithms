# Given a sequence of integers as an array, determine whether it is possible to obtain 
# a strictly increasing sequence by removing no more than one element from the array.

# Note: sequence a0, a1, ..., an is considered to be a strictly increasing 
# if a0 < a1 < ... < an. Sequence containing only one element is also considered to be 
# strictly increasing.

# Example:
# For sequence = [1, 3, 2, 1], the output should be
# solution(sequence) = false.

# There is no one element in this array that can be removed in order to get a strictly 
# increasing sequence.

# For sequence = [1, 3, 2], the output should be
# solution(sequence) = true.

# You can remove 3 from the array to get the strictly increasing sequence [1, 2]. 
# Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].

# Return true if it is possible to remove one element from the array in 
# order to get a strictly increasing sequence, otherwise return false.

# https://app.codesignal.com/arcade/intro/level-2/2mxbGwLzvkTCKAJMG

def solution(sequence):
    res1 = _solution(sequence, "remove_current")
    res2 = _solution(sequence, "remove_previous")
    return res1 or res2

def _solution(sequence, remove_type):
    seq = sequence.copy()
    removed = False
    
    for j in range(1, len(seq)):
        prev = seq[j-1]
        curr = seq[j]
        
        if prev >= curr:
            if removed:
                return False
            
            removed = True
            
            if remove_type == "remove_current":
                seq[j] = seq[j-1]
            else: # remove previous            
                if j <= 1:
                    continue
                
                prev_prev_idx = j - 2
                if prev_prev_idx >= 0:
                    prev_prev_val = seq[prev_prev_idx]
                    if prev_prev_val >= curr:
                        return False
    
    return True