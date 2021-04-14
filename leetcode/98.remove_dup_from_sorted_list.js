// 82. Remove Duplicates from Sorted List II

// Given the head of a sorted linked list, delete all nodes that have duplicate 
// numbers, leaving only distinct numbers from the original list. Return the 
// linked list sorted as well.

// Input: head = [1,2,3,3,4,4,5]
// Output: [1,2,5

// Input: head = [1,1,1,2,3]
// Output: [2,3]


// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var deleteDuplicates = function(head) {
    // [D,1,2,4,4,5]
    //      p s f
    // [D,1,1]
    //  p s f
    if(head === null) return null;
    let dummyHead = new ListNode("dummy", head);
    let prev = dummyHead;
    let slow = head;
    let fast = head.next;
    
    while(fast !== null) {
        if(slow.val === fast.val) {
            while(fast && slow.val === fast.val) {
                fast = fast.next;
            }
            slow = fast;
            prev.next = slow;
            if(fast) {
              fast = fast.next;  
            } 
            
        } else {
            prev = prev.next;
            slow = slow.next;
            fast = fast.next;   
        }
    }
    return dummyHead.next;
};

// time o(n) - worst case no duplicated, we traverse entire linked list
// space o(1) - no extra space used

// https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/