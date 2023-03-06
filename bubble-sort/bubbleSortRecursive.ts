// recursive

export const bubbleSort = (arr: (number | string)[]) => {
  let output: (number | string)[] = [];

  if (arr.length === 1) {
    return arr;
  }

  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      const temp = arr[i];
      arr[i] = arr[i - 1];
      arr[i - 1] = temp;
    }
    if (i === arr.length - 1) {
      const last = arr.pop() as number | string;
      output = [...bubbleSort(arr), last];
    }
  }

  return output;
};

// can be optimised by adding "noSwap" like variable as an argument for function
// see iterative example of "noSwap" in ./bubbleSortIterative.ts file
