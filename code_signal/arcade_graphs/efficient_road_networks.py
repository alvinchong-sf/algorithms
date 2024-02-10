# Once upon a time, in a kingdom far, far away, there lived a King Byteasar III. 
# As a smart and educated ruler, he did everything in his (unlimited) power to make 
# every single system within his kingdom efficient. The king went down in history as a 
# great road builder: during his reign a great number of roads were built, and the road 
# system he created was the most efficient during those dark times.

# When you started learning about Byteasar's III deeds in your history classes, a 
# creeping doubt crawled into the back of your mind: what if the famous king wasn't 
# so great after all? According to the most recent studies, there were n cities in 
# Byteasar's kingdom, connected by two-way roads. You managed to get information about 
# these roads from the university library, so now you can write a function that will 
# determine whether the road system in Byteasar's kingdom was efficient or not.

# A road system is considered efficient if it is possible to travel from any city to 
# any other city by traversing at most 2 roads.

# Example

# For n = 6 and

# roads = [[3, 0], [0, 4], [5, 0], [2, 1],
#           [1, 4], [2, 3], [5, 2]]
# the output should be
# solution(n, roads) = true.

# Here's how the road system can be represented:


# For n = 6 and

# roads = [[0, 4], [5, 0], [2, 1],
#           [1, 4], [2, 3], [5, 2]]
# the output should be
# solution(n, roads) = false.

# Here's how the road system can be represented:


# As you can see, it's only possible to travel from city 3 to city 4 by traversing at 
# least 3 roads.

# Input/Output

# [execution time limit] 7 seconds (py3)

# [memory limit] 1 GB

# [input] integer n

# The number of cities in the kingdom.

# Guaranteed constraints:
# 1 ≤ n ≤ 250.

# [input] array.array.integer roads

# Array of roads in the kingdom. Each road is given as a pair [cityi, cityj], 
# where 0 ≤ cityi, cityj < n and cityi ≠ cityj. It is guaranteed that no road is 
# given twice.

# Guaranteed constraints:
# 0 ≤ roads.length ≤ 35000,
# roads[i].length = 2,
# 0 ≤ roads[i][j] < n.

# [output] boolean

# true if the road system is efficient, false otherwise.

# https://app.codesignal.com/arcade/graphs-arcade/kingdom-roads/ty4w8WJZ4sZSBNK5Q

def solution(n, roads):
    graph = {}
    visited_set = set()

    for i in range(n):
       graph[i] = []
    
    for start, end in roads:
        graph[start].append(end)
        graph[end].append(start)
        
    for i in range(n-1):
        for j in range(i+1, n):
            is_not_efficient = not dfs(graph, i, j, visited_set, 1)
            if is_not_efficient: return False
            
    return True
    
def dfs(graph, start_city, end_city, visited_set, steps):
    if steps > 2: return False
    if start_city in visited_set: return False
    
    visited_set.add(start_city)
    arr = graph[start_city]
    
    for city in arr:
        if city == end_city: 
            visited_set.remove(start_city)
            return True
        is_efficient = dfs(graph, city, end_city, visited_set, steps + 1)
        if is_efficient: 
            visited_set.remove(start_city)
            return True
        
    visited_set.remove(start_city)
        
    return False