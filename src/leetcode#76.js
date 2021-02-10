/*
 * @Author: Shihao Lu 
 * @Date: 2021-02-10 18:29:57 
 * @Last Modified by: Shihao Lu
 * @Last Modified time: 2021-02-10 21:19:33
 */

 // 最小覆盖子串

 const minWindow = function(s, t) {
    let result = new Set()
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
        // console.log(temp)
        // console.log(temp[s[j]])
        let right = s[j]
        let left = s[i]
        result.add(right)
        if(temp.hasOwnProperty(right)) {
            temp[s[j]] += 1
            // while(s[i])
        }
        j++
    }
    console.log(temp)
    return result
    

};

const s = "ADOBBECODEBANC"
const t = "ABC"
const result = minWindow(s, t)

console.log(result)