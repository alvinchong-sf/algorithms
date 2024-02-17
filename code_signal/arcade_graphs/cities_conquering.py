# Once upon a time, in a kingdom far, far away, there lived a King Byteasar VII. Since he 
# reigned during the Dark Times, very little is known about his reign. It is known that when 
# he ascended the throne, there were n cities in the kingdom, connected by several two-way 
# roads. But before the young king managed to start ruling, an enemy arrived at the gates: 
# the evil emperor Bugoleon invaded the kingdom and started to conquer the cities, advancing 
# day after day.

# It is not known how long it took to capture each of the cities, but you've recently 
# discovered an ancient manuscript describing that each day, Bugoleon captured all the cities 
# that had at most 1 neighboring free city at that given moment. Knowing this fact, the 
# number of cities n and all the roads of the kingdom, determine in how many days each of the
# cities was conquered.

# Example

# For n = 10 and

# roads = [[1, 0], [1, 2], [8, 5], [9, 7], 
#          [5, 6], [5, 4], [4, 6], [6, 7]]
# the output should be
# solution(n, roads) = [1, 2, 1, 1, -1, -1, -1, 2, 1, 1].

# Here's how the cities were conquered:


# Input/Output

# [execution time limit] 4 seconds (py3)

# [memory limit] 1 GB

# [input] integer n

# The number of cities in the kingdom.

# Guaranteed constraints:
# 1 ≤ n ≤ 100.

# [input] array.array.integer roads

# Array of two-way roads, where each road is given in the format [city1, city2], meaning that 
# city1 and city2 are connected. It is guaranteed that there is at most one road between two 
# cities, and no road is given twice.

# Guaranteed constraints:
# 0 ≤ roads.length ≤ n · (n - 1) / 2,
# roads[i].length = 2,
# roads[i][0] ≠ roads[i][1],
# 0 ≤ roads[i][j] < n.

# [output] array.integer

# An array of length n, there the ith element is the number of days it took to conquer the 
# ith city, or -1 if the city wasn't conquered.

# https://app.codesignal.com/arcade/graphs-arcade/kingdom-roads/pmmMeP4JkqgKbzyTy

def solution(n, roads):
    results = [-1 for idx in range(n)]
    anymore_left_to_conquer = True
    days = 1
    
    # build the graph
    graph = build_graph(n, roads)
        
    while anymore_left_to_conquer:
        anymore_left_to_conquer = False
        conquered = []
        
        # conquer the cities
        conquer_cities(graph, conquered, results, days)
        
        # update conquered cities in hash map and returns if conquered everything possible
        anymore_left_to_conquer = update_map(graph, conquered, n)
        
        days += 1

    return results
    
def update_map(graph, conquered, n):
    anymore_left_to_conquer = False
    for num in range(0, n):
        if num in graph and len(graph[num]) == 0:
            del graph[num]

    for key2 in graph:
        new_arr = []
        val2 = graph[key2]
        for v in val2:
            if v not in conquered:
                new_arr.append(v)
        graph[key2] = new_arr
        if len(new_arr) < 2:
            anymore_left_to_conquer = True
            
    return anymore_left_to_conquer
    
def conquer_cities(graph, conquered, results, days):
    for city in graph:
        cities = graph[city]
        if len(cities) < 2:
            conquered.append(city)
            results[city] = days
            if len(cities) > 0:
                cities.pop()

def build_graph(n, roads):
    graph = {}
    for i in range(n):
        graph[i] = []
    
    for x, y in roads:
        graph[x].append(y)
        graph[y].append(x)
        
    return graph