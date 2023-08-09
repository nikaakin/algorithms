import { SinglyLinkedList } from "./version-0/linked-list/LinkedList";

const t1 = performance.now();
console.log(
  new SinglyLinkedList().unshift(10).push(2).push(3).push(5).reverse()
);
const t2 = performance.now();

console.log(`takes ${(t2 - t1) / 1000} seconds`);
