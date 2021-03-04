/*
 * @Author: Shihao Lu 
 * @Date: 2021-03-04 22:49:00 
 * @Last Modified by: Shihao Lu
 * @Last Modified time: 2021-03-04 22:49:46
 */

 // 回文链表

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

function reverse(head: ListNode | null): ListNode {
    let pre = null
    let curr = head
    while(curr !== null) {
        let tempNext = curr.next
        curr.next = pre
        pre = curr
        curr = tempNext
    }
    return pre
}

function endOfFirstHalf(head: ListNode | null): ListNode {
    let slow = head
    let fast = head
    while(fast.next && fast.next.next) {
        slow = slow.next
        fast = fast.next.next
    }
    return slow
}

function isPalindrome(head: ListNode | null): boolean {
    if(!head) {
        return true
    }
    let result = true

    let firstHalf = endOfFirstHalf(head)
    let secondFalf = reverse(firstHalf.next)

    let p1 = head
    let p2 = secondFalf 

    while(result && p2) {
        if(p1.val !== p2.val) {
            return false
        }
        p1 = p1.next
        p2 = p2.next
    }
    return result
    
};