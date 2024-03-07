import cycle from '.';

describe('Cycle Test', () => {
  test('hello', () => {
    const helloFn = cycle('hello');

    expect(helloFn()).toBe('hello');
    expect(helloFn()).toBe('hello');
    expect(helloFn()).toBe('hello');
  });

  test('on,off', () => {
    const onOffFn = cycle('on', 'off');

    expect(onOffFn()).toBe('on');
    expect(onOffFn()).toBe('off');
    expect(onOffFn()).toBe('on');
  });
});
