/*
 * @Author: Shihao Lu 
 * @Date: 2021-02-10 18:29:57 
 * @Last Modified by: Shihao Lu
 * @Last Modified time: 2021-02-12 22:36:51
 */

 // 最小覆盖子串

 const check = (aList, bList) => {
    for()
 }
 const minWindow = function(s, t) {
    let result = []
    let temp = {}
    let minLen = 0
    let currentLen = 0
    const sLen = s.length
    const tLen = t.length
    let i = 0
    let j = 0
    for(i of t) {
        temp[i] = 0
    }

    
    while(j < sLen) {
        result.push(s[j])
        if()
    }
    console.log(temp)
    return result
    

};

const s = "ADOBBECODEBANC"
const t = "ABC"
const result = minWindow(s, t)

console.log(result)