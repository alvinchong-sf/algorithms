# Once upon a time, in a kingdom far, far away, there lived a King Byteasar VI. As any king 
# with such a magnificent name, he was destined to leave a trace in history. Unfortunately, 
# imagination wasn't one of Byteasar's strong suits, so the reform he came up with was quite 
# simple: he ordered that all his kingdom's cities should be renamed. He didn't want to come 
# up with new names (as a king, he'd have to remember them all!), so he ordered the cities 
# to swap their names in such a manner that the ith city would have the name of the city 
# number (i + 1)th. The last city in the Byteasar's kingdom would, naturally, get the name 
# of the very first city.

# The cartographers were not happy with this reform, since they had to redraw all the 
# kingdom's maps. Before the reform, information about all the roads between the cities 
# were stored in the roadRegister. Prior to redrawing any map, they had to start with 
# updating the register. Your task is to find out the state of the updated register.

# Example

# For

# roadRegister = [[false, true,  true,  false],
#                 [true,  false, true,  false],
#                 [true,  true,  false, true ],
#                 [false, false, true,  false]]
# the output should be

# solution(roadRegister) = [[false, false, false, true ],
#                           [false, false, true,  true ],
#                           [false, true,  false, true ],
#                           [true,  true,  true,  false]]


def solution(roadRegister):
    n = len(roadRegister)
    buckets = [[] for x in range(n)]
    results = [[False for y in range(n)] for x1 in range(n)]
    
    for r in range(n):
        for c in range(n):
            cell = roadRegister[r][c]
            if cell:
                buckets[r].append(c)
    
    for row in range(n):
        increment_convert(buckets, row, n)
                
    for r1 in range(n):
        for c1 in range(len(buckets[r1])):
            new_row = (r1+1) % n
            new_col = int(buckets[r1][c1])
            results[new_row][new_col] = True
    
    return results

def increment_convert(buckets, row, n):
    for r in range(n):
        if r == row: continue
        for c in range(len(buckets[r])):
            cell = buckets[r][c]
            if type(cell) in [int] and cell == row:
                buckets[r][c] = str((cell + 1) % n)