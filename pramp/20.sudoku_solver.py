HashMap = dict[str, dict[int, set[str]]]

def sudoku_solve(board: list[list[str]]) -> bool:
  n = 9
  hash_map: HashMap = { 'rows': {}, 'cols': {}, 'sqrs': {} }
  if not build_map(board, n, hash_map):
    return False
  
  start_row, start_col = get_coords(board, n)
  return dfs(board, start_row, start_col, hash_map, n)

def dfs(board: list[list[str]], row: int, col: int, hash_map: HashMap, n: int) -> bool:
  if row >= n or col >= n: return True
  if board[row][col] != ".": return False

  for i in range(1, n+1):
    str_num = str(i)
    is_valid_number = is_valid_num(str_num, hash_map, row, col)
    if is_valid_number:
      is_updated = update_board_map(board, hash_map, row, col, str_num, 'add')
      if not is_updated: return False
      
      next_row, next_col = get_coords(board, n)
      
      is_valid_board = dfs(board, next_row, next_col, hash_map, n)
      if is_valid_board: return True
      
      is_updated = update_board_map(board, hash_map, row, col, str_num, 'del')
      if not is_updated: return False
      
  return False

def update_board_map(
    board: list[list[str]], 
    hash_map: HashMap, 
    row: int, 
    col: int, 
    str_num: str, 
    ops: str
) -> bool:
  sq_idx = get_sq_idx(row, col)
  row_set = hash_map['rows'][row]
  col_set = hash_map['cols'][col]
  sq_set = hash_map['sqrs'][sq_idx]
  
  if ops == "add":
    if (str_num in row_set) or (str_num in col_set) or (str_num in sq_set):
      return False
    
    board[row][col] = str_num
    row_set.add(str_num)
    col_set.add(str_num)
    sq_set.add(str_num)
    
  if ops == "del":
    board[row][col] = "."
    row_set.remove(str_num)
    col_set.remove(str_num)
    sq_set.remove(str_num)
  
  return True

def is_valid_num(num: str, hash_map: HashMap, row: int, col: int) -> bool:
  sq_idx = get_sq_idx(row, col)
  row_set = hash_map['rows'][row]
  col_set = hash_map['cols'][col]
  sq_set = hash_map['sqrs'][sq_idx]
  return False if (num in row_set) or (num in col_set) or (num in sq_set) else True
  

def get_coords(board: list[list[str]], n: int) -> tuple[int]:
  for row in range(n):
    for col in range(n):
      if board[row][col] == ".":
        return (row, col)
  
  return (n, n)

def build_map(board: list[list[str]], n: int, hash_map: HashMap) -> bool:
  for i in range(n):
    hash_map['rows'][i] = set()
    hash_map['cols'][i] = set()
    hash_map['sqrs'][i] = set()
  
  for row in range(n):
    for col in range(n):
      cell = board[row][col]
      if cell != ".":
        sq_idx = get_sq_idx(row, col)
        
        row_set = hash_map['rows'][row]
        col_set = hash_map['cols'][col]
        sq_set = hash_map['sqrs'][sq_idx]
        
        if (cell in row_set) or (cell in col_set) or (cell in sq_set):
          return False
        
        row_set.add(cell)
        col_set.add(cell)
        sq_set.add(cell)
        
  return True


def get_sq_idx(row: int, col: int) -> int:
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
  
# board3 = [
#   [".","2","3","4","5","6","7","8","9"],
#   ["1",".",".",".",".",".",".",".","."],
#   [".",".",".",".",".",".",".",".","."],
#   [".",".",".",".",".",".",".",".","."],
#   [".",".",".",".",".",".",".",".","."],
#   [".",".",".",".",".",".",".",".","."],
#   [".",".",".",".",".",".",".",".","."],
#   [".",".",".",".",".",".",".",".","."],
#   [".",".",".",".",".",".",".",".","."]
# ]

# result = sudoku_solve(board3)
# print(result)