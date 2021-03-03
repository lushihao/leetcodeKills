/*
 * @Author: Shihao Lu 
 * @Date: 2021-03-02 22:21:54 
 * @Last Modified by: Shihao Lu
 * @Last Modified time: 2021-03-03 22:55:13
 */

//相交链表

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

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    if (!headA && !headB) {
        return null
    }
    let p1 = headA
    let p2 = headB
    while (p1 !== p2) {
        p1 = p1 === null ? headB : p1.next
        p2 = p2 === null ? headA : p2.next
    }

    return p1 ? p1 : p2
};