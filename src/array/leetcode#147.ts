/*
 * @Author: Shihao Lu 
 * @Date: 2021-02-27 20:29:47 
 * @Last Modified by: Shihao Lu
 * @Last Modified time: 2021-02-27 20:32:52
 */

// 对链表进行插入排序

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? null : 0)
        this.next = (next === undefined ? null : next)
    }
}
function insertionSortList(head: ListNode | null): ListNode | null {
    let dummyHead: ListNode = new ListNode(0)
    if (head === null) {
        return head
    }
    dummyHead.next = head
    let current: ListNode = head.next
    let sortedList: ListNode = head
    while ( current !== null) {
        if ( sortedList.val <= current.val ) {
            sortedList = sortedList.next
        } else {
            let pre = dummyHead
            while ( pre.next.val <= current.val) {
                pre = pre.next
            }
            sortedList.next = current.next
            current.next = pre.next
            pre.next = current
        }

        current = sortedList.next
    }

    return dummyHead.next

};

export{}