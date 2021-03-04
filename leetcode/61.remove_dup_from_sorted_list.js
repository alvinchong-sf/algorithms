// 83. Remove Duplicates from Sorted List

// Given the head of a sorted linked list, delete all duplicates such that each 
// element appears only once. Return the linked list sorted as well.

// Input: head = [1,1,2]
// Output: [1,2]

// Input: head = [1,1,2,3,3]
// Output: [1,2,3]

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var deleteDuplicates = function(head) {
    let currentNode = head;
    
    while(currentNode && currentNode.next) {
        let nextNode = currentNode.next;
        while(nextNode && currentNode.val === nextNode.val) {
            nextNode = nextNode.next;
        }
        currentNode.next = nextNode;
        currentNode = nextNode;
    }
    return head;
};

