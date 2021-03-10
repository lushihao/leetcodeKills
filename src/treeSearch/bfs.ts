class TreeNode {
    val: number | null
    left: TreeNode  | null
    right: TreeNode | null
    constructor(val?: number | null, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val ? val : null
        this.left = left ? left : null
        this.right = right ? right : null
    }
}

let root = new TreeNode(1)
let node2 = new TreeNode(2)
let node3 = new TreeNode(3)
let node4 = new TreeNode(4)
let node5 = new TreeNode(5)
let node6 = new TreeNode(6)
let node7 = new TreeNode(7)
root.left = node2
root.right = node3
node2.left = node4
node2.right = node5
node3.left = node6
node3.right = node7
console.log(root)

//  二叉树结构：
//        1
//       / \
//     /     \
//   2        3
//  / \      / \
// 4   5    6    7


function bfs(root: TreeNode) {
    if(!root) {
        return []
    }

    let result = []
    let queue = [root]

    while(queue.length) {
        let level = queue.length
        let currLevelNode = []

        for(let i = 0; i < level; i++) {
            let currNode = queue.shift()
            currNode.left ? queue.push(currNode.left) : ''
            currNode.right ? queue.push(currNode.right) : ''
            currLevelNode.push(currNode.val)
        }
        result.push(currLevelNode)
    }
    return result
}

const a = bfs(root)

console.log(a)
export{}