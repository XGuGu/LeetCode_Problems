Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

You should preserve the original relative order of the nodes in each of the two partitions.

Example:

Input: head = 1->4->3->2->5->2, x = 3
Output: 1->2->2->4->3->5

var partition = function(head, x) {
    const dummyLess = new ListNode();
    const dummyMore = new ListNode();
    let node = head;
    let less = dummyLess;
    let more = dummyMore;
    while (node) {
        if (node.val < x) {
            less = less.next = node;
        } else {
            more = more.next = node;
        }
        node = node.next;
    }
    less.next = dummyMore.next;
    more.next = null;
    return dummyLess.next;
};

2个链表，一个小，一个大，然后连一起
