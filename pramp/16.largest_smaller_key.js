// Largest Smaller BST Key
// Given a root of a Binary Search Tree (BST) and a number num, implement an 
// efficient function findLargestSmallerKey that finds the largest key in the 
// tree that is smaller than num. If such a number doesn’t exist, return -1. 
// Assume that all keys in the tree are nonnegative.

// Analyze the time and space complexities of your solution.

// For example:

// For num = 17 and the binary search tree below:
//            20
//        9       25
//      5   12
//        11  14

// Your function would return:
// 14 since it’s the largest key in the tree that is still smaller than 17.

function Node(key) {
  this.key = key;
  this.parent = null;
  this.left = null;
  this.right = null;
}

// Constructor to create a new BST 
function BinarySearchTree() {
  this.root = null;
}

BinarySearchTree.prototype.findLargestSmallerKey = function(num) {
  if (!this.root) return -1;
  
  let node = this.root;
  
  while (node) {
    if (num <= node.key) {   // 7 <= 9
      if (!node.left && node.key < num) return node.key
      node = node.left
    } else {
      if (node.right && node.right.key > num) return node.key
      if (node.right) {
         node = node.right
      } else {
        return node.key
      }
    }
  }
  
  return node !== null ? node.key : -1;
}

/*

AVL 
target num = 17
           20
       9       25
     5   12
       11  14

Trie

Heap

https://www.linkedin.com/in/simon-li-2b78b2181/
*/

// Creates a new node by a key and inserts it to the BST
BinarySearchTree.prototype.insert = function(key) {
  var root = this.root;

  // 1. If the tree is empty, create the root
  if(!root) {
      this.root = new Node(key);
      return;
  }

  // 2) Otherwise, create a node with the key
  //    and traverse down the tree to find where to
  //    to insert the new node
  var currentNode = root;
  var newNode = new Node(key);

  while(currentNode !== null) {
      if(key < currentNode.key) {
          if(!currentNode.left) {
              currentNode.left = newNode;
              newNode.parent = currentNode;
              break;
          } else {
              currentNode = currentNode.left;
          }
      } else {
          if(!currentNode.right) {
              currentNode.right = newNode;
              newNode.parent = currentNode;
              break;
          } else {
              currentNode = currentNode.right;
          }
      }
  }
}

/*********************************************
 * Driver program to test above function     *
 *********************************************/

// Create a Binary Search Tree
var bst = new BinarySearchTree();
bst.insert(20);
bst.insert(9);
bst.insert(25);
bst.insert(5);
bst.insert(12);
bst.insert(11);
bst.insert(14);

var result = bst.findLargestSmallerKey(15);

console.log("Largest smaller number is " + result);