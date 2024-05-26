"""
427. Construct Quad Tree
Given a n * n matrix grid of 0's and 1's only. We want to represent grid with a Quad-Tree.
Return the root of the Quad-Tree representing grid.
A Quad-Tree is a tree data structure in which each internal node has exactly four children. 
Besides, each node has two attributes:
val: True if the node represents a grid of 1's or False if the node represents a grid of 0's. 
Notice that you can assign the val to True or False when isLeaf is False, and both are accepted 
in the answer. isLeaf: True if the node is a leaf node on the tree or False if the node has four children.

class Node {
    public boolean val;
    public boolean isLeaf;
    public Node topLeft;
    public Node topRight;
    public Node bottomLeft;
    public Node bottomRight;
}

We can construct a Quad-Tree from a two-dimensional area using the following steps:
If the current grid has the same value (i.e all 1's or all 0's) set isLeaf True and set val 
to the value of the grid and set the four children to Null and stop.
If the current grid has different values, set isLeaf to False and set val to any value and 
divide the current grid into four sub-grids as shown in the photo.
Recurse for each of the children with the proper sub-grid.

Example 1:
Input: grid = [[0,1],[1,0]]
Output: [[0,1],[1,0],[1,1],[1,1],[1,0]]
Explanation: The explanation of this example is shown below:
Notice that 0 represents False and 1 represents True in the photo representing the Quad-Tree.

Example 2:
Input: grid = [[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0]]
Output: [[0,1],[1,1],[0,1],[1,1],[1,0],null,null,null,null,[1,0],[1,0],[1,1],[1,1]]
Explanation: All values in the grid are not the same. We divide the grid into four sub-grids.
The topLeft, bottomLeft and bottomRight each has the same value.
The topRight have different values so we divide it into 4 sub-grids where each has the same value.
Explanation is shown in the photo below:

Constraints:
    n == grid.length == grid[i].length
    n == 2x where 0 <= x <= 6
https://leetcode.com/problems/construct-quad-tree/description/
Time: O(n^2 * log(n)) | Space: O(n^2)
"""

# Definition for a QuadTree node.
class Node:
    def __init__(self, val, isLeaf, topLeft, topRight, bottomLeft, bottomRight):
        self.val = val
        self.isLeaf = isLeaf
        self.topLeft = topLeft
        self.topRight = topRight
        self.bottomLeft = bottomLeft
        self.bottomRight = bottomRight

class Solution:
    def construct(self, grid: List[List[int]]) -> 'Node':
        n = len(grid)
        return self.dfs(grid, 0, 0, n - 1, n - 1)

    def dfs(self, grid, sr, sc, er, ec):
        is_same, val = self.are_all_same(grid, sr, sc, er, ec)
        node = Node(False, False, None, None, None, None)
        if is_same:
            node.val = val
            node.isLeaf = True
        else:
            new_row = ((er - sr) // 2) + sr
            new_col = ((ec - sc) // 2) + sc            
            node.topLeft = self.dfs(grid, sr, sc, new_row, new_col)
            node.topRight = self.dfs(grid, sr, new_col + 1, new_row, ec)
            node.bottomLeft = self.dfs(grid, new_row + 1, sc, er, new_col)
            node.bottomRight = self.dfs(grid, new_row + 1, new_col + 1, er, ec)
        return node

    def are_all_same(self, grid, sr, sc, er, ec):
        ones, zeroes = False, False
        for row in range(sr, er + 1):
            for col in range(sc, ec + 1):
                if grid[row][col] == 1:
                    ones = True
                else:
                    zeroes = True
                if ones and zeroes:
                    return (False, False)
        return (True, True if ones else False)