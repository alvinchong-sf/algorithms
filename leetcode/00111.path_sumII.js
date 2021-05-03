// 113. Path Sum II

// Given the root of a binary tree and an integer targetSum, return all root-to-leaf 
// paths where each path's sum equals targetSum.

// A leaf is a node with no children.


var pathSum = function (root, targetSum) {
  //          5
  //      4        8
  //   11   n   13   4
  //  7  2          5  1

  // notes
  // given root and targetSum
  // return all path from root to leaf in a 2d array
  // eg [[1,2,3,4,5],[6,7,8,9]]
  // if no path found; return [];

  // implementation
  // keep track of currentSum = 5
  // keep track of temp Arr = [5]
  // recursively call left and right
  // check if(root.left) and (root.right)
  // if yes; currSum += root.left.val tempArr.push(root.left.val); same for right
  // call dfs(root.left) and (root.right)
  // base case if(!root.left && !root.right) check if currentSum === targetSum
  // if yes; resultArr.push(tempArr)
  // if no; dont do anything just return;
  // decrement currentSum-=root.left.val and tempArr.pop();
  // return resultArr

  // edge cases
  //  none at the moment

  if (!root) return [];

  let currentSum = 0;
  let tempArr = [];
  let resultArr = [];

  const dfs = (root) => {
    if (!root.left && !root.right) {
      if (currentSum === targetSum) {
        resultArr.push(tempArr.slice());
      }
      return;
    }

    if (root.left) {
      currentSum += root.left.val;
      tempArr.push(root.left.val);
      dfs(root.left);
      currentSum -= root.left.val;
      tempArr.pop();
    }

    if (root.right) {
      currentSum += root.right.val;
      tempArr.push(root.right.val);
      dfs(root.right);
      currentSum -= root.right.val;
      tempArr.pop();
    }
  };

  currentSum += root.val;
  tempArr.push(root.val);
  dfs(root);
  return resultArr;
};

// time o(n) linear traverse entire tree
// space o(n^2) because returning matrix
// https://leetcode.com/problems/path-sum-ii/