import { LinkedList, LinkedListNode, Queue } from "@/version-1";

const list = new Queue(new LinkedListNode(1));

list.print();

const t1 = performance.now();

console.log(list.dequeue());

const t2 = performance.now();
list.print();

console.log(list.enqueue(1111));

list.print();

console.log(list.enqueue(1111));
list.print();

console.log(list.dequeue());
list.print();

console.log(`takes ${(t2 - t1) / 1000} seconds`);
