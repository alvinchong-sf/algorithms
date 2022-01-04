// This problem was asked by Google.

// Given two singly linked lists that intersect at some point, find the 
// intersecting node. The lists are non-cyclical.

// For example, given A = 3 -> 7 -> 8 -> 10 and B = 99 -> 1 -> 8 -> 10, return 
// the node with value 8.

// In this example, assume nodes with the same value are the exact same node objects.

// Do this in O(M + N) time (where M and N are the lengths of the lists) and constant space.

const findIntersectingNode = (list1, list2) => {

    let first = list1,
        second = list2;

    while (first !== second) {
        first = first ? first.next : list2;
        second = second ? second.next : list1;
    }
    
    return first;
    // hello world
    // more changes
};

/**
 *  3 -> 7 -> 8 -> 10
 *  f
 *  99 -> 1 -> 8 -> 10
 *  s
 */

