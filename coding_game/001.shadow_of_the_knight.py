# https://www.codingame.com/ide/puzzle/shadows-of-the-knight-episode-1

import sys
import math

# Auto-generated code below aims at helping you parse
# the standard input according to the problem statement.

# w: width of the building.
# h: height of the building.
w, h = [int(i) for i in input().split()]
n = int(input())  # maximum number of turns before game over.
x0, y0 = [int(i) for i in input().split()]
curr_row, curr_col = y0, x0
start_row, start_col = 0, 0
end_row, end_col = h-1, w-1
# game loop
while True:
    bomb_dir = input()  # the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)
    # dr, dc = hash_map[bomb_dir]
    change_in_row, change_in_col = False, False

    if bomb_dir == "U" or bomb_dir == "UL" or bomb_dir == "UR":
        end_row = curr_row - 1
        change_in_row = True
    
    if bomb_dir == "D" or bomb_dir == "DL" or bomb_dir == "DR":
        start_row = curr_row + 1
        change_in_row = True

    if bomb_dir == "L" or bomb_dir == "UL" or bomb_dir == "DL":
        end_col = curr_col - 1
        change_in_col = True
    
    if bomb_dir == "R" or bomb_dir == "UR" or bomb_dir == "DR":
        start_col = curr_col + 1
        change_in_col = True

    if change_in_row:
        curr_row = ((end_row - start_row) // 2) + start_row
    
    if change_in_col:
        curr_col = ((end_col - start_col) // 2) + start_col

    print(f"{curr_col} {curr_row}")