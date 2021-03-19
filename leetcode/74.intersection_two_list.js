// 160. Intersection of Two Linked Lists
// Given the heads of two singly linked-lists headA and headB, return the node at 
// which the two lists intersect. If the two linked lists have no intersection 
// at all, return null.

// For example, the following two linked lists begin to intersect at node

// Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5]
// Output: Intersected at '8'

// function ListNode(val) {
//     this.val = val;
//     this.next = null;
// }

var getIntersectionNode = function(headA, headB) {
    let set = new Set();
    
    let currentNode = headA;
    while(currentNode) {
        set.add(currentNode);
        currentNode = currentNode.next;
    }
    let node2 = headB;
    while(node2) {
        if(set.has(node2)) return node2;
        node2 = node2.next;
    }
    return null;
};

// time o(n)
// space o(n)

// https://leetcode.com/problems/intersection-of-two-linked-lists/

///////////////////////////////////////////////////////////////////////

var getIntersectionNode = function(headA, headB) {
    let node1 = headA;
    let node2 = headB;
    
    while(node1 !== node2) {
        if(node1 === null) {
            node1 = headB;
        } else {
            node1 = node1.next;
        }
        if(node2 === null) {
            node2 = headA;
        } else {
            node2 = node2.next;
        }
    }
    return node1;
};

// time o(n) 
// space o(1)
