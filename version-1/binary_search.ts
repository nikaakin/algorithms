export const binary_search = (arr: number[], search_val: number) => {
  let left = 0,
    right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === search_val) return true;
    if (arr[mid] < search_val) left = mid + 1;
    else right = mid - 1;
  }

  return false;
};
