// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var oddEvenList = function(head) {
    // brute force
    // 2 arrays odd = []; even = []
    // traverse thru linked list and add all the odd in odd arrays
    // all the even in even arrays
    // concatenate the two arrays and set the .next to each other

    if(!head) return null;
    let oddArr = [];
    let evenArr = [];
    
    let count = 1;
    while(head) {
        if(count % 2 === 0) {
            evenArr.push(head);
        } else {
            oddArr.push(head);
        }
        head = head.next;
        count++;
    }
    let resultArr = oddArr.concat(evenArr);
    for(let i = 0; i < resultArr.length - 1; i++) {
        let currNode = resultArr[i];
        let nextNode = resultArr[i + 1];
        currNode.next = nextNode;
    }
    resultArr[resultArr.length - 1].next = null;
    return resultArr[0];

};

// time o(n)
// space o(n)
// https://leetcode.com/problems/odd-even-linked-list/