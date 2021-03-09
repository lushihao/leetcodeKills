/*
 * @Author: Shihao Lu 
 * @Date: 2021-03-05 22:49:07 
 * @Last Modified by:   Shihao Lu 
 * @Last Modified time: 2021-03-05 22:49:07 
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

 // 二叉树的层序遍历
function levelOrder(root: TreeNode | null): number[][] {
    if(!root) {
        return []
    }

    let result = []
    let queue = [root]

    while(queue.length) {
        let level = queue.length
        let currLevelNodes = []

        for(let i = 0; i< level; i++) {
            let currNode = queue.shift()
            if(currNode.left) {
                queue.push(currNode.left)
            }
            if(currNode.right) {
                queue.push(currNode.right)
            }
            currLevelNodes.push(currNode.val)
        }
        result.push(currLevelNodes)
    }
    return result
};