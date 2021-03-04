/*
 * @Author: Shihao Lu 
 * @Date: 2021-03-03 22:55:25 
 * @Last Modified by: Shihao Lu
 * @Last Modified time: 2021-03-04 21:52:12
 */

//  3   2  1  0
//  26 26 26 26
//  A  A  A   A

// Excel表列序号
function titleToNumber(s: string): number {
    let result = 0
    let nums = 0
    for (let i = s.length - 1; i >= 0; i--) {
        console.log(result, s.length)
        result = (s.charCodeAt(i) - 'A'.charCodeAt(0) + 1) * Math.pow(26, nums) + result
        // console.log()
        nums++
    }
    return result
};

const temp = 'ZY'
const result = titleToNumber(temp)
console.log(result)

// console.log(temp.charCodeAt(0))