export const same = (arr1: number[], arr2: number[]) => {
  const frequencyCount = {};

  arr1.forEach((num: number) => {
    frequencyCount[num * num] = ++frequencyCount[num * num] || 1;
  });

  const isCorrect = arr2.every((num: number) => {
    if (!frequencyCount[num]) return false;
    frequencyCount[num] > 1
      ? (frequencyCount[num] = --frequencyCount[num])
      : delete frequencyCount[num];
    return true;
  });

  if (!isCorrect) return "not matching";

  //  to avoid  "Object.keys(frequencyCount);" this,
  //  you could compare "arr1.length !== arr2.length" in the beginning
  const keys = Object.keys(frequencyCount);
  if (keys.length > 0) return "does not match";

  return "match";
};

// test in index.ts by importing function and running like this:

// import { same } from "./5-chapter/same";

// const t1 = performance.now();
// console.log(same([2, 1, 1], [1, 1, 4]));
// const t2 = performance.now();

// console.log(`takes ${(t2 - t1) / 1000} seconds`);
