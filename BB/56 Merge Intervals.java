Given a collection of intervals, merge all overlapping intervals.

Example 1:

Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:

Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.


//253 MeetingRooms 2 类似
//important!!
扫毛线算法

//time O nlogn  space On

class Solution {
    public List<Interval> merge(List<Interval> intervals) {
      if (intervals == null || intervals.size() <= 1) {
        return intervals;
      }

      Collections.sort(intervals, (a, b) -> a.start - b.start);
      int start = intervals.get(0).start;
      int end = intervals.get(0).end;
      List<Interval> res = new ArrayList<>();
      for (Interval interval: intervals) {
        if (interval.start <= end) {
          end = Math.max(end, interval.end);

        } else {
          res.add(new Interval(start, end));
          start = interval.start;
          end = interval.end;
        }
      }
      res.add(new Interval(start, end));
      return res;
    }
}
