/*
 * @Author: Shihao Lu 
 * @Date: 2021-02-15 17:11:00 
 * @Last Modified by:   Shihao Lu 
 * @Last Modified time: 2021-02-16 17:11:00 
 */

function findMaxConsecutiveOnes(nums: number[]): number {
    let count: number = 0
    let currentCount: number = 0
    for(let i = 0; i < nums.length ; i++) {
        if(nums[i] !== 1) {
            currentCount = 0
        } else {
            currentCount += 1
            count = Math.max(count, currentCount)
        }
    }
    return count
}


const aList: number[] = [1,1,0,1,1,1]
const result = findMaxConsecutiveOnes(aList)

console.log(result)

 export {}