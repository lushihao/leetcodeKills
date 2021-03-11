/*
 * @Author: Shihao Lu 
 * @Date: 2021-03-11 22:48:55 
 * @Last Modified by:   Shihao Lu 
 * @Last Modified time: 2021-03-11 22:48:55 
 */
// 用栈实现队列

class MyQueue {
    inStack: number []
    outStack: number []
    constructor() {
        this.inStack = []
        this.outStack = []
    }

    push(x: number): void {
        this.inStack.push(x)
    }

    pop(): number {
        if(!this.outStack.length){
            while(this.inStack.length) {
                this.outStack.push(this.inStack.pop())
            }
        }
        return this.outStack.pop()
    }

    peek(): number {
        if(!this.outStack.length){
            while(this.inStack.length) {
                this.outStack.push(this.inStack.pop())
            }
        }
        return this.outStack[this.outStack.length - 1]
    }

    empty(): boolean {
        if(this.inStack.length || this.outStack.length) {
            return false
        }
        return true
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */