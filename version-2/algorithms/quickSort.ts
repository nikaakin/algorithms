export const quickSort = (arr: number[], left = 0, right = arr.length) => {
  if (left >= right) return;
  let mid = Math.floor((left + right) / 2);

  for (let i = left; i <= right; i++) {
    if (mid < i && arr[i] < arr[mid]) {
      const temp = arr[i];
      arr[i] = arr[mid + 1];
      arr[mid + 1] = arr[mid];
      arr[mid] = temp;
      mid++;
      i--;
    } else if (mid > i && arr[i] > arr[mid]) {
      const temp = arr[i];
      arr[i] = arr[mid - 1];
      arr[mid - 1] = arr[mid];
      arr[mid] = temp;
      mid--;
      i--;
    }
  }

  quickSort(arr, left, mid - 1);
  quickSort(arr, mid + 1, right);

  return arr;
};
