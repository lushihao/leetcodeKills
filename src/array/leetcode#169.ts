/*
 * @Author: Shihao Lu 
 * @Date: 2021-03-11 22:57:53 
 * @Last Modified by: Shihao Lu
 * @Last Modified time: 2021-03-11 22:58:39
 */

// 多数元素

function majorityElement(nums: number[]): number {
    nums.sort((a, b)=> a - b)
    return nums[Math.floor(nums.length / 2)]

};