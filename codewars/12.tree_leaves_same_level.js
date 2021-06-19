// A binary tree is a structure that has a value and two references to its child: 
// left and right. Each of these references are themselves a binary tree or undefined 
// to represent an empty tree.

// The leaves in a binary tree are the lower level nodes for which both references 
// (left and right) are undefined. For example, in the following tree:

//   a
//  / \
// b  c
//     \
//     d
// 'b' and 'd' are leaves while 'a' and 'c' are not. We define the level of a tree 
// as the number of parent nodes a tree node has. The root of the tree, therefore, 
// is at level 0. Root's children are at level 1, etc.

// The goal of this kata is to write a function to determine if all leaves of a 
// binary tree are at the same level. In the tree shown before the function should 
// return false since 'b' and 'd' are at levels 1 and 2, respectively.

// In the following example, the function should return true because now the 
// leaves are 'e' and 'd' and both are at level 2:

function allLeavesAtSameLevel(node) {
  if(!node || (!node.left && !node.right)) return true;
  const hash = {level: null, bool: true}
  
  const dfs = (root, level) => {
    if(!root) return;
    const currLevel = level + 1;
    
    if(!root.left && !root.right) {
      if(hash.level === null) {
        hash.level = currLevel
        return;
      } else {
        if(hash.level !== currLevel) hash.bool = false;
        return;
      }
    }
    
    if(root.left) dfs(root.left, currLevel);
    if(root.right) dfs(root.right, currLevel);
    
  };
  
  dfs(node, 0)
  return hash.bool;
}

// time o(n) | space o(h) 
// https://www.codewars.com/kata/52d43d5515be7cbc92000611/train/javascriptls