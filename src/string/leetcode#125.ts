/*
 * @Author: Shihao Lu 
 * @Date: 2021-03-10 22:05:44 
 * @Last Modified by:   Shihao Lu 
 * @Last Modified time: 2021-03-10 22:05:44 
 */
// 验证回文串
function isPalindrome(s: string): boolean {
    s = s.replace(/[^0-9a-zA-Z]/g,'').toLowerCase()
    let left = 0
    let right = s.length -1
    while(right > left) {
        if(s[right--] !== s[left++]) {
            return false
        }
    }
    return true
};