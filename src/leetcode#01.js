/*
 * @Author: Shihao Lu 
 * @Date: 2021-02-09 22:45:09 
 * @Last Modified by: Shihao Lu
 * @Last Modified time: 2021-02-09 22:53:02
 */

const nums = [3,2,4,15]
const target = 6

const twoSum = function(nums, target) {
    for(i = 0; i < nums.length; i++) {
        let index = nums.indexOf(target - nums[i])
        if(index !== -1 && index !== i) {
            return [i, index]
        }
    }
};

// console.log(twoSum(nums, target))
const x = twoSum(nums, target)
console.log(x)