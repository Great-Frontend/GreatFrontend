import { isBoolean, isNull, isNumber, isString, isSymbol, isUndefined } from '.';

describe('TypeUtilities Test', () => {
  test('isBoolean', () => {
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(1)).toBe(false);
    expect(isBoolean(false)).toBe(true);
  });

  test('isNumber', () => {
    expect(isNumber(true)).toBe(false);
    expect(isNumber(1)).toBe(true);
    expect(isNumber(false)).toBe(false);
    expect(isNumber(NaN)).toBe(true);
  });

  test('isNull', () => {
    expect(isNull(null)).toBe(true);
    expect(isNull(1)).toBe(false);
    expect(isNull('')).toBe(false);
  });

  test('isString', () => {
    expect(isString(null)).toBe(false);
    expect(isString(1)).toBe(false);
    expect(isString('')).toBe(true);
  });

  test('isSymbol', () => {
    expect(isSymbol(Symbol('foo'))).toBe(true);
    expect(isSymbol(1)).toBe(false);
    expect(isSymbol('')).toBe(false);
    expect(isSymbol(Object(1))).toBe(false);
  });

  test('isUndefined', () => {
    expect(isUndefined(Symbol('foo'))).toBe(false);
    expect(isUndefined(1)).toBe(false);
    expect(isUndefined('')).toBe(false);
    expect(isUndefined(undefined)).toBe(true);
  });
});
