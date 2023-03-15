// ONLY FOR NON-NEGATIVE NUMBERS

export const radixSort = (arr: number[]) => {
  const max = Math.max(...arr);
  const { length } = max.toString();

  for (let i = 0; i <= length; i++) {
    let buckets = {};
    for (let j = 0; j < arr.length; j++) {
      const digit = getNthDigit(arr[j], i);
      buckets[digit]?.push(arr[j]) || (buckets[digit] = [arr[j]]);
    }
    arr = [];
    for (let key in buckets) {
      arr = [...arr, ...buckets[key]];
    }
  }

  return arr;
};

const getNthDigit = (num: number, n: number) => {
  return Math.floor(num / 10 ** n) % 10;
};

// Course solution is kind of same
