import { LinkQueue } from '../Queue/LinkQueue'

test('Queue enqueing should add element', () =>{
    const queue = new LinkQueue()
    queue.enqeueue("test")
    expect(queue.isEmpty()).toBe(false)
})

test('Queue enqueing should add element', () =>{
    const queue = new LinkQueue()
    queue.enqeueue("test")
    queue.enqeueue("test2")
    let data = queue.dequeue()
    expect(data).toBe("test")
    expect(queue.isEmpty()).toBe(false)
})