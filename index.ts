import { binary_search } from "@/version-1";

const t1 = performance.now();
console.log(binary_search([2, 34, 252, 2222, 3333333333333], 3333333333333));
const t2 = performance.now();

console.log(`takes ${(t2 - t1) / 1000} seconds`);
