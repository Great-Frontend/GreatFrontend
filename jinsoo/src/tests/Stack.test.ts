import Stack from '../coding/Stack';

describe('Stack Test', () => {
  test('isEmpty', () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBe(true);
  });

  test('push', () => {
    const stack = new Stack();
    expect(stack.push(1)).toBe(1);
  });

  test('peek', () => {
    const stack = new Stack();
    stack.push(3);
    expect(stack.peek()).toBe(3);
  });

  test('pop', () => {
    const stack = new Stack();
    expect(stack.pop()).toBe(undefined);
    stack.push(3);
    expect(stack.pop()).toBe(3);
  });

  test('len', () => {
    const stack = new Stack();
    stack.push(3);
    stack.push(2);
    stack.push(1);
    expect(stack.length()).toBe(3);
  });
});
