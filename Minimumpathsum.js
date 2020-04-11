/**
 * 64.最小路径和
给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

说明：每次只能向下或者向右移动一步。

示例:

输入:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
输出: 7
解释: 因为路径 1→3→1→1→1 的总和最小。
 */
/**
 * 递推公式：dp(i,j)=grid(i,j)+min(dp(i-1,j),dp(i,j-1))
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    if(grid.length === 0){
        return 0;
    }
    const dp = [];
    const hang = grid.length;
    const lie = grid[0].length;
    for(let i=0; i<hang+1; i++){
        dp[i] = [];
        // 初始化第一列
        dp[i][0] = Number.MAX_VALUE;
        for(let j=0; j<lie+1; j++){
            // 初始化第一行
            if(i === 0){
                dp[i][j] = Number.MAX_VALUE;
            }
        }
    }
    dp[0][1] = 0;
    for(let i=1; i<hang+1; i++){
        for(let j=1; j<lie+1; j++){
            dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i-1][j-1];
        }
    }
    return dp[hang][lie];
};


