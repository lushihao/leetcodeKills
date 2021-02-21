/*
 * @Author: Shihao Lu 
 * @Date: 2021-02-21 15:41:23 
 * @Last Modified by: Shihao Lu
 * @Last Modified time: 2021-02-21 15:42:15
 */

 // 最小的 k 个数
function getLeastNumbers(arr: number[], k: number): number[] {
    let flag: boolean = true
    const arrLen: number = arr.length
    for ( let i = 0; i < arrLen - 1; i++) {
        if(!flag) break
        flag = false
        for ( let j = 0; j < arrLen - i - 1; j++) {
            if(arr[j + 1] < arr[j]) {
                let temp: number = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                flag = true
            }
        }  
    }
    return arr.splice(0, k)
};

const aList: number[] = [1, 2, 0]
const k: number = 1
const result = getLeastNumbers(aList, k)

console.log(result)

 export {}