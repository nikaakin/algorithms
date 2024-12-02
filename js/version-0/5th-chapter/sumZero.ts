export const sumZero = (arr: number[]) => {
  let left = 0,
    right = arr.length - 1;

  while (left !== right) {
    const sum = arr[left] + arr[right];

    if (sum === 0) return true;
    if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
  return false;
};
