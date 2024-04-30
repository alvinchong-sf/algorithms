# 146. LRU Cache
# Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

# Implement the LRUCache class:

# LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
# int get(int key) Return the value of the key if the key exists, otherwise return -1.
# void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the 
# key-value pair to the cache. If the number of keys exceeds the capacity from this operation, 
# evict the least recently used key. The functions get and put must each run in O(1) average time complexity.

# Example 1:
# Input
# ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
# [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
# Output
# [null, null, null, 1, null, -1, null, -1, 3, 4]

# Explanation
# LRUCache lRUCache = new LRUCache(2);
# lRUCache.put(1, 1); // cache is {1=1}
# lRUCache.put(2, 2); // cache is {1=1, 2=2}
# lRUCache.get(1);    // return 1
# lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
# lRUCache.get(2);    // returns -1 (not found)
# lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
# lRUCache.get(1);    // return -1 (not found)
# lRUCache.get(3);    // return 3
# lRUCache.get(4);    // return 4

class Node:
    def __init__(self, key, val, next_node = None, prev = None) -> None:
        self.key = key
        self.val = val
        self.next = next_node
        self.prev = prev

class DoublyLinkedList:
    def __init__(self) -> None:
        self.length = 0
        self.head = None
        self.tail = None

    def insert(self, node) -> None:
        if self.length == 0:
            self.head = node
            self.tail = node
            self.length = 1
            return

        old_head = self.head
        old_head.prev = node
        self.head = node
        self.head.next = old_head
        self.head.prev = None
        self.length += 1
        
    # todo: refactor to remove any node in list besides the tail
    def remove(self):
        if self.length == 0 or self.length == 1:
            self.head = None
            self.tail = None
            self.length = 0
            return

        prev_node = self.tail.prev
        self.tail.prev = None
        self.tail.next = None
        self.tail = prev_node
        self.tail.next = None
        self.length -= 1

    # todo: clean up
    def update_recently_used(self, node) -> None:
        if self.length == 0:
            return

        if self.length == 1:
            self.head = node
            self.tail = node
            return
        
        if self.head == node:
            self.head = node
            return
            
        if self.tail == node:
            new_tail = self.tail.prev
            old_head = self.head

            self.tail = new_tail
            new_tail.next = None
            self.head = node
            old_head.prev = self.head
            self.head.next = old_head
            self.head.prev = None
            return
        
        prev_node = node.prev
        next_node = node.next
        old_head = self.head
        
        prev_node.next = next_node
        next_node.prev = prev_node

        self.head = node
        self.head.prev = None
        self.head.next = old_head
        old_head.prev = self.head

class LRUCache:
    def __init__(self, capacity) -> None:
        self.capacity = capacity
        self.cache = {}
        self.doubly_linkedlist = DoublyLinkedList()

    def get(self, key) -> int:
        result = -1
        if key in self.cache:
            node = self.cache[key]
            self.doubly_linkedlist.update_recently_used(node)
            result = node.val
        return result

    def put(self, key, value) -> None:
        if key in self.cache:
            node = self.cache[key]
            node.val = value
            self.doubly_linkedlist.update_recently_used(node)
        else:
            if self.doubly_linkedlist.length >= self.capacity:
                tail_key = self.doubly_linkedlist.tail.key
                self.doubly_linkedlist.remove()
                del self.cache[tail_key]
            new_node = Node(key, value)
            self.cache[key] = new_node
            self.doubly_linkedlist.insert(new_node)