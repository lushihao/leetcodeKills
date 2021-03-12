/*
 * @Author: Shihao Lu 
 * @Date: 2021-03-12 21:38:36 
 * @Last Modified by: Shihao Lu
 * @Last Modified time: 2021-03-12 21:42:43
 */

// 岛屿数量

function numIslands(grid: string[][]): number {
    let nums = 0 
    let rowSize = grid.length
    let colSize = grid[0].length

    for (let row = 0; row < rowSize; row++) {
        for(let col = 0; col < colSize; col++) {
            if(grid[row][col] === '1') {
                nums++
                findIsland(grid, row, col)
                console.log(grid)

            }
        }
    }

    return nums
};
function findIsland(grid: string[][], row: number, col: number): void {
    let rowSize = grid.length
    let colSize = grid[0].length

    grid[row][col] = '0'
    if( row - 1 >= 0 && grid[row - 1][col] === '1') {
        findIsland(grid, row - 1, col)
    }
    if( row + 1 <= rowSize - 1 && grid[row + 1][col] === '1') {
        findIsland(grid, row + 1, col)
    }
    if( col - 1 >= 0 && grid[row][col - 1] === '1') {
        findIsland(grid, row, col - 1)
    }
    if( col + 1 <= colSize - 1 && grid[row][col + 1] === '1') {
        findIsland(grid, row, col + 1)
    }
}
const grid = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]
  
numIslands(grid)