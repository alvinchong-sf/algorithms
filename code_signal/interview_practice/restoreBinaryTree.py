# Note: Your solution should have O(inorder.length) time complexity, since this is what you will 
# be asked to accomplish in an interview.

# Let's define inorder and preorder traversals of a binary tree as follows:
#     Inorder traversal first visits the left subtree, then the root, then its right subtree;
#     Preorder traversal first visits the root, then its left subtree, then its right subtree.

# For example, if tree looks like this:
#     1
#    / \
#   2   3
#  /   / \
# 4   5   6

# then the traversals will be as follows:
#     Inorder traversal: [4, 2, 1, 5, 3, 6]
#     Preorder traversal: [1, 2, 4, 3, 5, 6]

# Given the inorder and preorder traversals of a binary tree t, but not t itself, restore t and return it.

# Example
#     For inorder = [4, 2, 1, 5, 3, 6] and preorder = [1, 2, 4, 3, 5, 6], the output should be

#     solution(inorder, preorder) = {
#         "value": 1,
#         "left": {
#             "value": 2,
#             "left": {
#                 "value": 4,
#                 "left": null,
#                 "right": null
#             },
#             "right": null
#         },
#         "right": {
#             "value": 3,
#             "left": {
#                 "value": 5,
#                 "left": null,
#                 "right": null
#             },
#             "right": {
#                 "value": 6,
#                 "left": null,
#                 "right": null
#             }
#         }
#     }

#     For inorder = [2, 5] and preorder = [5, 2], the output should be

#     solution(inorder, preorder) = {
#         "value": 5,
#         "left": {
#             "value": 2,
#             "left": null,
#             "right": null
#         },
#         "right": null
#     }

# Input/Output
#     [execution time limit] 4 seconds (py3)
#     [memory limit] 1 GB
#     [input] array.integer inorder
#     An inorder traversal of the tree. It is guaranteed that all numbers in the tree are pairwise distinct.

#     Guaranteed constraints:
#     1 ≤ inorder.length ≤ 2 · 103,
#     -105 ≤ inorder[i] ≤ 105.

#     [input] array.integer preorder

#     A preorder traversal of the tree.

#     Guaranteed constraints:
#     preorder.length = inorder.length,
#     -105 ≤ preorder[i] ≤ 105.

#     [output] tree.integer

#     The restored binary tree.

class Tree(object):
    def __init__(self, x):
        self.value = x
        self.left = None
        self.right = None

def solution(inorder, preorder):
    n = len(preorder)
    if n == 0:
        return None
    if n == 1:
        return Tree(preorder[0])
    
    new_num = preorder[0]
    new_head = Tree(new_num)
    m = -1

    for mid, num in enumerate(inorder):
        if num == new_num:
            m = mid
            break
    
    left_inorder = inorder[0:m]
    right_inorder = inorder[m+1:]
    left_preorder, right_preorder = get_preorder_arr(left_inorder, right_inorder, preorder, n)
    
    new_head.left = solution(left_inorder, left_preorder)
    new_head.right = solution(right_inorder, right_preorder)
    
    return new_head
    
def get_preorder_arr(left_inorder, right_inorder, preorder, n):
    left = []
    right = []
    
    for i in range(n):
        if preorder[i] in left_inorder:
            left.append(preorder[i])
        
        if preorder[i] in right_inorder:
            right.append(preorder[i])
    
    return (left, right)