/*
 * @Author: Shihao Lu 
 * @Date: 2021-02-26 22:33:09 
 * @Last Modified by: Shihao Lu
 * @Last Modified time: 2021-02-26 22:35:20
 */

// 反转字符串
function reverseString(s: string[]): void {
    const n = s.length;
    for (let left = 0, right = n - 1; left < right; ++left, --right) {
        [s[left], s[right]] = [s[right], s[left]];
    }

};

const aString: string[] = ['a', 'b', 'c', 'd']
reverseString(aString)
console.log(aString)
