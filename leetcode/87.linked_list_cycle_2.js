// 142. Linked List Cycle II

// Given a linked list, return the node where the cycle begins. 
// If there is no cycle, return null.

// There is a cycle in a linked list if there is some node in the list that can 
// be reached again by continuously following the next pointer. Internally, 
// pos is used to denote the index of the node that tail's next pointer is 
// connected to. Note that pos is not passed as a parameter.

// Notice that you should not modify the linked list.

var detectCycle = function(head) {
    // 3 -> 2 -> 0
    //      |    v
    //      |-- -4
    if(!head || !head.next || !head.next.next) return null;
    
    let slow = head.next;
    let fast = head.next.next;
    
    while(fast !== slow) {              // if no cycle linear time o(n)
        slow = slow.next;               // if there is cycle linear time o(n + m)
        if(fast.next === null) return null;
        fast = fast.next.next;
        if(fast === null) return null;
    }
    slow = head;
    while(fast !== slow) {              // 
        slow = slow.next;
        fast = fast.next;
    }
    return slow;
};

// time o(n)
// space o(1)
// https://leetcode.com/problems/linked-list-cycle-ii/