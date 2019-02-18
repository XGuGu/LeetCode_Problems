Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
Example 1:

Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 3
Output: true
Example 2:

Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 13
Output: false
//medium


var searchMatrix = function(matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    const v = matrix[i];
    if (target < v[0]) return false;
    if (target <= v[v.length - 1]) return v.includes(target);
  }

  return false;
};

方法:

针对每一行数组, 判断target如果小于[0], 则return false; 如果小于[len], 则判断target是否在其中.
