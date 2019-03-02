Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?


class Solution {
    public ListNode reverseList(ListNode head) {
        if (head == null || head.next == null) {
          return head;
        }

        ListNode cur = head;
        ListNode pre = null;
        ListNode next = null;
        while (cur != null) {
          next = cur.next;
          cur.next = pre;
          pre = cur;
          cur = next;
        }
        return pre;
    }
}
