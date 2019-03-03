Given a binary tree, return the level order traversal of its nodes values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]


class Solution {
    public List<List<Integer>> levelOrder(TreeNode root) {
      List<List<Integer>> ans = new ArrayList<>();
      if (root == null) {
        return ans;
      }
      Queue<TreeNode> queue = new LinkedList<>();
      queue.add(root);

      while (!queue.isEmpty()) {
        int size = queue.size();
        List<Integer> out = new ArrayList<>();
        for (int i = 0; i < size; i++) {
          TreeNode node = queue.poll();
          out.add(node.val);
          if(node.left != null) queue.add(node.left);
          if(node.right != null) queue.add(node.right);
        }
        ans.add(out);
      }
      return ans;

    }
}
