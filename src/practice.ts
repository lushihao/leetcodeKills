function twoSum(nums: number[], target: number): number[] {
    const numsLen: number = nums.length
    for(let i = 0; i < numsLen; i++ ) {
        let index: number = nums.indexOf(target - nums[i])
        if( i != index && index != -1) {
            return [i, index]
        }
    }
}

const aList = [3,2,4]

const target = 6

const result = twoSum(aList, target)

console.log(result)