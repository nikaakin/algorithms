import { LinkedList, LinkedListNode } from "@/version-1";

const list = new LinkedList(
  new LinkedListNode(
    1,
    new LinkedListNode(
      2,
      new LinkedListNode(
        3,
        new LinkedListNode(
          4,
          new LinkedListNode(
            2,
            new LinkedListNode(
              6,
              new LinkedListNode(
                7,
                new LinkedListNode(3, new LinkedListNode(100))
              )
            )
          )
        )
      )
    )
  )
);

list.print();

const t1 = performance.now();

console.log(list.reverse());

const t2 = performance.now();
list.print();

console.log(`takes ${(t2 - t1) / 1000} seconds`);
