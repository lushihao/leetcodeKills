/*
 * @Author: Shihao Lu 
 * @Date: 2021-02-21 11:30:05 
 * @Last Modified by: Shihao Lu
 * @Last Modified time: 2021-02-25 20:18:02
 */


const aList = [1, 1, 2, 3, 4, 5, 7]

const x = Array.from(new Set(aList))
let bList = []
console.log(x)

x.map((value, index) => {
    console.log(x)
    bList[value] = value
})

console.log(bList)