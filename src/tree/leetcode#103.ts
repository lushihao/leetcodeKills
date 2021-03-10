/*
 * @Author: Shihao Lu 
 * @Date: 2021-03-10 21:04:01 
 * @Last Modified by: Shihao Lu
 * @Last Modified time: 2021-03-10 21:05:02
 */

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

 // 二叉树的锯齿形层序遍历
 function zigzagLevelOrder(root: TreeNode | null): number[][] {
    const result: number [][] = []
    if(!root) {
        return result
    }

    const queue = [root]
    let level = 0

    while(queue.length) {
        const currLevelNodes = []
        const len = queue.length
        level++

        for (let i = 0; i < len; i++) {
            let currNode = queue.shift()
            if (level % 2 === 1) {
                currLevelNodes.push(currNode.val)
            } else {
                currLevelNodes.unshift(currNode.val)
            }
            if(currNode.left) {
                queue.push(currNode.left)
            }
            if(currNode.right) {
                queue.push(currNode.right)
            }
        }
        result.push(currLevelNodes)
    }
    return result
 }
    export{}