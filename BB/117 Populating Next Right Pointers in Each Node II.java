Follow up for problem "Populating Next Right Pointers in Each Node".

What if the given tree could be any binary tree? Would your previous solution still work?

Note:

You may only use constant extra space. For example, Given the following binary tree,

         1
       /  \
      2    3
     / \    \
    4   5    7
After calling your function, the tree should look like:

         1 -> NULL
       /  \
      2 -> 3 -> NULL
     / \    \
    4-> 5 -> 7 -> NULL




class Solution {
    public Node connect(Node root) {
      connect(root, null);
    }

    private void connect(Node root, Node next) {
      if (root == null) {
        return;
      }

      root.next = next;

      while (true) {
        if (next == null) break;
        if (next.left != null) {
          next = next.left;
          break;
        }
        if (next.right != null) {
          next = next.right;
          break;
        }
        next = next.next;
      }

      if (root.right != null) {
        connect(root.right, next);
        connect(root.left, root.right);
      } else {
        connect(root.left, next);
      }
    }
}
