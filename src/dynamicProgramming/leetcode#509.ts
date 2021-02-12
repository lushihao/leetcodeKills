/*
 * @Author: Shihao Lu 
 * @Date: 2021-02-12 22:28:46 
 * @Last Modified by: Shihao Lu
 * @Last Modified time: 2021-02-12 22:34:26
 */

 // 斐波那契数

const fib = (n: number): number => {
    const dp: number[] = []
    dp[0] = 0
    dp[1] = 1
    for(let i: number = 2; i <= n; i++) {
        dp[i] = dp[i -1] + dp[ i-2]
    }
    return dp[n]
}

const n: number = 3
const result: number = fib(n)

console.log(result)

export {}
