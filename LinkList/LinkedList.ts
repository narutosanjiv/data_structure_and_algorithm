class Node1{
    data:string
    next?:Node1
    constructor(data:string){
        this.data = data
        this.next = undefined
    }
}

class LinkList{
    root?:Node1
    constructor(root: Node1){
        this.root = root
    }
    add(node_val: string){
        let node:Node1 = new Node1(node_val)

        if(this.root == undefined){
            this.root = node
        } else{
            let t:Node1 = this.root
            while(t.next != undefined){
                t = t.next
            }
            t.next = node
        }

    }

    display(){
        let t = this.root
        while(t != undefined){
            console.log(t.data +": ->")
            t = t.next
        }
    }

    delete(data: string){

        // if(this.root.next != undefined){

        // } else{
        //     this.root
        // }
    }

}

let link_list = new LinkList(new Node1("1"))
link_list.add("C")
link_list.add("B")
link_list.add("Z")
link_list.display()