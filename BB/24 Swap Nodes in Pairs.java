Given a linked list, swap every two adjacent nodes and return its head.

You may not modify the values in the lists nodes, only nodes itself may be changed.



Example:

Given 1->2->3->4, you should return the list as 2->1->4->3.


//time On  space O1

class Solution {
    public ListNode swapPairs(ListNode head) {
      if (head == null || head.next == null) {
        return head;
      }

      ListNode dummy = new ListNode(0);
      ListNode l1 = dummy;
      ListNode l2 = head;

      while (l2 != null && l2.next != null) {
        ListNode nextStart = l2.next.next;
        l1.next = l2.next;
        l2.next.next = l2;
        l2.next = nextStart;
        l1 = l2;
        l2 = l2.next;
      }
      return dummy.next;
    }
}
