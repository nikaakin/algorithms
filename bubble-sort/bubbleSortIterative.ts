export const bubbleSort = (arr: (number | string)[]) => {
  let length = arr.length;
  let noSwaps: boolean;
  for (let j = 0; j < arr.length; j++) {
    noSwaps = true;
    for (let i = 1; i < length; i++) {
      if (arr[i - 1] > arr[i]) {
        const temp = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = temp;
        noSwaps = false;
      }
    }
    // in cases of semi-sorted arrays this will reduce time
    // [8, 1, 2, 3, 4, 5, 6 ,7]
    // like in this case this will only take 2 loops instead of 7
    if (noSwaps) break;
    length--;
  }

  return arr;
};
