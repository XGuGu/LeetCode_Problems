

Remove all elements from a linked list of integers that have value val.

Example:

Input:  1->2->6->3->4->5->6, val = 6
Output: 1->2->3->4->5




方法1: 借助数组
解题思路:

将链表存储于数组. 在数组中过滤完毕后, 再写入链表.
代码:

var removeElements = function(head, val) {
  const clone = head;
  let root = head;
  let r = [];
  while (head) {
    r.push(head.val);
    head = head.next;
  }
  r = r.filter(_r => _r !== val);
  if (r.length === 0) return null;

  for (let i = 0; i < r.length; i++) {
    root.val = r[i];
    if (i < r.length - 1) root = root.next;
    else root.next = null;
  }
  return clone;
};
方法2: 前后指针法
解题思路:

两个指针prev和cur, 不断遍历链表.
代码:

var removeElements = function(head, val) {
  const root = {};
  root.next = head;
  let prev = root;
  let cur = root.next;
  while (cur) {
    if (cur.val === val) {
      prev.next = cur.next;
      cur = cur.next;
    } else {
      prev = cur;
      cur = cur.next;
    }
  }

  return root.next;
};
