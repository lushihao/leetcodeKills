/*
 * @Author: Shihao Lu 
 * @Date: 2021-02-21 16:29:10 
 * @Last Modified by: Shihao Lu
 * @Last Modified time: 2021-02-21 17:06:48
 */

// 移动零

function moveZeroes(nums: number[]): void {
    let j: number = 0
    const numsLen = nums.length
    for ( let i = 0; i < numsLen; i++) {
        if (nums[i] !== 0) {
            let temp: number = nums[i]
            nums[i] = nums[j]
            nums[j] = temp
            j++
        }
    }
};

const aList: number[] = [0, 1, 2, 0]
moveZeroes(aList)

console.log(aList)

 export {}