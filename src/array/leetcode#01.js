/*
 * @Author: Shihao Lu 
 * @Date: 2021-02-09 22:45:09 
 * @Last Modified by: Shihao Lu
 * @Last Modified time: 2021-02-10 18:31:04
 */

 // 两数之和

const twoSum = function(nums, target) {
    for(i = 0; i < nums.length; i++) {
        let index = nums.indexOf(target - nums[i])
        if(index !== -1 && index !== i) {
            return [i, index]
        }
    }
};

const nums = [3,2,4,15]
const target = 6
const result = twoSum(nums, target)

console.log(result)