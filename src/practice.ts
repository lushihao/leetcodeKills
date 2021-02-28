/*
 * @Author: Shihao Lu 
 * @Date: 2021-02-21 11:30:05 
 * @Last Modified by: Shihao Lu
 * @Last Modified time: 2021-02-27 11:54:09
 */


const prices: number [] = [7,6,4,3,1]
let dp: number[][] = new Array(prices.length).fill(0).map(() => new Array(2).fill(0))

// length of prices
const pricesLen = prices.length
// one: no buy and no sell
dp[0][0] = 0

// two: buy and no sell
dp[0][1] = -prices[0] 

for (let i = 1; i < pricesLen; i++) {
    
    dp[i][0] = Math.max(dp[i-1][1] + prices[i], dp[i-1][0])
    dp[i][1] = Math.max(-prices[i], dp[i-1][1])
    
}
console.log(dp[pricesLen - 1][0])