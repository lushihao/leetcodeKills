/*
 * @Author: Shihao Lu 
 * @Date: 2021-02-26 22:49:43 
 * @Last Modified by: Shihao Lu
 * @Last Modified time: 2021-02-26 22:52:14
 */



class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    const pList: TreeNode[] = findPath(root, p)
    const qList: TreeNode[] = findPath(root, q)
    let acc
    console.log(pList)
    console.log(qList)
    for (let i = 0; i < qList.length && i < pList.length; ++i) {
        if (pList[i] === qList[i]) {
            acc = pList[i]
        } else {
            break
        }

    }

    return acc

};

function findPath(root: TreeNode | null, target: TreeNode | null): TreeNode[] {
    let pathList: TreeNode[] = []
    while (root) {
        if (target.val > root.val) {
            pathList.push(root)
            root = root.right
        } else if (target.val < root.val) {
            pathList.push(root)
            root = root.left
        } else if (target.val === target.val) {
            pathList.push(root)
            break
        }
    }
    return pathList
}