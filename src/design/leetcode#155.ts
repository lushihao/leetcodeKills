/*
 * @Author: Shihao Lu 
 * @Date: 2021-03-10 22:58:21 
 * @Last Modified by:   Shihao Lu 
 * @Last Modified time: 2021-03-10 22:58:21 
 */

// 最小栈
class MinStack {
    stack: number []
    minStack: number []
    constructor() {
        this.stack = []
        this.minStack = [Infinity]
    }

    push(x: number): void {
        this.stack.push(x)
        this.minStack.push(Math.min(x, this.minStack[this.minStack.length - 1] ))
    }

    pop(): void {
        this.stack.pop()
        this.minStack.pop()
    }

    top(): number {
        return this.stack[this.stack.length - 1]
    }

    getMin(): number {
        return this.minStack[this.minStack.length - 1]
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */