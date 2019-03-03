Given a binary tree, return the zigzag level order traversal of its nodes values. (ie, from left to right, then right to left for the next level and alternate between).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its zigzag level order traversal as:
[
  [3],
  [20,9],
  [15,7]
]

public List<List<Integer>> zigzagLevelOrder(TreeNode root) {
        List<List<Integer>> list=new ArrayList<>();
        return recursive(root, list, 0);
    }

    public List<List<Integer>> recursive(TreeNode root, List<List<Integer>> list, int depth) {
        if(root==null) return list;
        if(depth==list.size()) {
            list.add(new ArrayList<>());
        }
        if(depth%2==0) {
            list.get(depth).add(root.val);
        } else{
            list.get(depth).add(0, root.val);
        }
        recursive(root.left, list, depth+1);
        recursive(root.right, list, depth+1);
        return list;
    }
