import { radixSort } from "./radix-sort/radixSort";

const t1 = performance.now();
console.log(radixSort([0, 12, 100, 2000, 2]));
const t2 = performance.now();

console.log(`takes ${(t2 - t1) / 1000} seconds`);
