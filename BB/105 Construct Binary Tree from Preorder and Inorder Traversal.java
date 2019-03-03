Given preorder and inorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

For example, given

preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]
Return the following binary tree:

    3
   / \
  9  20
    /  \
   15   7


   class Solution {
       public TreeNode buildTree(int[] preorder, int[] inorder) {
           //6.递归的停止条件，最后考虑，先考虑下面的一般情况
           if(preorder.length == 0){
               return null;
           }

           //1.根据前序遍历的结果，第一个元素就是树的root
           int rootVal = preorder[0];

           //2.根据root的值去inorder中去找，题目规定这个序列是没有重复元素的
           int rootIndex = 0;
           for(int i=0;i<inorder.length;i++){
               if(inorder[i] == rootVal){
                   rootIndex = i;
                   break;
               }

           }
           //3.找到了之后，我们就可以确定root的左子树和右子树的所有元素了
           TreeNode root = new TreeNode(rootVal);

           //4.下面就交给计算机了，我们只要考虑第一次的缩小规模，即root的左子树是什么范围，递归下去，相信它一定可以给我们一个正确的root的左子树
           //这个范围的确定也是很简单的，根据前序遍历和中序遍历的关系就可以获得
           //不过额外需要注意的是Arrays.copyOfRange是一个[)的结果集，需要注意以下边界
           root.left = buildTree(Arrays.copyOfRange(preorder,1,1+rootIndex),Arrays.copyOfRange(inorder,0,rootIndex));
           //递归下去，相信它一定可以给我们一个正确的root的右子树
           root.right = buildTree(Arrays.copyOfRange(preorder,1+rootIndex,preorder.length),Arrays.copyOfRange(inorder,rootIndex+1,inorder.length));

           //5.返回root，构造完毕
           return root;
       }
   }
