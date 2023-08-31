export const quick_sort = (
  arr: number[],
  low = 0,
  high = arr.length - 1
): number[] => {
  if (low >= high) return;
  let pivot = Math.floor(low + (high - low) / 2);
  for (let i = low; i <= high; i++) {
    if (pivot === i) continue;

    if (pivot < i && arr[pivot] >= arr[i]) {
      const temp = arr[pivot];
      arr[pivot] = arr[i];
      // checking if i and pivot are adjacent. If they are not then we need to swap i and pivot and move pivot to its adjacent element.
      if (pivot + 1 === i) {
        arr[i] = temp;
      } else {
        const temp1 = arr[pivot + 1];
        arr[pivot + 1] = temp;
        arr[i] = temp1;
      }
      // moving pivot to its adjacent element
      pivot++;
      // if pivot (now temp) and arr[i] (now arr[pivot]) are same then it means we have something unchecked on i
      // we need to check i  it again
      if (temp === arr[pivot]) i--;
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
      if (temp === arr[pivot]) i--;
    }
  }

  quick_sort(arr, low, pivot - 1);
  quick_sort(arr, pivot + 1, high);
  return arr;
};
