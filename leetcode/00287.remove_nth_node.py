# 19. Remove Nth Node From End of List

# Given the head of a linked list, remove the nth node from the end of the 
# list and return its head.

# Example 1:
# Input: head = [1,2,3,4,5], n = 2
# Output: [1,2,3,5]

# Example 2:
# Input: head = [1], n = 1
# Output: []

# Example 3:
# Input: head = [1,2], n = 1
# Output: [1]

# Constraints:
# The number of nodes in the list is sz.
# 1 <= sz <= 30
# 0 <= Node.val <= 100
# 1 <= n <= sz

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        next_node, current_node, previous_node = head, head, None
        while n > 1:
            next_node = next_node.next
            n -= 1

        while next_node.next:
            next_node = next_node.next
            previous_node = current_node
            current_node = current_node.next
        
        if previous_node is None:
            return current_node.next
        else:
            previous_node.next = current_node.next
            return head