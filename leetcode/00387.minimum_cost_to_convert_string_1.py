"""
2976. Minimum Cost to Convert String I
You are given two 0-indexed strings source and target, both of length n and consisting of lowercase 
English letters. You are also given two 0-indexed character arrays original and changed, and an 
integer array cost, where cost[i] represents the cost of changing the character original[i] to 
the character changed[i]. You start with the string source. In one operation, you can pick a 
character x from the string and change it to the character y at a cost of z if there exists any 
index j such that cost[j] == z, original[j] == x, and changed[j] == y.
Return the minimum cost to convert the string source to the string target using any number of 
operations. If it is impossible to convert source to target, return -1.
Note that there may exist indices i, j such that original[j] == original[i] and changed[j] == changed[i].

Example 1:
Input: source = "abcd", target = "acbe", original = ["a","b","c","c","e","d"], changed = ["b","c","b","e","b","e"], cost = [2,5,5,1,2,20]
Output: 28
Explanation: To convert the string "abcd" to string "acbe":
- Change value at index 1 from 'b' to 'c' at a cost of 5.
- Change value at index 2 from 'c' to 'e' at a cost of 1.
- Change value at index 2 from 'e' to 'b' at a cost of 2.
- Change value at index 3 from 'd' to 'e' at a cost of 20.
The total cost incurred is 5 + 1 + 2 + 20 = 28.
It can be shown that this is the minimum possible cost.

Example 2:
Input: source = "aaaa", target = "bbbb", original = ["a","c"], changed = ["c","b"], cost = [1,2]
Output: 12
Explanation: To change the character 'a' to 'b' change the character 'a' to 'c' at a cost of 1, followed by changing the character 'c' to 'b' at a cost of 2, for a total cost of 1 + 2 = 3. To change all occurrences of 'a' to 'b', a total cost of 3 * 4 = 12 is incurred.

Example 3:
Input: source = "abcd", target = "abce", original = ["a"], changed = ["e"], cost = [10000]
Output: -1
Explanation: It is impossible to convert source to target because the value at index 3 cannot be changed from 'd' to 'e'.

Constraints:
    1 <= source.length == target.length <= 105
    source, target consist of lowercase English letters.
    1 <= cost.length == original.length == changed.length <= 2000
    original[i], changed[i] are lowercase English letters.
    1 <= cost[i] <= 106
    original[i] != changed[i]

https://leetcode.com/problems/minimum-cost-to-convert-string-i/description
"""

# TODO Solution is based on brute force DFS. Would need to optimize to apply Floyd-warshall algorithm
class Solution:
    def minimumCost(
        self, 
        source: str, 
        target: str, 
        original: List[str], 
        changed: List[str], 
        cost: List[int]
    ) -> int:
        min_cost = 0
        graph = self.build_graph(original, changed, cost)
        for i, s_char in enumerate(source):
            t_char = target[i]
            if s_char != t_char:
                curr_cost = self.dfs(s_char, t_char, 0, graph, set())
                if curr_cost == float("inf"): return -1
                min_cost += curr_cost
        return min_cost

    def dfs(self, char, t_char, curr_cost, graph, visited):
        if char in visited: return float("inf")
        if char == t_char: return curr_cost
        visited.add(char)
        min_cost = float("inf")
        if char not in graph: return min_cost
        for x, y in graph[char]:
            cost = self.dfs(x, t_char, y, graph, visited)
            min_cost = min(min_cost, cost)
        visited.remove(char)
        return min_cost + curr_cost

    def build_graph(self, original, changed, cost):
        n = len(original)
        graph = {}
        for i in range(n):
            char1, char2, num = original[i], changed[i], cost[i]
            if char1 not in graph:
                graph[char1] = []
            graph[char1].append((char2, num))
        return graph