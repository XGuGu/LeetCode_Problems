Implement int sqrt(int x).

Compute and return the square root of x.

//367 Valid Perfect Square

// time Ologn space O1

class Solution {
    public int mySqrt(int x) {
        if (x <= 0) return 0;
        int low = 1, high = x;
        while(low <= high) {
          long mid = (high - low) / 2 + low;
          if (mid * mid == x) {
            return (int)mid;
          } else if (mid * mid < x) {
            low = (int)mid + 1;
          } else {
            high = (int)mid - 1;
          }
        }

        if (high * high < x) {
          return (int) high;
        } else {
          return (int) low;
        }
    }


    public int mySqrt(int x) {
      long res = x;
      while(res * res > x) {
        res = (res + x / res) / 2;
      }
      return (int) res;
    }
}
