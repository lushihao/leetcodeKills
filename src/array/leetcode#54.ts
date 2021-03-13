/*
 * @Author: Shihao Lu 
 * @Date: 2021-03-12 21:48:10 
 * @Last Modified by: Shihao Lu
 * @Last Modified time: 2021-03-13 20:13:33
 */
// 螺旋矩阵
function spiralOrder(matrix: number[][]): number[] {
    let result: number [] = []
    if(!matrix || !matrix.length) {
        return result
    }

    let top = 0
    let bottom = matrix.length - 1
    let left = 0
    let right = matrix[0].length - 1
    let nums = matrix.length * matrix[0].length

    while(nums >= 1) {
        for (let i = left; i <= right && nums >= 1; i++) {
            result.push(matrix[top][i])
            nums--
        }
        top++
        for (let i = top; i <= bottom && nums >= 1; i++) {
            result.push(matrix[i][right])
            nums--
        }
        right--
        for (let i = right; i >= left && nums >= 1; i--) {
            result.push(matrix[bottom][i])
            nums--
        }
        bottom--
        for (let i = bottom; i >= top && nums >= 1; i--){
            result.push(matrix[i][left])
            nums--
        }
        left++
    }
    return result
};