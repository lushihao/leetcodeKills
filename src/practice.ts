/*
 * @Author: Shihao Lu 
 * @Date: 2021-02-21 11:30:05 
 * @Last Modified by: Shihao Lu
 * @Last Modified time: 2021-03-04 22:20:35
 */


class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

export{}

const aList = new ListNode(1, new ListNode(2,  new ListNode(3, new ListNode(4))))
console.log(aList)

function reverse(head: ListNode): void {
    let pre = null
    let curr = head

    while(curr !== null) {
        let nextTemp = curr.next
        curr.next = pre
        pre = curr
        curr = nextTemp
    }

    console.log(pre)

    
}

reverse(aList)