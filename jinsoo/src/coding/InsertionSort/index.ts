/**
 * @param {Array<number>} arr The input integer array to be sorted.
 * @return {Array<number>}
 */
export default function insertionSort(arr: number[]) {
  let curIdx = 1;
  while (curIdx < arr.length) {
    let prevIdx = curIdx - 1;
    while (prevIdx >= 0 && arr[prevIdx] > arr[curIdx]) {
      prevIdx--;
    }
    const temp = arr[curIdx]; // 3,  curidx: 1
    arr.splice(curIdx, 1);
    arr.splice(prevIdx + 1, 0, temp);
    curIdx++;
  }

  return arr;
}
