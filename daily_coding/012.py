# Sales Path
# The car manufacturer Honda holds their distribution system in the form of a tree 
# (not necessarily binary). The root is the company itself, and every node in the tree represents a 
# car distributor that receives cars from the parent node and ships them to its children nodes. 
# The leaf nodes are car dealerships that sell cars direct to consumers. In addition, every node 
# holds an integer that is the cost of shipping a car to it.


# A path from Honda’s factory to a car dealership, which is a path from the root to a leaf in the 
# tree, is called a Sales Path. The cost of a Sales Path is the sum of the costs for every node in 
# the path. For example, in the tree above one Sales Path is 0→3→0→10, and its cost is 13 (0+3+0+10).

# Honda wishes to find the minimal Sales Path cost in its distribution tree. Given a node rootNode, 
# write a function getCheapestCost that calculates the minimal Sales Path cost in the tree.

# Implement your function in the most efficient manner and analyze its time and space complexities.

# For example:

# Given the rootNode of the tree in diagram above

# Your function would return:

# 7 since it’s the minimal Sales Path cost (there are actually two Sales Paths in the tree whose cost 
# is 7: 0→6→1 and 0→3→2→1→1)

class Node:
  def __init__(self, cost):
    self.cost = cost
    self.children = []
    self.parent = None

def get_cheapest_cost(rootNode):
  if rootNode is None:
    return 0
  
  if not rootNode.children:
    return rootNode.cost
  
  min_sales = float("inf")

  for childNode in rootNode.children:
    min_sales = min(get_cheapest_cost(childNode), min_sales)
    
  return rootNode.cost + min_sales
    
    
node0 = Node(0)

node1 = Node(5)
node2 = Node(3)
node3 = Node(6)

node4 = Node(4)
node5 = Node(2)
node6 = Node(0)
node7 = Node(1)
node8 = Node(5)

node9 = Node(1)
node10 = Node(10)

node11 = Node(1)

node0.children = [node1, node2, node3]
node1.children = [node4]
node2.children = [node5, node6]
node3.children = [node7, node8]
node5.children = [node9]
node6.children = [node10]
node9.children = [node11]

res = get_cheapest_cost(node0)
print(res)