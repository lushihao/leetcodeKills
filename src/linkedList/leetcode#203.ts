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

 // 移除链表元素
 
function removeElements(head: ListNode | null, val: number): ListNode | null {
    let sentinel = new ListNode(0)
    sentinel.next = head
    let pre = sentinel
    let curr = head
    while(curr) {
        if(curr.val === val) {
            pre.next = curr.next
        } else {
            pre = curr
        }
        curr = curr.next
    }
    return sentinel.next
};