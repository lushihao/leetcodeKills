/*
 * @Author: Shihao Lu 
 * @Date: 2021-03-13 19:58:08 
 * @Last Modified by: Shihao Lu
 * @Last Modified time: 2021-03-13 19:58:37
 */

// 翻转字符串里的单词
const a = "  Bob    Loves  Alice   "

function reverseWords(s: string): string {
    let left = 0
    let right = s.length - 1

    while(left <= right && s[left] === ' ') {
        left++
    }

    while(right >= left && s[right] === ' ') {
        right--
    }
  
    let queue: string [] = []
    let words: string = ''

    while(left <= right) {
        console.log(left, right)
        if(s[left] !== ' ') {
            words += s[left]
        } else if(words !== ''){ 
            queue.unshift(words)
            words = ''
        }
        left++
    }
    queue.unshift(words)
    return queue.join(' ')
};

reverseWords(a)
export{}