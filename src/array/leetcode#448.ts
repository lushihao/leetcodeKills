/*
 * @Author: Shihao Lu 
 * @Date: 2021-02-13 20:53:50 
 * @Last Modified by: Shihao Lu
 * @Last Modified time: 2021-02-13 21:04:44
 */

 // 找到所有数组中消失的数字

 function findDisappearedNumbers(nums: number[]): number[] {
    const aSet: Set<number> = new Set(nums)
    const result: number[] = []
    for(let i = 1; i < nums.length + 1; i++) {
        if(!aSet.has(i)) {
            result.push(i)
        }
    }
    return result
}

const aList: number[] = [4,3,2,7,8,2,3,1]
const result = findDisappearedNumbers(aList)

console.log(result)

 export {}