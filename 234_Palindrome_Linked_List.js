// Given a singly linked list, determine if it is a palindrome.
//
// Example 1:
//
// Input: 1->2
// Output: false
// Example 2:
//
// Input: 1->2->2->1
// Output: true
// Follow up:
// Could you do it in O(n) time and O(1) space?

var isPalindrome = function(head) {
  if (!head) {
    return true;
  }

  const r = [];
  while (head) {
    r.push(head.val);
    headd = head.next;
  }

  for (var i = 0; i < r.length / 2; i++) {
    if (r[i] !== r[r.length - 1 - i]) {
      return false;
    }
  }

  return true;
}


将链表存储为数组，判断数组是否为回文型
