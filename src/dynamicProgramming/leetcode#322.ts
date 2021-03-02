/*
 * @Author: Shihao Lu 
 * @Date: 2021-02-13 19:41:36 
 * @Last Modified by: Shihao Lu
 * @Last Modified time: 2021-02-13 20:49:46
 */

 // 零钱兑换

function coinChange(coins: number[], amount: number): number {
    const dp: number[] = new Array(amount + 1).fill(amount + 1)
    dp[0] = 0
    for(let i = 0; i < amount + 1; i++) {
        for(let coin of coins) {
            if(i - coin < 0) {
                continue
            }
            dp[i] = Math.min(dp[i], 1 + dp[i - coin])
        }
    }
    if(dp[amount] === amount + 1) {
        return -1
    } else {
        return dp[amount]
    }
}

const coins: number[] = [1, 2, 5]
const amount: number = 4

const result: number = coinChange(coins, amount)
console.log(result)

export {}
