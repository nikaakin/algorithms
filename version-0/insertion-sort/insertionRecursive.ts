export const insertionRecursive = (
  arr: (number | string)[],
  curIndex?: number | undefined
) => {
  if (curIndex === arr.length) return arr;

  curIndex = curIndex || 1;
  const nextIndex = curIndex + 1;
  for (let i = curIndex - 1; i >= 0; i--) {
    if (arr[i] > arr[curIndex]) {
      const temp = arr[i];
      arr[i] = arr[curIndex];
      arr[curIndex] = temp;
      curIndex = i;
    }
  }
  return insertionRecursive(arr, nextIndex);
};
