/*
 * @Author: Shihao Lu 
 * @Date: 2021-03-06 20:08:53 
 * @Last Modified by:   Shihao Lu 
 * @Last Modified time: 2021-03-06 20:08:53 
 */

// 统计匹配检索规则的物品数量
function countMatches(items: string[][], ruleKey: string, ruleValue: string): number {
    let nums: number = 0

    items.map(item => {
        (item[0] === ruleValue && ruleKey === 'type') ||
        (item[1] === ruleValue && ruleKey === 'color') ||
        (item[2] === ruleValue && ruleKey === 'name')  ? nums++ : nums
    })

    return nums
};