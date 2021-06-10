// 143. Reorder List

// You are given the head of a singly linked-list. The list can be represented as:

// L0 → L1 → … → Ln - 1 → Ln
// Reorder the list to be on the following form:

// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// You may not modify the values in the list's nodes. Only nodes themselves may be changed.

// Example 1:
// Input: head = [1,2,3,4]
// Output: [1,4,2,3]

var reorderList = function(head) {
    if(!head || !head.next) return head;
    const arr = [];
    
    let currentNode = head;
    while(currentNode) {
        arr.push(currentNode);
        currentNode = currentNode.next;
    }
    
    for(let i = 0; i < arr.length; i++) {
        let j = arr.length - 1 - i;
        if(i >= j) {
            arr[i].next = null;
            break;
        }
        arr[i].next = arr[j];
        arr[j].next = arr[i + 1];
    }

    return head;
};

// time o(n) + space o(n)
// https://leetcode.com/problems/reorder-list/