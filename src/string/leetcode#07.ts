/*
 * @Author: Shihao Lu 
 * @Date: 2021-03-10 21:33:26 
 * @Last Modified by:   Shihao Lu 
 * @Last Modified time: 2021-03-10 21:33:26 
 */
// 整数反转
function reverse(x: number): number {
    let result = 0
    let flag = false
    if(x < 0) {
        flag = true
    }
    x = Math.abs(x)
    while(x !== 0) {
        let temp = x % 10
        result = result * 10 + temp
        x = Math.floor(x/10)
    }
    result = flag ? -result : result
    result = result > Math.pow(2, 31) - 1 ? 0 : result
    result = result < Math.pow(-2, 31) ? 0 : result
    return result
};

export{}