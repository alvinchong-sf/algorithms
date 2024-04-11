# Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with numbers in such 
# a way that each column, each row, and each of the nine 3 × 3 sub-grids that compose the grid 
# all contain all of the numbers from 1 to 9 one time. Implement an algorithm that will check 
# whether the given grid of numbers represents a valid Sudoku puzzle according to the layout rules 
# described above. Note that the puzzle represented by grid does not have to be solvable.

# Example
# grid = [['.', '.', '.', '1', '4', '.', '.', '2', '.'],
#         ['.', '.', '6', '.', '.', '.', '.', '.', '.'],
#         ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
#         ['.', '.', '1', '.', '.', '.', '.', '.', '.'],
#         ['.', '6', '7', '.', '.', '.', '.', '.', '9'],
#         ['.', '.', '.', '.', '.', '.', '8', '1', '.'],
#         ['.', '3', '.', '.', '.', '.', '.', '.', '6'],
#         ['.', '.', '.', '.', '.', '7', '.', '.', '.'],
#         ['.', '.', '.', '5', '.', '.', '.', '7', '.']]
# the output should be
# solution(grid) = true;

# For
# grid = [['.', '.', '.', '.', '2', '.', '.', '9', '.'],
#         ['.', '.', '.', '.', '6', '.', '.', '.', '.'],
#         ['7', '1', '.', '.', '7', '5', '.', '.', '.'],
#         ['.', '7', '.', '.', '.', '.', '.', '.', '.'],
#         ['.', '.', '.', '.', '8', '3', '.', '.', '.'],
#         ['.', '.', '8', '.', '.', '7', '.', '6', '.'],
#         ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
#         ['.', '1', '.', '2', '.', '.', '.', '.', '.'],
#         ['.', '2', '.', '.', '3', '.', '.', '.', '.']]
# the output should be
# solution(grid) = false.

# The given grid is not correct because there are two 1s in the second column. Each column, each row, 
# and each 3 × 3 subgrid can only contain the numbers 1 through 9 one time.

# Input/Output
# [execution time limit] 4 seconds (py3)
# [memory limit] 1 GB
# [input] array.array.char grid
# A 9 × 9 array of characters, in which each character is either a digit from '1' to '9' or a period '.'.

# [output] boolean
# Return true if grid represents a valid Sudoku puzzle, otherwise return false.

def solution(grid):
    n = 9
    hash_map = build_hash_map(n)
    
    for r in range(n):
        for c in range(n):
            cell = grid[r][c]
            if cell != ".":
                is_valid = validate(cell, r, c, hash_map)
                if not is_valid:
                    return False
                    
    return True
    
def build_hash_map(n):
    hash_map = {
        "row": {},
        "col": {},
        "sqr": {},
    }
    
    for i in range(n):
        hash_map["row"][i] = set()
        hash_map["col"][i] = set()
        hash_map["sqr"][i] = set()
        
    return hash_map

def validate(cell, row, col, hash_map):
    sqr = get_sqr_idx(row, col)
    if sqr == -1:
        return False

    if cell in hash_map["row"][row]:
        return False
    
    if cell in hash_map["col"][col]:
        return False
        
    if cell in hash_map["sqr"][sqr]:
        return False
    
    hash_map["row"][row].add(cell)
    hash_map["col"][col].add(cell)
    hash_map["sqr"][sqr].add(cell)
    
    return True
    
def get_sqr_idx(row, col):
    if row >= 0 and row <= 2 and col >= 0 and col <= 2:
        return 0
    elif row >= 0 and row <= 2 and col >= 3 and col <= 5:
        return 1
    elif row >= 0 and row <= 2 and col >= 6 and col <= 8:
        return 2
    elif row >= 3 and row <= 5 and col >= 0 and col <= 2:
        return 3
    elif row >= 3 and row <= 5 and col >= 3 and col <= 5:
        return 4
    elif row >= 3 and row <= 5 and col >= 6 and col <= 8:
        return 5
    elif row >= 6 and row <= 8 and col >= 0 and col <= 2:
        return 6
    elif row >= 6 and row <= 8 and col >= 3 and col <= 5:
        return 7
    elif row >= 6 and row <= 8 and col >= 6 and col <= 8:
        return 8
    else:
        return -1