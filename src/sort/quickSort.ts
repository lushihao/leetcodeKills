/*
 * @Author: Shihao Lu 
 * @Date: 2021-02-28 17:50:56 
 * @Last Modified by: Shihao Lu
 * @Last Modified time: 2021-02-28 20:35:15
 */

 // Quick Sort

 function quickSort(arr: number [], left: number, right: number): void {
    let start: number = left
    let end: number = right
    let pvoit: number = arr[Math.floor((left + right) / 2)]
    let temp: number = 0
    console.log(arr)
    while (start < end) {
        console.log(arr)
        while (arr[start] < pvoit) {
            start++
        }
        while (arr[end] > pvoit) {
            end--
        }

        if(start >= end) {
            break
        }

        // if (arr[start] === pvoit) {
        //     start++
        // }
        // if (arr[end] === pvoit) {
        //     end--
        //     console.log(start, pvoit, end)
        //     console.log('ss', arr)
        // }

        temp = arr[start]
        arr[start] = arr[end] 
        arr[end] = temp

        if (arr[start] === pvoit) {
            end--
        }
        if (arr[end] === pvoit) {
            start++
        }
    }
    if (end === start) {
        end--
        start++
    }
    if(left < end) {
        quickSort(arr, left, end)
    }
    if(right > start) {
        quickSort(arr, start, right)
    }
 }

 const arr: number [] = [1, 2, 3, 4, 0, 4, 5]
//  const arr: number [] = [3, 3, 2, 2, 1]

 quickSort(arr, 0, arr.length - 1)
 console.log(arr)

export{}