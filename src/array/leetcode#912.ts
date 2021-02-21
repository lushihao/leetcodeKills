/*
 * @Author: Shihao Lu 
 * @Date: 2021-02-21 17:42:46 
 * @Last Modified by: Shihao Lu
 * @Last Modified time: 2021-02-21 17:43:10
 */

 // 排序数组-选择排序

 function sortArray(nums: number[]): number[] {
    const numsLen: number = nums.length
    for (let i = 0; i < numsLen; i++) {
        let minIndex: number = i
        for (let j = i + 1; j < numsLen; j++) {
            if (nums[j] < nums[minIndex]) {
                minIndex = j
            }
        }
        const temp: number = nums[minIndex]
        nums[minIndex] = nums[i]
        nums[i] = temp
    }
    return nums
};

const aList: number[] = [0, 1, 2, 0]
const result = sortArray(aList)

console.log(result)

export {}