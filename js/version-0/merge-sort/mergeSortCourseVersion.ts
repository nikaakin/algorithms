const merge = (arr1: number[], arr2: number[]) => {
  const mergedArray: number[] = [];
  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      mergedArray.push(arr2[j]);
      j++;
    } else {
      mergedArray.push(arr1[i]);
      i++;
    }
  }

  mergedArray.push(...[...arr1.slice(i), ...arr2.slice(j)]);
  return mergedArray;
};

export const mergeSortCourseVersion = (arr: number[]) => {
  const half = Math.floor((arr.length - 1) / 2) + 1;
  if (arr.length <= 1) return arr;

  let left = mergeSortCourseVersion(arr.slice(0, half));
  let right = mergeSortCourseVersion(arr.slice(half));

  return merge(left, right);
};
