/*
 * @Author: Shihao Lu 
 * @Date: 2021-02-25 21:36:31 
 * @Last Modified by: Shihao Lu
 * @Last Modified time: 2021-02-25 21:37:31
 */


class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function reverseList(head: ListNode | null): ListNode | null {
    if (head === null) return null
    let stack: number[] = []
    let counter: number = 1
    stack.push(head.val)
    while (head.next !== null) {
        head = head.next
        stack.push(head.val)
        counter++
    }
    console.log(stack)

    let cur: ListNode = new ListNode(stack.pop())
    let newHead: ListNode = cur

    while (counter > 1) {
        cur.next = new ListNode(stack.pop())
        cur = cur.next

        counter--
    }

    return newHead

};