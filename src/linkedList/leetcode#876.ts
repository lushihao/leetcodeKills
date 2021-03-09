/*
 * @Author: Shihao Lu 
 * @Date: 2021-03-05 22:13:51 
 * @Last Modified by: Shihao Lu
 * @Last Modified time: 2021-03-05 22:14:15
 */

 // 链表的中间结点

 function middleNode(head: ListNode | null): ListNode | null {
    let slow = head
    let fast = head

    while(fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }
    return slow
};