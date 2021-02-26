/*
 * @Author: Shihao Lu 
 * @Date: 2021-02-26 22:09:39 
 * @Last Modified by: Shihao Lu
 * @Last Modified time: 2021-02-26 22:12:01
 */

// 合并两个有序数组

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    nums1.splice(m)
    nums2.splice(n)
    nums1.push.apply(nums1, nums2)
    nums1.sort((a, b) => (a-b))
}