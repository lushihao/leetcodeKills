/*
 * @Author: Shihao Lu 
 * @Date: 2021-03-04 23:11:28 
 * @Last Modified by: Shihao Lu
 * @Last Modified time: 2021-03-04 23:11:57
 */

// 删除排序链表中的重复元素

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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    
    let curr = head
    while(curr && curr.next) {
        if(curr.val === curr.next.val) {
            curr.next = curr.next.next
        } else {
            curr = curr.next
        }
    }
    return head
};