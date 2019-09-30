import { LinkQueue } from '../Queue/LinkQueue'

interface BinaryTreeNode<T> {
    val: T | undefined | null
    left: this | null
    right: this | null
}

class BinaryTree<T> {
    root: BinaryTreeNode<T>
    constructor(root){
        this.root = root
    }

    createBinaryNode(val): BinaryTreeNode<number>{
        let node:BinaryTreeNode<number> =  {
            val,
            left: null,
            right: null
        }
        return node
    }

    contructFromArray(arr: Array<number>): BinaryTree<number> | null {
        if(arr.length ==0)
            return null

        let binary_tree = new BinaryTree<number>(this.createBinaryNode(arr[0]));
        const queue = new LinkQueue<BinaryTreeNode<number>>()
        queue.enqeueue(this.root)
        let i = 1

        while(i < arr.length){
            let parent:BinaryTreeNode<number> = queue.dequeue()
            if(arr[i]){
                let node = this.createBinaryNode(arr[i]);
                parent.left = node
                queue.enqeueue(node)
            }
            i = i + 1
            if(arr[i]){
                let node = this.createBinaryNode(arr[i]);
                parent.right = node
                queue.enqeueue(node)
            }
            i = i + 1
        }

        return binary_tree
    }

    inOrderTraversal(){

    }
    preOrderTraversal(){

    }
    postOrderTraversal(){

    }
}