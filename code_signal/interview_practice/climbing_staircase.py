"""
You need to climb a staircase that has n steps, and you decide to get some extra exercise by jumping up the steps. You can cover at most k steps in a single jump. Return all the possible sequences of jumps that you could take to climb the staircase, sorted.

Example
For n = 4 and k = 2, the output should be
solution(n, k) =
[[1, 1, 1, 1],
 [1, 1, 2],
 [1, 2, 1],
 [2, 1, 1],
 [2, 2]]
There are 4 steps in the staircase, and you can jump up 2 or fewer steps at a time. There are 5 potential sequences in which you jump up the stairs either 2 or 1 at a time.

Input/Output
[input] integer n

Guaranteed constraints:
0 ≤ n ≤ 10.

[input] integer k

Guaranteed constraints:
0 ≤ k ≤ n.

[output] array.array.integer

An array containing all of the possible sequences in which you could climb n steps by taking them k or fewer at a time.
"""

def solution(n, k):
    temp = []
    result = []
    dfs(1, temp, result, n, k)
    return result
    
def dfs(idx, temp, result, n, k):
    if idx > n or sum(temp) >= n:
        if sum(temp) == n:
            result.append(temp.copy())
        return
    
    for j in range(idx, n+1):
        steps = j - idx + 1
        if steps > k:
            return
        temp.append(steps)
        dfs(j + 1, temp, result, n, k)
        temp.pop()
