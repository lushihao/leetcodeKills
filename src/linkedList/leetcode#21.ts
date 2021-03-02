/*
 * @Author: Shihao Lu 
 * @Date: 2021-03-02 21:42:15 
 * @Last Modified by:   Shihao Lu 
 * @Last Modified time: 2021-03-02 21:42:15 
 */


 /**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

 // 合并两个有序链表
function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let dummyHead: ListNode = new ListNode(-1)
    let preHead = dummyHead

    while(l1 && l2) {
        if(l1.val <= l2.val) {
            preHead.next = l1
            l1 = l1.next
        } else {
            preHead.next = l2
            l2 = l2.next
        }
        preHead = preHead.next
    }

    preHead.next = l1 ? l1 : l2
    return dummyHead.next
};