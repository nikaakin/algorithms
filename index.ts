import { bubble_sort } from "@/version-1";

const t1 = performance.now();
console.log(bubble_sort([9, 3, 7, 4, 69, 420, 42, 1]));
const t2 = performance.now();

console.log(`takes ${(t2 - t1) / 1000} seconds`);
