/*
 * @Author: Shihao Lu 
 * @Date: 2021-03-10 22:33:10 
 * @Last Modified by:   Shihao Lu 
 * @Last Modified time: 2021-03-10 22:33:10 
 */
// 反转字符串中的单词 III
function reverseWords(s: string): string {
    const arr = s.split('').reverse().join('')
    return arr.split(' ').reverse().join(' ')
};