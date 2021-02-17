/*
 * @Author: Shihao Lu 
 * @Date: 2021-02-17 21:28:01 
 * @Last Modified by: Shihao Lu
 * @Last Modified time: 2021-02-17 22:09:25
 */

// 重塑矩阵

function matrixReshape(nums: number[][], r: number, c: number): number[][] {
    const m: number = nums.length
    const n: number = nums[0].length
    let count: number = 0
    if( m*n !== r*c) {
        return nums
    }
    const aNums = nums.flat(Infinity)
    const aArray: number[][] = new Array(r).fill(0).map(() => new Array(c).fill(0))
    for(let i = 0; i < r; i++) {
        for(let j = 0; j < c; j++) {
            aArray[i][j] = Number(aNums[count])
            count += 1
        }
    }
    return aArray
}

const nums: number[][] =
    [[1, 2],
    [3, 4]]

const r: number = 1
const c: number = 4

const result = matrixReshape(nums, r, c)

console.log(result)

 export {}