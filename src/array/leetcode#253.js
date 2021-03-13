/*
 * @Author: Shihao Lu 
 * @Date: 2021-03-13 22:42:46 
 * @Last Modified by: Shihao Lu
 * @Last Modified time: 2021-03-13 23:04:58
 */

//会议室 II

// function minMeetingRooms(intervals: number[][]): number {
//     let nums = 0
//     let startTime: number [] = []
//     let endTime: number [] = []
//     let startPointer = 0
//     let endPointer = 0

//     intervals.forEach(element => {
//         startTime.push(element[0])
//         endTime.push(element[1])
//     })

//     startTime.sort((a, b) => ( a - b))
//     endTime.sort((a, b) => ( a - b))
    
//     while(l < s.length) e[r] > s[l] ? n++ : r++, l++

//     console.log(endTime)
//     return nums
// };

var minMeetingRooms = function(intervals, s = [], e = [], l = 0, r = 0, n = 0) {
    intervals.forEach(v => (s.push(v[0]), e.push(v[1])))
    s.sort((a, b) => a - b)
    e.sort((a, b) => a - b)
    console.log(s)
    console.log(e)
    while(l < s.length) {
        if (s[l] < e[r])
        {
            n++
        } else {
            r++
        }
        l++
    }
    console.log(n)
    return n
};

minMeetingRooms([[0,30],[5,10],[15,20]])