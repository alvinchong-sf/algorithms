// 24. Swap Nodes in Pairs

// Given a linked list, swap every two adjacent nodes and return its head.

// Input: head = [1,2,3,4]
// Output: [2,1,4,3]

var swapPairs = function(head) {
    if(!head || !head.next) return head;
    
    // 1->2->3->4
    //           c
    let currentNode = head;
    let queue = [];
    while(currentNode && currentNode.next) {
        queue.push(currentNode.next)
        queue.push(currentNode)
        
        currentNode = currentNode.next.next;
    }
    
    if(currentNode) queue.push(currentNode);
    
    for(let i = 0; i < queue.length; i++) {
        if(i === queue.length - 1) {
            queue[i].next = null;
            return queue[0];
        }
        queue[i].next = queue[i + 1];
    }
};

// time o(n) linear
// space o(n) linear because of queue array
// https://leetcode.com/problems/swap-nodes-in-pairs/