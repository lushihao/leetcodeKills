/*
 * @Author: Shihao Lu 
 * @Date: 2021-02-08 22:45:03 
 * @Last Modified by: Shihao Lu
 * @Last Modified time: 2021-02-09 22:57:56
 */

// 数组中重复的数字
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

const result = aFunction(aList)
console.log(result)