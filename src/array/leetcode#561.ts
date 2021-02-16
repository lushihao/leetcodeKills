/*
 * @Author: Shihao Lu 
 * @Date: 2021-02-16 17:10:38 
 * @Last Modified by:   Shihao Lu 
 * @Last Modified time: 2021-02-16 17:10:38 
 */

// Array Partition I
function arrayPairSum(nums: number[]): number {
    nums.sort((a, b) => (a-b))
    console.log(nums)
    let result: number = 0
    for(let i = 0; i < nums.length; i+=2) {
        result += nums[i]
    }
    return result
}

const aList: number[] = [6214, -2290, 2833, -7908]
const result = arrayPairSum(aList)

console.log(result)

 export {}