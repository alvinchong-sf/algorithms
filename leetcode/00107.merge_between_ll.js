// 1669. Merge In Between Linked Lists

// You are given two linked lists: list1 and list2 of sizes n and m respectively.

// Remove list1's nodes from the ath node to the bth node, and put list2 in their place.

// The blue edges and nodes in the following figure incidate the result:

var mergeInBetween = function(list1, a, b, list2) {
    
    count = 0;
    let currentNode = list1;
    let prevNode = null;
    let temp1, temp2, tailNode;
    
    while(currentNode) {
        if(count === a) {
            temp1 = prevNode
        }
        if(count === b) {
            temp2 = currentNode.next;
            break;
        }
        count++;
        prevNode = currentNode;
        currentNode = currentNode.next;
    }
    
    currentNode = list2;
    while(currentNode.next) {
        currentNode = currentNode.next
    }
    
    tailNode = currentNode;
    
    temp1.next = list2;
    tailNode.next = temp2;
    return list1;
};

// time o(n + m)
// space o(1)
// https://leetcode.com/problems/merge-in-between-linked-lists/