// Given a binary tree, return all root-to-leaf paths.
//
// Note: A leaf is a node with no children.
//
// Example:
//
// Input:
//
//    1
//  /   \
// 2     3
//  \
//   5
//
// Output: ["1->2->5", "1->3"]
//
// Explanation: All root-to-leaf paths are: 1->2->5, 1->3

var binaryTreePaths = function(root) {
  const r = [];
  const treePath = (node, p) => {
    p = p ? `${p}->${node.val}` : `${node.val}`;
    if (node.left || node.right) {
      treePath(node.left, p);
      treePath(node.right, p);
    } else {
      r.push(p);
    }
  }
  treePath(root, '');
  return r;
}
