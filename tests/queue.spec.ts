import { LinkQueue } from '../Queue/LinkQueue'

test('Queue enqueing should add element', () =>{
    const queue = new LinkQueue()
    queue.enqeueue("test")
    expect(queue.isEmpty()).toBe(false)
})

test('Queue enqueing should add element', () =>{
    const queue = new LinkQueue()
    queue.enqeueue("test")
    let data = queue.dequeue()
    expect(data).toBe(data)
    expect(queue.isEmpty()).toBe(true)
})