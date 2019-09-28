export class Stack<T>{
    _store: T[] = []
    push(val: T){
        this._store.push(val)
    }

    pop(): T | undefined {
        return this._store.pop()
    }

    top(): T | undefined {
        return this._store.slice(-1)[0]
    }

    isEmpty(): true | false {
        return this._store.length == 0
    }
}