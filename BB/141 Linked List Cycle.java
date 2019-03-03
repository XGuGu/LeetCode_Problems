Given a linked list, determine if it has a cycle in it.

Follow up: Can you solve it without using extra space?


public class Solution {
    public boolean hasCycle(ListNode head) {
        if (head == null) {
          return false;
        }
        ListNode fast = head;
        ListNode slow = head;
        while(fast.next != null) {
          fast = fast.next;
          if (fast.next == null) {
            return false;
          }
          fast = fast.next;
          slow = slow.next;
          if (fast == slow) {
            return true;
          }
        }
        return false;
    }
}
