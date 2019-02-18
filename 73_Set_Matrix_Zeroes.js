Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.

Example 1:

Input:
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
Output:
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]
Example 2:

Input:
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
Output:
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]
Follow up:

A straight forward solution using O(mn) space is probably a bad idea.
A simple improvement uses O(m + n) space, but still not the best solution.
Could you devise a constant space solution?
//medium

var setZeroes = function(matrix) {
  const indexs = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) indexs.push([i, j]);
    }
  }

  for (let i = 0; i < indexs.length; i++) {
    const [x, y] = indexs[i];
    for (let j = 0; j < matrix[x].length; j++) matrix[x][j] = 0;
    for (let j = 0; j < matrix.length; j++) matrix[j][y] = 0;
  }
};

解题思路:

假设我们的数据为:
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
先求出为0的索引位置. [[0,0],[2,0]].
针对索引位置, 将其所在的行列均置为0即可.
