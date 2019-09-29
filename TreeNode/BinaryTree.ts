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

    contructFromArray(arr: Array<T>){

        for(let i=0;i<arr.length;i++){

        }
    }
}