A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

Return a deep copy of the list.



Example 1:



Input:
{"$id":"1","next":{"$id":"2","next":null,"random":{"$ref":"2"},"val":2},"random":{"$ref":"2"},"val":1}

Explanation:
Node 1's value is 1, both of its next and random pointer points to Node 2.
Node 2's value is 2, its next pointer points to null and its random pointer points to itself.


Note:

You must return the copy of the given head as a reference to the cloned list.


//time On  Space On

class Solution {
    public Node copyRandomList(Node head) {
         HashMap<Node, Node> map = new HashMap<>();
         Node cur = head;

         while  (cur != null) {
           map.put(cur, new Node(cur.val));
           cur = cur.next;
         }
         cur = head;
         while  (cur != null) {
           map.get(cur).next = map.get(cur.next);
           map.get(cur).random = map.get(cur.random);
           cur = cur.next;
         }
         return map.get(head);
    }
}
