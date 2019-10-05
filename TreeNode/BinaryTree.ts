import { LinkQueue } from '../Queue/LinkQueue'

interface BinaryTreeNode<V> {
    val: V | undefined | null
    left: this | null
    right: this | null
}

export class BinaryTree<T> {
    root: BinaryTreeNode<T>
    constructor(root){
        this.root = root
    }

    static createBinaryNode(val): BinaryTreeNode<number>{
        let node:BinaryTreeNode<number> =  {
            val,
            left: null,
            right: null
        }
        return node
    }

    static contructFromArray(arr: Array<number>): BinaryTree<number> | null {
        if(arr.length ==0)
            return null

        let binary_tree = new BinaryTree<number>(this.createBinaryNode(arr[0]));
        const queue = new LinkQueue<BinaryTreeNode<number>>()
        queue.enqeueue(binary_tree.root)
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

    static inOrderTraversal(head, data: Array<number>){
        if(head == null)
            return
        this.inOrderTraversal(head.left, data)
        data.push(head.val)
        this.inOrderTraversal(head.right, data)
    }
    static preOrderTraversal(){

    }
    static postOrderTraversal(){

    }
}