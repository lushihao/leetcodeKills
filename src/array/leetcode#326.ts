/*
 * @Author: Shihao Lu 
 * @Date: 2021-02-27 11:24:28 
 * @Last Modified by:   Shihao Lu 
 * @Last Modified time: 2021-02-27 11:24:28 
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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
	if (!root || root.val === q.val || root.val === p.val) {
        return root
    }

    const left: TreeNode = lowestCommonAncestor(root.left, q, p)
    const right: TreeNode = lowestCommonAncestor(root.right, q, p)

    if (left && right) {
        return root
    }

    return left ? left : right
};