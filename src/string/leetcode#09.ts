/*
 * @Author: Shihao Lu 
 * @Date: 2021-03-10 22:19:19 
 * @Last Modified by:   Shihao Lu 
 * @Last Modified time: 2021-03-10 22:19:19 
 */

// 回文数
function isPalindrome(x: number): boolean {
    if(x < 0 || (x % 10 === 0 && x !== 0 )) {
        return false
    }

    let reverseNum = 0
    while(reverseNum < x) {
        reverseNum = reverseNum * 10 + x % 10
        x = Math.floor(x/10)
    }

    return reverseNum === x || Math.floor(reverseNum/10) === x
};
export{}