export const pivot = (arr: number[], start = 0, end = arr.length) => {
  let pivotIndex = start;

  for (let i = start + 1; i < end; i++) {
    if (arr[i] < arr[start]) {
      pivotIndex++;
      const temp = arr[i];
      arr[i] = arr[pivotIndex];
      arr[pivotIndex] = temp;
    }
  }
  const temp = arr[pivotIndex];
  arr[pivotIndex] = arr[start];
  arr[start] = temp;

  return pivotIndex;
};

export const quickSortCourse = (
  arr: number[],
  start: number = 0,
  end: number = arr.length
) => {
  if (start === end) return;

  const pivotIndex = pivot(arr, start, end);

  quickSortCourse(arr, start, pivotIndex);
  quickSortCourse(arr, pivotIndex + 1, end);

  return arr;
};
