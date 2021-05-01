// 92. Reverse Linked List II

// Given the head of a singly linked list and two integers left and right where 
// left <= right, reverse the nodes of the list from position left to position 
// right, and return the reversed list. 

function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }

var reverseBetween = function(head, left, right) {  
    // Part1 find start, end, temp1, temp2 
    // first loop; find start and end nodes
    // set up using count and while loop
    // we need reference of node before left and node after right
    // time o(n) | space o(1)
    
    let currentNode = head; 
    let count = 1;        
    let prevNode = null;   
    let start, end, temp1, temp2   

    while(currentNode) {
        if(left === count) {
            temp1 = prevNode
            start = currentNode
        }
        
        if(right === count) {
            temp2 = currentNode.next
            end = currentNode;
            break;
        }
        count++;
        prevNode = currentNode;
        currentNode = currentNode.next;
        
    }

    // Part2 reverse all nodes between start and end 
    // reverse linkedlist between start and end
    if(left === 1 && right === 1) return end;
    currentNode = start; 
    prevNode = null;    

    while(currentNode !== temp2) { 
        let nextNode = currentNode.next;  
        currentNode.next = prevNode       
        prevNode = currentNode;           
        currentNode = nextNode;
    }
    
    // Part3 connect temp1 to new head and new tail to temp2; return
    // temp1.next = new reverseHead
    // new reverseTail.next = temp2;
    // return head
    start.next = temp2;
    // if temp1 is null, means that first node head is reversed
    // if not we want to connect prev node before the reversed
    if(!temp1) {
     return end;   
    } else {
     temp1.next = end   
    }
    return head;
};

// time o(n)
// space o(1)
// https://leetcode.com/problems/reverse-linked-list-ii/