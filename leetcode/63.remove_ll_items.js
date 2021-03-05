// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}


var removeElements = function(head, val) {
    let dummyHead = new ListNode(0);
    let newList = dummyHead;
    dummyHead.next = head;
    
    while(newList && newList.next) {
        let nextNode = newList.next;
        if(nextNode.val !== val) {
            newList = newList.next;
        } else {
            newList.next = newList.next.next;
        }
    }
    return dummyHead.next;
};

// time o(n)
// space o(1)
//https://leetcode.com/problems/remove-linked-list-elements/