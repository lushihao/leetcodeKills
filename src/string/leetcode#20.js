/*
 * @Author: Shihao Lu 
 * @Date: 2021-03-09 22:54:24 
 * @Last Modified by: Shihao Lu
 * @Last Modified time: 2021-03-11 22:26:50
 */

// 有效的括号
function isValid(s) {
    if(s.length % 2) {
        return false
    }

    const obj  = {
        '(': ')',
        '{': '}',
        '[': ']'
    }

    let stack = []
    stack.push(s[0])

    for(let i = 1; i < s.length; i++) {
        let stackLen = stack.length
        if(obj[stack[stackLen-1]] === s[i] ) {
            stack.pop()
        } else {
            stack.push(s[i])
        }
    }

    return stack.length ? false : true
};