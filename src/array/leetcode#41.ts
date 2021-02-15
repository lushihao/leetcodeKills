function firstMissingPositive(nums: number[]): number {
    const alen: number = nums.length
    
    for(let i = 0; i < alen; i++) {
        while(nums[i] !== i + 1) {
            if(nums[i] <= 0 || nums[i] > alen || nums[i] === nums[nums[i] - 1]) {
                break
            }
            let index: number = nums[i] - 1 
            nums[i] = nums[index]
            nums[index] = index + 1
            console.log(nums, 'ss')
        }
    }
    
    for(let i = 0; i < alen; i++) {
        if(i !== nums[i] + 1)
        return i + 1
    }
}

const aList: number[] = [1, 2, 0]
const result = firstMissingPositive(aList)

console.log(result)

 export {}