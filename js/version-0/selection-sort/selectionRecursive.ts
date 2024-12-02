export const selectionRecursive = (arr: (number | string)[]) => {
  //   could have just done minIndex would be sufficient here
  let min = [arr[0], 0];

  if (arr.length === 1) {
    return arr;
  }

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min[0]) {
      min[0] = arr[i];
      min[1] = i;
    }
  }
  const temp = arr[0];
  arr[0] = min[0];
  arr[min[1]] = temp;

  return [min[0], ...selectionRecursive(arr.slice(1))];
};
