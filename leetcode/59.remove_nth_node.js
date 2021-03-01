// 19. Remove Nth Node From End of List

// Given the head of a linked list, remove the nth node from the end of the list 
// and return its head.

// Follow up: Could you do this in one pass?

// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

var removeNthFromEnd = function(head, n) {
    // set up 2 pointers i and j
    // move j n times
    // then move i and j simultaneously until j.next is null
    // then we set the node at i .next = node.next.next
    // return the head
    
    let i = head;
    let j = head;
    
    while(n > 0) {
        j = j.next
        n--;
    }
    if(!i.next) return null
    if(!j) {
        head.val = head.next.val;
        head.next = head.next.next
        return head;
    }
    
    while(j.next) {
        i = i.next;
        j = j.next;
    }
    
    i.next = i.next.next
    return head;
};

// time o(n)
// space o(1)

// https://leetcode.com/problems/remove-nth-node-from-end-of-list/