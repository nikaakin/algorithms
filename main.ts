import { LinkedList, LinkedListNode, Queue, Stack } from "@/version-1";
import { quickSort } from "@/version-2";

const t1 = performance.now();
console.log(quickSort([1, 3, 4, 2, 21, 1, 3, 3]));

const t2 = performance.now();
console.log(`takes ${(t2 - t1) / 1000} seconds`);
