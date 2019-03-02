Given an integer n, return 1 - n in lexicographical order.

For example, given 13, return: [1,10,11,12,13,2,3,4,5,6,7,8,9].

Please optimize your algorithm to use less time and space. The input size may be as large as 5,000,000.


// Space O1

class Solution {
    public List<Integer> lexicalOrder(int n) {
      List<Integer> res = new ArrayList<>();
      if (n == 0) {
        return res;
      }

      int i = 1;
      while (res.size() < n) {
        while (i <= n) {
          res.add(i);
          i *= 10;
        }

        i =  i / 10 + 1;
        while (i <= n && i % 10 != 0) {
          res.add(i);
          i++;
        }
        i = (i - 1) / 10 + 1;
        while (i % 10 == 0) {
          i /= 10;
        }
      }
      return res;
    }
}
