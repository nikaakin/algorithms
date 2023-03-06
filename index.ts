import { selectionIterative } from "./selection-sort/selectionIterative";

const t1 = performance.now();
console.log(selectionIterative([96, 100, 101, 103, 102, 104]));
const t2 = performance.now();

console.log(`takes ${(t2 - t1) / 1000} seconds`);
