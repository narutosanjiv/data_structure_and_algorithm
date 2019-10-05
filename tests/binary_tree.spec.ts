import { BinaryTree } from '../TreeNode/BinaryTree'

test("Create Binary Tree from array", () => {
    let arr = [1,2,3,5,null,7,8]
    let binary_tree = BinaryTree.contructFromArray(arr)
    let inOrderArr = []
    BinaryTree.inOrderTraversal(binary_tree.root, inOrderArr)
    expect(inOrderArr).toStrictEqual([5,2,1,7,3,8])
})