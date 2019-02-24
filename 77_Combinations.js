Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

Example:

Input: n = 4, k = 2
Output:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]

//medium


var combine = function(n, k) {
    let result = [];

    function dfs(current, start) {
        if(current.length == k) {
            result.push(current);
            return;
        }
        if(current.length > k) {
            return;
        }

        for(let i = start; i <= n; i++) {
            dfs(current.concat(i), i + 1);
        }

    }

    dfs([], 1);
    return result;
};

//zuofa:
//dfs
