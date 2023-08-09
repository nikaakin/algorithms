// takes sorted array

export const countUniqueNumbers = (arr: number[]) => {
  let counter = 0,
    counted = arr[0];

  if (arr.length === 0) return counter;

  counter++;
  arr.forEach((num: number) => {
    if (num === counted) return;

    counted = num;
    counter++;
  });

  return counter;
};
