/*
 * @Author: Shihao Lu 
 * @Date: 2021-02-21 11:30:05 
 * @Last Modified by: Shihao Lu
 * @Last Modified time: 2021-02-21 15:31:40
 */


 const aArray: number[] = [4, 5, 6, 3, 1, 2]

function bubbleSort(aArray: number[]): void {
    const arrayLength: number = aArray.length
    let flag: boolean = true
    for (let i = 0; i < arrayLength - 1 ; i++ ) {
        if(!flag) break
        for (let j = 0; j < arrayLength - i - 1; j ++) {
            if (aArray[j] > aArray[j + 1]) {
                const temp: number = aArray[j]
                aArray[j] = aArray[j + 1]
                aArray[j + 1] = temp
                flag = true
            }
        }
    }
 } 

bubbleSort(aArray)
console.log(aArray)