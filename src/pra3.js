const { allowedNodeEnvironmentFlags } = require("process")

class LinkedNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}
const head = new LinkedNode(2)
head.next = new LinkedNode(4)
head.next.next = new LinkedNode(1, new LinkedNode(3))


head.next = head.next.next

console.log(head)
