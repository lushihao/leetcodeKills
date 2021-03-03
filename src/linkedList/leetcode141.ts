/*
 * @Author: Shihao Lu 
 * @Date: 2021-03-02 22:43:28 
 * @Last Modified by: Shihao Lu
 * @Last Modified time: 2021-03-03 22:37:20
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

 //环形链表

function hasCycle(head: ListNode | null): boolean {

    if (!head || !head.next) {
        return false
    }

    let slow = head
    let fast = head.next

    while (slow !== fast) {
        if (!fast || !fast.next) {
            return false
        }

        slow = slow.next
        fast = fast.next.next
    }

    return true
};