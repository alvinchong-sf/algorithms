// 876. Middle of the Linked List

// Given a non-empty, singly linked list with head node head, return a middle 
// node of linked list.

// If there are two middle nodes, return the second middle node.

var middleNode = function(head) {
    // l1 = [1,2,3,4,5,6,7]  // we traverse until j.next is null; for odd number element
    //             i
    //                   j
    // l2 = [1,2,3,4,5,6,7,8]  // we traverse until j or j.next is null than we can return i
    //               i
    //                       j
    // l3 = [1,2]
    // l4 = null
    
    let slow = head;
    let fast = head;
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};

// time o(n)
// space o(1)

// https://leetcode.com/problems/middle-of-the-linked-list/