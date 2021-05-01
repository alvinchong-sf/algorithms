// 86. Partition List

// Given the head of a linked list and a value x, partition it such that all 
// nodes less than x come before nodes greater than or equal to x.

// You should preserve the original relative order of the nodes in each 
// of the two partitions

var partition = function(head, x) {
    
    let dummy1 = new ListNode("d1");
    let dummy2 = new ListNode("d2");
    let prev1 = dummy1;
    let prev2 = dummy2;
    
    let currentNode = head;
    while(currentNode) {
        if(currentNode.val < x) {
            prev1.next = currentNode
            prev1 = prev1.next;
        } else if(currentNode.val >= x) {
            prev2.next = currentNode;
            prev2 = prev2.next;
        }
        currentNode = currentNode.next;
    }
    
    prev1.next = dummy2.next;
    prev2.next = null;
    return dummy1.next;
};