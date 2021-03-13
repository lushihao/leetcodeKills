/*
 * @Author: Shihao Lu 
 * @Date: 2021-03-13 21:47:49 
 * @Last Modified by: Shihao Lu
 * @Last Modified time: 2021-03-13 22:17:38
 */

//搜索旋转排序数组

function search(nums: number[], target: number): number {
    return binarySearch(nums, 0, nums.length- 1, target)
};

function binarySearch(nums: number[], left: number, right: number, target: number): number {
    if( right < left) {
        return -1
    }
    const mid = Math.floor((left + right) / 2)
    const midVal = nums[mid]
    const leftVal = nums[left]
    const rightVal = nums[right]

    if(midVal === target) {
        return mid
    }
    if(leftVal === target) {
        return left
    }
    if(rightVal === target) {
        return right
    }
    console.log(leftVal, midVal, rightVal)
    console.log(left, mid, right)
    if(midVal > leftVal) {
        if(target > leftVal && target < midVal) {
            return binarySearch(nums, left + 1, mid -1, target)
        } else {
            return binarySearch(nums, mid + 1, right - 1, target)
        }
    } else {
        if( target > midVal && target < rightVal) {
            return binarySearch(nums, mid + 1, right - 1, target)
        } else {
            return binarySearch(nums, left + 1, mid -1, target)
        }

    }
}

let nums = [4,5,6,7,0,1,2]
let target = 5

console.log(search(nums, target))

export{}