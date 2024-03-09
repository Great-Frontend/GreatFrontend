import insertionSort from '.';

describe('jinsoo/src/coding/Cycle/index.test.ts Test', () => {
  test('test', () => {
    expect(insertionSort([9, 3, 6, 2, 1, 11])).toEqual([1, 2, 3, 6, 9, 11]);
    expect(insertionSort([12, 16, 14, 1, 2, 3])).toEqual([1, 2, 3, 12, 14, 16]);
  });
});
