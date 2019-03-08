Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

Note:
You may assume k is always valid, 1 ≤ k ≤ BSTs total elements.

Example 1:

Input: root = [3,1,4,null,2], k = 1
   3
  / \
 1   4
  \
   2
Output: 1
Example 2:

Input: root = [5,3,6,2,4,null,null,1], k = 3
       5
      / \
     3   6
    / \
   2   4
  /
 1
Output: 3
Follow up:
What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? How would you optimize the kthSmallest routine?


class Solution {
  int count =0;
  int out=0;
  public int kthSmallest(TreeNode root, int k) {
      recur(root, k);
      return out;
  }

  public void recur(TreeNode node, int k){
      if(count >= k) return;
      if(node.left != null){
          recur(node.left, k);
      }
      count++;
      if(count == k){
          out = node.val;
          return;
      }
      if(node.right != null){
          recur(node.right, k);
      }
  }

}
