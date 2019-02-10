Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.

Example 1:

Input: 1->2->3->3->4->4->5
Output: 1->2->5
Example 2:

Input: 1->1->1->2->3
Output: 2->3


var deleteDuplicates = function(head) {
    var newEmptyHeader = new ListNode(0);
    newEmptyHeader.next = head;

    var pre = newEmptyHeader;
    var curr = head;
    var findDu=false;

    while(curr!==null && curr.next!==null)
    {
        while(curr.next!==null && curr.val===curr.next.val)
        {
            curr.next=curr.next.next;
            findDu=true;
        }

        if(findDu)
        {
            pre.next = curr.next;
            findDu=false;
        }
        else
        {
            pre=pre.next;
        }

        curr=curr.next;
    }


    return newEmptyHeader.next;
};
