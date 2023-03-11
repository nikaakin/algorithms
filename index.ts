import { mergeSort } from "./merge-sort/mergeSort";
import { mergeSortCourseVersion } from "./merge-sort/mergeSortCourseVersion";
import { quickSort } from "./quick-sort/quickSort";

const t1 = performance.now();
console.log(quickSort([1000, 0, -12, 100, 10, -1, 2]));
const t2 = performance.now();

console.log(`takes ${(t2 - t1) / 1000} seconds`);
