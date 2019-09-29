export class InsertionSort{
    _store: number[]
    len: number

    constructor(arr: number[]){
        this._store = arr
        this.len = arr.length
    }

    run(){
        for( let i=1;i < this.len;i++){
            let key = this._store[i]
            let j = i - 1
            while(j >= 0 && this._store[j] > key){
                this._store[j + 1] = this._store[j]
                j--
            }
            this._store[j + 1] = key
        }
        return this._store
    }

    display(){
        for (let i=0;i < this.len;i++){
            console.log(this._store[i])
        }
    }
}