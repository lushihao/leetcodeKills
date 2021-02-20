/*
 * @Author: Shihao Lu 
 * @Date: 2021-02-20 20:50:10 
 * @Last Modified by: Shihao Lu
 * @Last Modified time: 2021-02-20 22:09:48
 */

 // 两数相加

 
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

var addTwoNumbers = function(l1: ListNode, l2: ListNode) {
    let head = null, tail: ListNode = null;
    let carry = 0;
    while (l1 || l2) {
        const n1 = l1 ? l1.val : 0;
        const n2 = l2 ? l2.val : 0;
        const sum = n1 + n2 + carry;
        if (!head) {
            head = tail = new ListNode(sum % 10);
        } else {
            tail.next = new ListNode(sum % 10);
            console.log(tail)
            tail = tail.next
            console.log(tail, "ss")
        }
        carry = Math.floor(sum / 10);
        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }
    }
    if (carry > 0) {
        tail.next = new ListNode(carry);
    }
    return head;
};

// l1 = [2,4,3], l2 = [5,6,4]
const l1 = new ListNode(2, new ListNode(4, new ListNode(3, null)))
const l2 = new ListNode(5, new ListNode(6, new ListNode(4, null)))
const result = addTwoNumbers(l1, l2)

console.log(result)

export{}