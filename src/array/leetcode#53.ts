/*
 * @Author: Shihao Lu 
 * @Date: 2021-02-26 21:47:56 
 * @Last Modified by:   Shihao Lu 
 * @Last Modified time: 2021-02-26 21:47:56 
 */

 // 最大子序和
function maxSubArray(nums: number[]): number {

    let pre: number = 0
    let max: number = nums[0]
    nums.forEach((value, index) => {
        pre = Math.max(pre + value, value)
        max = Math.max(max, pre)
    })

    return max
}