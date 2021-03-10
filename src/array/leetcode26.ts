/*
 * @Author: Shihao Lu 
 * @Date: 2021-03-10 19:59:10 
 * @Last Modified by: Shihao Lu
 * @Last Modified time: 2021-03-10 20:18:49
 */

// 删除排序数组中的重复项
function removeDuplicates(nums: number[]): number {
    let pointer = 0
    for(let i = 1; i < nums.length; i++) {
        if(nums[pointer] === nums[i]) {
            nums.splice(i, 1)
            i--
        } else {
            pointer++
        }
    }
    return nums.length
};