export const quick_sort = (arr: number[]): number[] => {
  if (arr.length <= 1) return arr;
  let pivot = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[pivot] > arr[i]) {
      let temp = arr[pivot];
      arr[pivot] = arr[i];
      arr[i] = temp;
      pivot = i;
    }
  }

  return quick_sort(arr.slice(0, pivot + 1)).concat(
    quick_sort(arr.slice(pivot + 1))
  );
};
