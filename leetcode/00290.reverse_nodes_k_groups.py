# 25. Reverse Nodes in k-Group
# Given the head of a linked list, reverse the nodes of the list k at a time, and return the 
# modified list. k is a positive integer and is less than or equal to the length of the 
# linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, 
# should remain as it is. You may not alter the values in the list's nodes, only nodes 
# themselves may be changed.

# Example 1:
# Input: head = [1,2,3,4,5], k = 2
# Output: [2,1,4,3,5]

# Example 2:
# Input: head = [1,2,3,4,5], k = 3
# Output: [3,2,1,4,5]
 
# Constraints:
# The number of nodes in the list is n.
# 1 <= k <= n <= 5000
# 0 <= Node.val <= 1000

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

# https://leetcode.com/problems/reverse-nodes-in-k-group/description/
# Time: O(n) | Space: O(1)
class Solution:
    def reverseKGroup(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        if head is None or head.next is None:
            return head
        
        prev_node = None
        result_head = None
        current_node = head

        while current_node:
            start_node, end_node = current_node, current_node
            count = 1

            while end_node.next and count < k:
                end_node = end_node.next
                count += 1
            
            if count != k:
                return result_head
            
            if prev_node:
                prev_node.next = None
            next_node = end_node.next
            end_node.next = None

            new_head, new_tail = self.reverse_nodes(start_node)

            if prev_node:
                prev_node.next = new_head
            else:
                result_head = new_head
            
            new_tail.next = next_node
            prev_node = new_tail
            current_node = next_node

        return result_head

    def reverse_nodes(self, start_node):
        head = start_node
        prev = None

        while head:
            next_node = head.next
            head.next = prev
            prev = head
            head = next_node
        
        return (prev, start_node)
