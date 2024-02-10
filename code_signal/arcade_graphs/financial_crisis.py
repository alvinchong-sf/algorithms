# Once upon a time, in a kingdom far, far away, there lived a King Byteasar IV. His 
# kingdom in the middle of a financial crisis, Byteasar was struggling to keep the 
# economy out of a recession. Unfortunately there was not much he could do, and after 
# much agonizing he came to the only solution: one of his cities had to be demolished,
# since keeping communication active between all the cities is way too expensive.

# It is not yet known if Byteasar chose a city to destroy after careful planning or 
# picked one at random. As a person with a PhD in History and Nobel prize in Computer
# Science, you can solve this mystery! Archaeologists have recently found a manuscript 
# with information about the roads between the cities, that is now stored in the 
# roadRegister matrix. You want to try and remove each city one by one and compare the 
# road registers obtained this way. Thus you'll be able to compare the obtained roads 
# and determine whether the one picked by Byteasar was the best by some criteria.

# Given the roadRegister, return an array of all the road registers obtained after 
# removing each of the cities one by one.

# Example

# For

# roadRegister = [[false, true,  true,  false],
#                 [true,  false, true,  false],
#                 [true,  true,  false, true ],
#                 [false, false, true,  false]]
# the output should be

# solution(roadRegister) = [
#   [[false, true,  false],
#    [true,  false, true ],
#    [false, true,  false]],
#   [[false, true,  false],
#    [true,  false, true ],
#    [false, true,  false]],
#   [[false, true,  false],
#    [true,  false, false],
#    [false, false, false]],
#   [[false, true,  true ],
#    [true,  false, true ],
#    [true,  true,  false]]
# ]
# Here's the city connection that the given catalog represents:


# And here's how the cities are connected with one of the cities destroyed (cities 0 - 3, respectively):


# Input/Output

# [execution time limit] 4 seconds (py3)

# [memory limit] 1 GB

# [input] array.array.boolean roadRegister

# Since cartography was not properly developed in the kingdom, the registers were used 
# instead. A register is stored as a square matrix, with its size equal to the number 
# of cities in the kingdom. If roadRegister[i][j] = true, then there is a road between 
# the ith and the jth cities; the road doesn't exist otherwise.

# It is guaranteed that there are no looping roads, i.e. roads that lead back to the 
# same city it originated from.

# Guaranteed constraints:
# 1 ≤ roadRegister.length ≤ 10,
# roadRegister[0].length = roadRegister.length,
# roadRegister[i][j] = roadRegister[j][i], i ≠ j,
# roadRegister[i][i] = false.

# [output] array.array.array.boolean

# Array of the size roadRegister.length, with each of its elements of size 
# (roadRegister.length - 1) × (roadRegister.length - 1). The ith element of the 
# resulting array should contain the road register of the kingdom with the ith city 
# removed.

# https://app.codesignal.com/arcade/graphs-arcade/kingdom-roads/wkhfpfiT6YynLk2qE/drafts

import copy

def solution(roadRegister):
    n = len(roadRegister)
    result = []
    graph = build_graph(roadRegister, n)
    if len(graph) == 0: return [[]]
    for i in range(n):
        copy_graph = copy.deepcopy(graph)
        del copy_graph[i]
        remove_num(copy_graph, i)
        new_graph = decrement_all_values_by_1(copy_graph, i)
        matrix = build_new_matrix(new_graph)
        result.append(matrix)
        
    return result

def build_new_matrix(graph):
    n = len(graph)
    matrix = [[False for y in range(n)] for x in range(n)]
    
    for row in graph:
        values = graph[row]
        for col in values:
            matrix[row][col] = True
    
    return matrix
    
def decrement_all_values_by_1(graph, target_num):
    new_graph = {}

    for key in graph:
        if key > target_num:
            old_arr = graph[key]
            new_arr = []
            for num in old_arr:
                if num > target_num:
                    new_arr.append(num-1)
                else:
                    new_arr.append(num)
            new_key = key-1
            new_graph[new_key] = new_arr
        else:
            old_arr = graph[key]
            new_arr = []
            for num in old_arr:
                if num > target_num:
                    new_arr.append(num-1)
                else:
                    new_arr.append(num)
            new_graph[key] = new_arr
    
    return new_graph 

def remove_num(graph, i):
    for key in graph:
        new_arr = []
        old_arr = graph[key]
        for num in old_arr:
            if num != i:
                new_arr.append(num)
        
        graph[key] = new_arr

def build_graph(roadRegister, n):
    graph = {}
    
    for i in range(n):
        graph[i] = []
    
    for row in range(n):
        for col in range(n):
            cell = roadRegister[row][col]
            if cell:
                if row in graph:
                    graph[row].append(col)
                else:
                    graph[row] = [col]
    
    return graph