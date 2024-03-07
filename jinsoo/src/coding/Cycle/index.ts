/**
 * @template T
 * @param  {...T} values
 *
 * @returns () => T
 */
export default function cycle(...values: unknown[]) {
  let index = 0;
  return () => {
    if (index >= values.length) {
      index = 0;
    }
    return values[index++ % values.length];
  };
}
