/*
 * @Author: Shihao Lu 
 * @Date: 2021-02-28 12:52:43 
 * @Last Modified by: Shihao Lu
 * @Last Modified time: 2021-02-28 16:30:35
 */

 //Heap Sort

const arr: number [] = [5, 6, 7, 99, 1, 9]
function heapSort(arr: number []): void {
    const arrLength = arr.length
    for (let i = arrLength / 2 - 1; i >= 0; i--) {
        heapify(arr, i , arrLength)
    }

    for(let j = arrLength -1; j > 0; j--){
        // console.log(j)
        // console.log(arr)

        let temp = arr[j]
        arr[j] = arr[0]
        arr[0] = temp

        heapify(arr, 0, j)

    }


}

function heapify(arr: number [], i: number, length: number): void {
    let temp: number = arr[i]
    console.log("Before heap: ", arr, i, length, temp)
    for ( let k = 2 * i + 1; k < length; k = 2 * k + 1) {
        // console.log(arr[k])
        if (k + 1 < length && arr[k + 1] > arr[k]) {
            k++
        }                 
        if ( arr[k] > temp) {
            arr[i] = arr[k]
            i = k
        } else {
            break
        }
    }
    arr[i] = temp
    console.log(arr)
}


heapSort(arr)