class Solution {
    public int largestRectangleArea(int[] arr) {
        int length = arr.length;
        int[] heights = new int[length + 2];

        for (int i = 0; i < length; i++) {
            heights[i + 1] = arr[i];
        }
//        System.out.println(Arrays.toString(heights));

        int max = 0;
        Stack<Integer> s = new Stack<>();
        for ( int i = 0; i < heights.length; i++) {
            while(!s.empty() && heights[i] < heights[s.peek()]) {
                int x = s.pop();
                int y = heights[x];
                int area = y * (i - s.peek() - 1);
                if(area > max) max = area;
            }
            s.push(i);
        }

        return max;
    }
}
