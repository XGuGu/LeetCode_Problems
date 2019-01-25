// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).
//
// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:
//
//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3
// But the following [1,2,2,null,3,null,3] is not:
//     1
//    / \
//   2   2
//    \   \
//    3    3
// Note:
// Bonus points if you could solve it both recursively and iteratively.

var isSymmetric = function(root) {
  let flag = true;
  const isSame = (_p, _q) => {
    if (!flag) return;
    if ((!_p && _q) || (!_q && _p)) flag = false;
    if (_p && _q) {
      if (_p.val !== _q.val) flag = false;
      else {
        isSame(_p.left, _q.right);
        isSame(_p.right, _q.left);
      }
    }
  }
  if (!root) return true;
  if (!root.left && !root.right) return true;
  isSame(root.left, root.right);
  return flag;
};

将左右子树进行递归处理判断
