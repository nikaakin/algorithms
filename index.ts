import { maxSubarraySum } from "./5-chapter/maxSubarraySum";

const t1 = performance.now();
console.log(maxSubarraySum([-1, 0, 1, 5, 1, 7, 2], 7));
const t2 = performance.now();

console.log(`takes ${(t2 - t1) / 1000} seconds`);
