// 206. Reverse Linked List

// Given the head of a singly linked list, reverse the list, and return 
// the reversed list.

// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

var reverseList = function(head) {
    if(!head) return null;
    let arr = [];
    let currentNode = head;
    while(currentNode) {
        arr.push(currentNode);
        currentNode = currentNode.next;
    }
    arr[0].next = null;
    for(let i = 1; i < arr.length; i++) {
        let prevNode = arr[i - 1];
        let currNode = arr[i];
        currNode.next = prevNode;
    }
    return arr[arr.length - 1];
};

// time o(n)
// space o(n)
////////////////////////////////////////////////////////////////////////////////////

var reverseList = function(head) { 
    let prevNode = null;                 
    let currentNode = head;               
    while(currentNode) {
        let nextNode = currentNode.next;
        currentNode.next = prevNode;
        prevNode = currentNode;    
        currentNode = nextNode;
    }
    return prevNode;
};

// time o(n)
// space o(1) extra
// https://leetcode.com/problems/reverse-linked-list/


// recursive solution
var reverseList = function(head) {
    if(!head || !head.next) return head;
    let currNode = head;
    let prevNode = null;
    let lastNode = null;
    
    const dfs = (currentNode, prevNode) => {
        if(!currentNode.next) {
            currentNode.next = prevNode;
            lastNode = currentNode;
            return;
        }
        
        let nextNode = currentNode.next;
        currentNode.next = prevNode;
        prevNode = currentNode;
        
        dfs(nextNode, currentNode);
    }
    
    dfs(currNode, prevNode);
    return lastNode;
};