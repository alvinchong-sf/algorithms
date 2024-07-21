"""
2392. Build a Matrix With Conditions
You are given a positive integer k. You are also given:
    a 2D integer array rowConditions of size n where rowConditions[i] = [abovei, belowi], and
    a 2D integer array colConditions of size m where colConditions[i] = [lefti, righti].

The two arrays contain integers from 1 to k. You have to build a k x k matrix that contains each 
of the numbers from 1 to k exactly once. The remaining cells should have the value 0.

The matrix should also satisfy the following conditions:
    The number abovei should appear in a row that is strictly above the row at which the number 
    below i appears for all i from 0 to n - 1.
    The number lefti should appear in a column that is strictly left of the column at which the 
    number righti appears for all i from 0 to m - 1.

Return any matrix that satisfies the conditions. If no answer exists, return an empty matrix.

Example 1:
Input: k = 3, rowConditions = [[1,2],[3,2]], colConditions = [[2,1],[3,2]]
Output: [[3,0,0],[0,0,1],[0,2,0]]
Explanation: The diagram above shows a valid example of a matrix that satisfies all the conditions.
The row conditions are the following:
- Number 1 is in row 1, and number 2 is in row 2, so 1 is above 2 in the matrix.
- Number 3 is in row 0, and number 2 is in row 2, so 3 is above 2 in the matrix.
The column conditions are the following:
- Number 2 is in column 1, and number 1 is in column 2, so 2 is left of 1 in the matrix.
- Number 3 is in column 0, and number 2 is in column 1, so 3 is left of 2 in the matrix.
Note that there may be multiple correct answers.

Example 2:
Input: k = 3, rowConditions = [[1,2],[2,3],[3,1],[2,3]], colConditions = [[2,1]]
Output: []
Explanation: From the first two conditions, 3 has to be below 1 but the third conditions needs 3 to be above 1 to be satisfied.
No matrix can satisfy all the conditions, so we return the empty matrix.

Constraints:
    2 <= k <= 400
    1 <= rowConditions.length, colConditions.length <= 104
    rowConditions[i].length == colConditions[i].length == 2
    1 <= abovei, belowi, lefti, righti <= k
    abovei != belowi
    lefti != righti

https://leetcode.com/problems/build-a-matrix-with-conditions
"""

class Solution:
    def buildMatrix(self, k: int, rowConditions: List[List[int]], colConditions: List[List[int]]) -> List[List[int]]:
        row_graph = self.build_graph(k, rowConditions)
        col_graph = self.build_graph(k, colConditions)
        row_visited, row_cycle, row_ordering = set(), set(), []
        col_visited, col_cycle, col_ordering = set(), set(), []

        for row in row_graph:
            has_cycle = not self.topological_sort(row, row_graph, row_visited, row_cycle, row_ordering)
            if has_cycle: return []
        for col in col_graph:
            has_cycle = not self.topological_sort(col, col_graph, col_visited, col_cycle, col_ordering)
            if has_cycle: return []

        row_ordering.reverse()
        col_ordering.reverse()
        result = [[0 for _ in range(k)] for _ in range(k)]
        hash_map = {}
        for i in range(1, k + 1):
            hash_map[i] = [-1, -1]
        for i1, r in enumerate(row_ordering):
            hash_map[r][0] = i1
        for i2, c in enumerate(col_ordering):
            hash_map[c][1] = i2
        for num, (x, y) in hash_map.items():
            result[x][y] = num
        return result

    def topological_sort(self, idx, graph, visited, cycle, ordering):
        if idx in cycle: return False
        if idx in visited: return True
        cycle.add(idx)

        for num in graph[idx]:
            has_cycle = not self.topological_sort(num, graph, visited, cycle, ordering)
            if has_cycle: return False

        cycle.remove(idx)
        visited.add(idx)
        ordering.append(idx)
        return True

    def build_graph(self, k, arr):
        graph = {}
        for i in range(1, k + 1):
            graph[i] = []
        for r, c in arr:
            graph[r].append(c)
        return graph