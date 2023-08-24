import { LinkedList, LinkedListNode } from "@/version-1";

const list = new LinkedList(
  new LinkedListNode(2, new LinkedListNode(3, new LinkedListNode(100)))
);

const t1 = performance.now();

list.removeAt(0);

const t2 = performance.now();
list.print();

console.log(`takes ${(t2 - t1) / 1000} seconds`);
