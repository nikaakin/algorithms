import { insertionIterative } from "./insertion-sort/insertionIterative";
import { insertionRecursive } from "./insertion-sort/insertionRecursive";

const t1 = performance.now();
console.log(insertionIterative([120, 80, 100, 2, 0, -104]));
const t2 = performance.now();

console.log(`takes ${(t2 - t1) / 1000} seconds`);
