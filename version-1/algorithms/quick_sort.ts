export const quick_sort = (
  arr: number[],
  low = 0,
  high = arr.length - 1
): number[] => {
  if (low >= high) return;
  let pivot = Math.floor(low + (high - low) / 2);

  console.log(low, high);

  for (let i = low; i <= high; i++) {
    console.log(pivot, arr);
    if (pivot === i) continue;

    if (pivot < i && arr[pivot] >= arr[i]) {
      const temp = arr[pivot];
      arr[pivot] = arr[i];
      if (pivot + 1 === i) {
        arr[i] = temp;
      } else {
        const temp1 = arr[pivot + 1];
        arr[pivot + 1] = temp;
        arr[i] = temp1;
      }
      pivot++;
    } else if (pivot > i && arr[pivot] <= arr[i]) {
      const temp = arr[pivot];
      arr[pivot] = arr[i];
      if (pivot - 1 === i) {
        arr[i] = temp;
      } else {
        const temp1 = arr[pivot - 1];
        arr[pivot - 1] = temp;
        arr[i] = temp1;
      }
      pivot--;
    }
  }
  console.log(arr, pivot);

  quick_sort(arr, low, pivot - 1);
  quick_sort(arr, pivot + 1, high);
  return arr;
};
