export const quickSort = (arr: number[]) => {
  let left: number[] = [],
    right: number[] = [];

  if (arr.length <= 2) {
    return arr;
  }
  const { pivotIndex, sortedArray } = sortPivotElement(arr);

  left = quickSort(sortedArray.slice(0, pivotIndex));
  right = quickSort(sortedArray.slice(pivotIndex + 1));

  return [...left, sortedArray[pivotIndex], ...right];
};

const sortPivotElement = (arr: number[]) => {
  let pivotIndex = 0;
  let sortedArray: number[] = [arr[0]];
  // todo implement swap() instead of push/unshift
  for (let i = 1; i < arr.length; i++) {
    if (arr[0] > arr[i]) {
      sortedArray.unshift(arr[i]);
      pivotIndex++;
    } else {
      sortedArray.push(arr[i]);
    }
  }

  return { pivotIndex, sortedArray };
};
