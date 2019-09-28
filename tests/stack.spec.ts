import { Stack } from '../Stack/Stack'

test('Initialize Stack ', () => {
    const stack = new Stack()
    expect(stack.isEmpty()).toBe(true)
})
test('Stack push should add element', () =>{
    const stack = new Stack()
    stack.push("me")
    expect(stack.top()).toBe("me")
})
test('Pop should remove element', () => {
    const stack = new Stack()
    stack.push(1)
    expect(stack.pop()).toBe(1)
})

test('Inserted element should fetch through TOP', () =>{
    const stack = new Stack()
    stack.push(5)
    expect(stack.top()).toBe(5)
    expect(stack.isEmpty()).toBe(false)
})