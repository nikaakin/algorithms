import { LinkedList, LinkedListNode } from "@/version-1";

const t1 = performance.now();
console.log(
  new LinkedList(
    new LinkedListNode(2, new LinkedListNode(3, new LinkedListNode(100, null)))
  ).print()
);
const t2 = performance.now();

console.log(`takes ${(t2 - t1) / 1000} seconds`);
