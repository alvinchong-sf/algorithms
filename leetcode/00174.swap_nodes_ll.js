// 1721. Swapping Nodes in a Linked List

// You are given the head of a linked list, and an integer k.

// Return the head of the linked list after swapping the values of the kth node 
// from the beginning and the kth node from the end (the list is 1-indexed).

// Example 1:
// Input: head = [1,2,3,4,5], k = 2
// Output: [1,4,3,2,5]

var swapNodes = function(head, k) {
    if(!head.next) return head;
    
    let size = 0;
    let current = head;
    while(current) {
        size++;
        current = current.next;
    }
    
    if(size === 2) {
        node1 = head;
        node2 = head.next;
        node2.next = node1
        node1.next = null
        return node2
    }
    
    let node1Curr = null
    let node2Curr = null
    
    let count = 1;
    let endingK = size - k + 1;
    let prevNode = null;
    let currNode = head;
    
    while(currNode) {
        if(count === k) node1Curr = currNode;
        if (count === endingK) node2Curr = currNode;
        prevNode = currNode;
        currNode = currNode.next;
        count++;
    }

    [ node1Curr.val, node2Curr.val ] = [ node2Curr.val, node1Curr.val ]    
    return head;
};

// time o(n) | space o(1)
// https://leetcode.com/problems/swapping-nodes-in-a-linked-list/
