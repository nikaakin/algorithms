export const mergeSort = (array: number[]) => {
  const firstHalf = Math.floor(array.length / 2) + 1;
  let outArray: number[] = [];

  if (array.length <= 2) {
    if (array[0] > array[1]) {
      const temp = array[0];
      array[0] = array[1];
      array[1] = temp;
    }
    return array;
  }

  array = [
    ...mergeSort(array.slice(0, firstHalf)),
    ...mergeSort(array.slice(firstHalf)),
  ];

  let i = firstHalf,
    j = 0;
  while (array.length !== 0 && i !== j) {
    if (array[i] < array[j]) {
      outArray.push(array[i]);
      array.splice(i, 1);
    } else {
      outArray.push(array[j]);
      array.splice(j, 1);
      i--;
    }
  }
  if (array.length > 0) {
    outArray.push(...array);
  }

  return outArray;
};
