// Reverse a linked list from position m to n. Do it in one-pass.
//
// Note: 1 ≤ m ≤ n ≤ length of list.
//
// Example:
//
// Input: 1->2->3->4->5->NULL, m = 2, n = 4
// Output: 1->4->3->2->5->NULL

var reverseBetween = function(head, m, n) {
  const root = {};
  root.next = head;
  let first = root;
  let second = root;
  let firstP = null;
  while (m-- && n--) {
    if (m === 0) firstP = first;
    first = first.next;
    second = second.next;
  }
  while (n--) {
    second = second.next;
  }

  let prev = second.next;
  while (first !== second) {
    const next = first.next;
    first.next = prev;
    prev = first;
    first = next;
  }
  first.next = prev;
  firstP.next = first;

  return root.next;
};

假设我们的数据为: 1->2->3->4->5->NULL, m = 2, n = 4
指定两个指针first和second, 先定义root.next = 1(防止m等于1的情况). 让first和second同时指向root.
同时递减m和n, 让first和second不断next. 当m等于0时候停止. 这时候first和second同时指向2, m=0, n=2;
递减n, 让second不断next, 这时候second指向4;
问题就修改为: 如何让first(2)到second(4)的链表倒序?
倒序问题, 只要提供prev指针即可. 但是这里的终止条件是first !== second.
