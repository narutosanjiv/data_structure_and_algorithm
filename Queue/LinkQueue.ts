interface Queue<V> {
    val: V
    link: this | null
}

export class LinkQueue<V> {
    front: Queue<V>
    rear: Queue<V>

    enqeueue(data){
        let q:Queue<V> = {
            val: data,
            link: null
        }
        if(!this.front){
            this.front = q
            this.rear = this.front
            return
        }

        this.rear.link = q
        this.rear = q
    }

    dequeue(): V{
        if(!this.front){
            this.rear = null
            return null
        }
        let data = this.front.val
        this.front = this.front.link
        return data
    }

    isEmpty(): true | false {
        return this.front == null
    }
}