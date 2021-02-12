/*
 * @Author: Shihao Lu 
 * @Date: 2021-02-10 18:04:46 
 * @Last Modified by: Shihao Lu
 * @Last Modified time: 2021-02-10 18:31:18
 */

 //  无重复字符的最长子串
const lengthOfLongestSubstring = function(s) {
    let leftPoint = 0
    let maxLen = 0
    let currentLen = 0
    let temp = new Set()
    for( i = 0; i < s.length; i++) {
        currentLen += 1
        while(temp.has(s[i])) {
            temp.delete(s[leftPoint])
            leftPoint += 1
            currentLen -= 1
        }
        maxLen = maxLen > currentLen ? maxLen : currentLen
        temp.add(s[i])
    }
    return maxLen
};

const aString = 'abcddeeee'
const result = lengthOfLongestSubstring(aString)

console.log(result)
