// 21. Merge Two Sorted Lists

// Merge two sorted linked lists and return it as a sorted list. The list should 
// be made by splicing together the nodes of the first two lists.

// Input: l1 = [1,2,4], l2 = [1,3,4]
// Output: [1,1,2,3,4,4]

var mergeTwoLists = function(l1, l2) {
    if(!l1 && !l2) return null;
    let newArr = [];
    
    while(l1 && l2) {
        if(l1.val < l2.val) {
            newArr.push(l1);
            l1 = l1.next;
        } else {
            newArr.push(l2);
            l2 = l2.next;
        }
    }
    
    while(l1) {
        newArr.push(l1);
        l1 = l1.next;
    }
    while(l2) {
        newArr.push(l2);
        l2 = l2.next;
    }
    for(let i = 0; i < newArr.length - 1; i++) {
        newArr[i].next = newArr[i + 1]
    }
    return newArr[0];
};

// time o(n) traversing all nodes
// space o(n) because of array

////////////////////////////////////////////////////////////////////////////////

var mergeTwoLists = function(l1, l2) {
    if(!l1 && !l2) return null;
    if(l1 && !l2) return l1;
    if(!l1 && l2) return l2;
    let head;
    
    if(l1.val < l2.val) {
        head = l1;
        l1 = l1.next;
    } else {
        head = l2
        l2 = l2.next;
    }
    
    let newList = head;
    
    while(l1 && l2) {
        if(l1.val < l2.val) {
            newList.next = l1;
            newList = newList.next
            l1 = l1.next;
        } else {
            newList.next = l2;
            newList = newList.next
            l2 = l2.next;
        }
    }
    if(l1) newList.next = l1;
    if(l2) newList.next = l2;
    return head;
};

// time o(n)
// space o(1) 
// https://leetcode.com/problems/merge-two-sorted-lists/