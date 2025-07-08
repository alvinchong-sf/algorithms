"""
2336. Smallest Number in Infinite Set
You have a set which contains all positive integers [1, 2, 3, 4, 5, ...].
Implement the SmallestInfiniteSet class:
SmallestInfiniteSet() Initializes the SmallestInfiniteSet object to contain all positive integers.
int popSmallest() Removes and returns the smallest integer contained in the infinite set.
void addBack(int num) Adds a positive integer num back into the infinite set, if it is not already in the infinite set.

Example 1:
Input
["SmallestInfiniteSet", "addBack", "popSmallest", "popSmallest", "popSmallest", "addBack", 
"popSmallest", "popSmallest", "popSmallest"]
[[], [2], [], [], [], [1], [], [], []]
Output
[null, null, 1, 2, 3, null, 1, 4, 5]

Explanation
SmallestInfiniteSet smallestInfiniteSet = new SmallestInfiniteSet();
smallestInfiniteSet.addBack(2);    // 2 is already in the set, so no change is made.
smallestInfiniteSet.popSmallest(); // return 1, since 1 is the smallest number, and remove it from the set.
smallestInfiniteSet.popSmallest(); // return 2, and remove it from the set.
smallestInfiniteSet.popSmallest(); // return 3, and remove it from the set.
smallestInfiniteSet.addBack(1);    // 1 is added back to the set.
smallestInfiniteSet.popSmallest(); // return 1, since 1 was added back to the set and
                                   // is the smallest number, and remove it from the set.
smallestInfiniteSet.popSmallest(); // return 4, and remove it from the set.
smallestInfiniteSet.popSmallest(); // return 5, and remove it from the set.

Constraints:
    1 <= num <= 1000
    At most 1000 calls will be made in total to popSmallest and addBack.
https://leetcode.com/problems/smallest-number-in-infinite-set/description/

addBack:
Time: O(log(n)) | Space: O(n)
popSmallest:
Time: O(log(n)) | Space: O(n)
"""
class SmallestInfiniteSet:
    def __init__(self):
        self.i = 1
        self.removed_set = set()
        self.minheap = MinHeap()

    def popSmallest(self) -> int:
        if self.minheap.size() == 0:
            curr_i = self.i
            self.i += 1
            return curr_i
        else:
            removed_num = self.minheap.remove()
            self.removed_set.remove(removed_num)
            return removed_num

    def addBack(self, num: int) -> None:
        if num not in self.removed_set and num < self.i:
            self.removed_set.add(num)
            self.minheap.add(num)

class MinHeap:
    def __init__(self):
        self.minheap = []

    def peek(self):
        return None if len(self.minheap) == 0 else self.minheap[0]

    def size(self):
        return len(self.minheap)
    
    def add(self, num):
        self.minheap.append(num)
        self.siftup(self.size() - 1, self.minheap)
    
    def remove(self):
        n = self.size()
        if n == 0: return None
        if n == 1: return self.minheap.pop()

        self.swap(0, n - 1, self.minheap)
        removed_num = self.minheap.pop()
        self.siftdown(0, n - 1, self.minheap)
        return removed_num
    
    def siftup(self, idx, arr):
        if idx == 0: return
        parent_idx = ((idx - 1) // 2)
        if arr[parent_idx] <= arr[idx]: return
        self.swap(parent_idx, idx, arr)
        self.siftup(parent_idx, arr)

    def siftdown(self, idx, size, arr):
        left_idx = (idx * 2) + 1
        right_idx = (idx * 2) + 2
        left_val = float("inf") if left_idx >= size else arr[left_idx]
        right_val = float("inf") if right_idx >= size else arr[right_idx]
        curr_val = arr[idx]

        if curr_val <= left_val and curr_val <= right_val: return
        swap_idx = left_idx if left_val <= right_val else right_idx
        self.swap(idx, swap_idx, arr)
        self.siftdown(swap_idx, size, arr)
    
    def swap(self, i, j, arr):
        arr[i], arr[j] = arr[j], arr[i]
