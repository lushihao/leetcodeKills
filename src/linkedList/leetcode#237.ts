/*
 * @Author: Shihao Lu 
 * @Date: 2021-03-04 22:59:57 
 * @Last Modified by:   Shihao Lu 
 * @Last Modified time: 2021-03-04 22:59:57 
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

 //  删除链表中的节点
/**
 Do not return anything, modify it in-place instead.
 */
function deleteNode(root: ListNode | null): void {
    root.val = root.next.val
    root.next = root.next.next

};