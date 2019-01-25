// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).
//
// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its level order traversal as:
// [
//   [3],
//   [9,20],
//   [15,7]
// ]

var levelOrder = function(root) {
  const r = [];
  const levelOrder = (node, level=0) => {
    if (node) {
      r[level] = r[level] || [];
      r[level].push(node.val);
      levelOrder(node.left, level + 1);
      levelOrder(node.right, level + 1);
    }
  }
  levelOrder(root);
  return r;
};

使用level变量, 控制层序遍历的层数.
使用递归, 并带入level变量, 存储层序遍历的值.
