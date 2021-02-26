let nums1 = [1,2,3,0,0,0]
const m = 3
const n = 3
let nums2 = [2,5,6]

// nums1.pop()
// nums1.splice(0, m).push.apply(nums1.splice(0, m), nums2.splice(0, n))

nums1.splice(m)
nums2.splice(n)
nums2.push.apply(nums1, nums2)
// nums1.sort()
// x = nums1.concat(...nums2)
// console.log(nums1.slice(0, m).push.apply(nums1.slice(0, m), nums2.slice(0, n)))
console.log(nums2)
console.log(nums1)

const x = Math.max.apply([1, 7], [1,2,3]); // 也会返回 3
console.log(x)





