// 2021/2/8
// 剑指Offer03
// 找出数组中重复的数字。
// 在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。
// 数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。
// 请找出数组中任意一个重复的数字。
// 示例 1：
// 输入：
// [2, 3, 1, 0, 2, 5, 3]
// 输出：2 或 3 
// 限制：
// 2 <= n <= 100000

const aList = [6, 4, 1, 2, 0, 5, 3]

const aFunction = (aList) => {
    for( let i = 0; i < aList.length; i++) {
        while(aList[i] !== i) {
            if (aList[i] === aList[aList[i]]) {
                return aList[i]
            }
            let temp = aList[aList[i]] 
            aList[aList[i]] = aList[i]  
            aList[i] = temp
        }
    }
    return -1
}

console.log(aFunction(aList))