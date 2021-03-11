/*
 * @Author: Shihao Lu 
 * @Date: 2021-03-06 21:30:45 
 * @Last Modified by: Shihao Lu
 * @Last Modified time: 2021-03-11 22:26:23
 */

//最长公共子序列

function longestCommonSubsequence(text1: string, text2: string): number {
    const text1Len = text1.length 
    const text2Len = text2.length 
    const result = new Array(text1Len + 1).fill(0).map(() => new Array(text2Len + 1).fill(0))

    for (let i = 0; i < text1Len; i++) {
        for( let j = 0; j < text2Len; j++) {
            if(text1[i] === text2[j]) {
                result[i+1][j+1] = result[i][j] + 1
            } else {
                result[i+1][j+1] = Math.max(result[i+1][j], result[i][j+1])
            }
        }
    }
    return result[text1Len][text2Len]
};

let text1 = "abcde"
let text2 = "ace" 

console.log(longestCommonSubsequence(text1, text2))