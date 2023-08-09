// export const insertionIterative = (arr: (number | string)[]) => {
//   for (let i = 1; i < arr.length; i++) {
//     let curIndex = i;
//     for (let j = i - 1; j >= 0; j--) {
//       if (arr[j] > arr[curIndex]) {
//         const temp = arr[j];
//         arr[j] = arr[curIndex];
//         arr[curIndex] = temp;
//         curIndex = j;
//       }
//     }
//   }

//   return arr;
// };

// better version

export const insertionIterative = (arr: (number | string)[]) => {
  for (let i = 1; i < arr.length; i++) {
    const currentVal = arr[i];
    let j: number;
    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }

  return arr;
};
