/*
 * @Author: Shihao Lu 
 * @Date: 2021-02-08 22:45:12 
 * @Last Modified by: Shihao Lu
 * @Last Modified time: 2021-02-10 18:31:36
 */

 // 二维数组中的查找

const searchMatrix = function(matrix, target) {
    let col = matrix[0].length - 1, 
    row = 0
    if(target > matrix[matrix.length-1][col] || target <matrix[0][0] ) {
        return false
    }
    while(col >= 0 && row <= matrix.length - 1) {
        if(!matrix[row]) {
            return false
        }
        if(target < matrix[row][col]) {
            col -= 1
        } else if(target > matrix[row][col]){
            row += 1
        } else{
            return true
        }
    }
    return false
};

const aMetric = [
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
  ]
const aTarget = 30
const result = searchMatrix(aMetric)

console.log(result)