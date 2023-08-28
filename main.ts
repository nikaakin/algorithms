import { LinkedList, LinkedListNode, Queue, Stack } from "@/version-1";

const list = new Stack(null);

list.printPrev();

const t1 = performance.now();

console.log(list.pop());

const t2 = performance.now();
list.printPrev();

console.log(list.push(1111));

list.printPrev();

console.log(list.push(123));
list.printPrev();

console.log(list.pop());
list.printPrev();

console.log(`takes ${(t2 - t1) / 1000} seconds`);
