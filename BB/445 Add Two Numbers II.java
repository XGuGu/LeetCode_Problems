You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Follow up:
What if you cannot modify the input lists? In other words, reversing the lists is not allowed.

Example:

Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 8 -> 0 -> 7

//和第2 题类似


// class Solution {
//     public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
//       ListNode dummy = new ListNode(0);
//       ListNode res = dummy;
//       int carry = 0;
//       while(l1 != null || l2 != null || carry == 1) {
//         int sum = (l1 == null ? 0 : l1.val) + (l2 == null ? 0 : l2.val);
//         int val = sum + carry;
//         res.next = new ListNode(val % 10);
//         carry = val / 10;
//         res = res.next;
//         if (l1 != null) {
//           l1 = l1.next;
//         }
//         if (l2 != null) {
//           l2 = l2.next;
//         }
//       }
//
//       return dummy.next;
//     }
// }

class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
      Stack<Integer> s1 = new Stack<Integer>();
      Stack<Integer> s2 = new Stack<Integer>();

      while (l1 != null) {
        s1.push(l1.val);
        l1 = l1.next;
      }

      while (l2 != null) {
        s2.push(l2.val);
        l2 = l2.next;
      }

      int sum = 0;
      ListNode list = new ListNode(0);
      while(!s1.empty() || !s2.empty()) {
        if (!s1.empty()) {
          sum += s1.pop();
        }
        if (!s2.empty()) {
          sum += s2.pop();
        }
        list.val = sum % 10;
        ListNode head = new ListNode(sum / 10);
        head.next = list;
        list = head;
        sum /= 10;
      }

      return list.val == 0 ? list.next : list;
    }
}
