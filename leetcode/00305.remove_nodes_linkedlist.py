# 2487. Remove Nodes From Linked List
# You are given the head of a linked list. Remove every node which has a node with a greater value 
# anywhere to the right side of it. Return the head of the modified linked list.

# Example 1:
# Input: head = [5,2,13,3,8]
# Output: [13,8]
# Explanation: The nodes that should be removed are 5, 2 and 3.
# - Node 13 is to the right of node 5.
# - Node 13 is to the right of node 2.
# - Node 8 is to the right of node 3.

# Example 2:
# Input: head = [1,1,1,1]
# Output: [1,1,1,1]
# Explanation: Every node has value 1, so no nodes are removed.

# Constraints:
#     The number of the nodes in the given list is in the range [1, 105].
#     1 <= Node.val <= 105

# https://leetcode.com/problems/remove-nodes-from-linked-list/description
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

# Time: O(n) | Space: O(n)
class Solution:
    def removeNodes(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if head is None or head.next is None:
            return head
        
        monotonic_stack = []
        current = head
        while current:
            while monotonic_stack and monotonic_stack[-1].val < current.val:
                monotonic_stack.pop()
            
            monotonic_stack.append(current)
            next_node = current.next
            current.next = None
            current = next_node
        
        for i in range(0, len(monotonic_stack) - 1):
            monotonic_stack[i].next = monotonic_stack[i + 1]
        
        return monotonic_stack[0]