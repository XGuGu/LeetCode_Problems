Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Note: You are not suppose to use the library's sort function for this problem.

Example:

Input: [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Follow up:

A rather straight forward solution is a two-pass algorithm using counting sort.
First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.
Could you come up with a one-pass algorithm using only constant space?

//medium


const sortColors = (arr, sortedColors = 0, sortedIndex = 0, colorQuantity = 2) => {
  let len = arr.length;
  let partitionIndex = len - sortedIndex;
  let count = 0;
  let i;

  if (len <= 1) return;
  if (sortedColors > colorQuantity) return;

  for (i = 0; i < partitionIndex; i++) {
      if (arr[i] !== sortedColors) {
        arr[count++] = arr[i];
      }
  }

  while (count < partitionIndex) {
      arr[count++] = sortedColors;
  }

  return sortColors(arr, sortedColors + 1, len - count);

}

Using a spin-off of the move zeroes question (283). Recursively sorts one color to the right of the partition index until all the colors are sorted at the end. O(3n) worst case if all the items in the colorArray are a certain color (2). O(n) time complexity with constant space.

move 0's to the end
move 1's to the end
move 2's to the end
Tips and suggestions always welcome.
