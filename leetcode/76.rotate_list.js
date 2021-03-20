// 61. Rotate List
// Given the head of a linked list, rotate the list to the right by k places.

// Input: head = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]

var rotateRight = function(head, k) {
    // [1,2,3,4,5]
    //      S   F
    if(!head) return null;
    if(!k || !head.next) return head;
    let length = 0;
    let currentNode = head;
    while(currentNode) {                    // o(n)
        length++;
        currentNode = currentNode.next;
    }
    let newRotation = k % length;
    if(!newRotation) return head;
    let slow = head;
    let fast = head;
    while(newRotation > 0) {               // o(1/2n)
        fast = fast.next;
        newRotation--;
    }
    
    while(fast.next) {                    // o(1/2n)
        slow = slow.next;
        fast = fast.next;
    }
    
    let newHead = slow.next;
    slow.next = null;
    fast.next = head;
    return newHead;
};

// time : o(1/2 + 1/2 + 1)n => o(n)
// space: o(1) 
// https://leetcode.com/problems/rotate-list/
