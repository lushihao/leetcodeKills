/*
 * @Author: Shihao Lu 
 * @Date: 2021-02-12 22:11:16 
 * @Last Modified by: Shihao Lu
 * @Last Modified time: 2021-02-12 22:21:46
 */

// 爬楼梯

const climbStair = (n: number): number => {
    const dp: number[] = []
    dp[0] = 1
    dp[1] = 1
    for(let i: number = 2; i <= n; i++ ) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
}

const n: number = 4
const result70: number = climbStair(n)

console.log(result70)
