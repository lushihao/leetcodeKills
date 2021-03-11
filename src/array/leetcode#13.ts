/*
 * @Author: Shihao Lu 
 * @Date: 2021-03-11 22:28:18 
 * @Last Modified by: Shihao Lu
 * @Last Modified time: 2021-03-11 22:30:46
 */

//  罗马数字转整数

function romanToInt(s: string): number {
    const hashMap: any = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        "M": 1000
    }

    let result = 0

    for (let i = 0; i < s.length; i ++) {
        if(hashMap[s[i]] < hashMap[s[i+1]]) {
            result -= hashMap[s[i]]
        } else {
            result += (hashMap[s[i]])
        }
    }

    return result
};