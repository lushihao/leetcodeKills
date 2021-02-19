/*
 * @Author: Shihao Lu 
 * @Date: 2021-02-19 20:43:13 
 * @Last Modified by: Shihao Lu
 * @Last Modified time: 2021-02-19 21:40:00
 */

 // 买卖股票的最佳时机

// 暴力解法
function maxProfit1(prices: number[]): number {
    const len = prices.length
    let res = 0
    for(let i = 0; i < len; i++) {
        for(let j = i + 1; j < len; j++) {
            res = Math.max(res, prices[j] - prices[i])
        }
    }
    return res
}

// 一遍遍历
function maxProfit2(prices: number[]): number {
    let minPrice = 1e5
    let maxProfit = 0
    for(let price of prices) {
        maxProfit = Math.max(price - minPrice, maxProfit)
        minPrice = Math.min(price, minPrice)
    }
    return maxProfit
};

// dp
function maxProfit3(prices: number[]): number {
    // const aArray: number[][] = new Array(r).fill(0).map(() => new Array(c).fill(0))

    let dp: number[][] = new Array(prices.length).fill(0).map(() => new Array(2))
    dp[0][0] = 0
    dp[0][1] = -prices[0]

    for(let i=1; i < prices.length; i++) {
        dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i])
        dp[i][1] = Math.max(-prices[i], dp[i-1][1])
    }
    return dp[prices.length -1][0]
};

const prices: number[] = [7,1,5,3,6,4]
const result = maxProfit3(prices)

console.log(result)

 export {}