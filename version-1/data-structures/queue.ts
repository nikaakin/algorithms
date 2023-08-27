import { LinkedListNode } from "@/version-1";

export class Queue<T> {
  public length = 0;
  private tail: LinkedListNode<T>;
  private head: LinkedListNode<T>;

  constructor(head: LinkedListNode<T>) {
    this.head = head;
    let prevNode = head;

    while (head) {
      prevNode = head;
      head = head.next;
      this.length++;
    }

    this.tail = prevNode;
  }

  public enqueue(value: T): void {
    if (!this.tail) {
      this.head = this.tail = new LinkedListNode(value);
    } else {
      this.tail.next = new LinkedListNode(value);
      this.tail = this.tail.next;
    }
    this.length++;
  }

  public dequeue(): T | undefined {
    if (this.head && this.head.next) {
      const currentHead = this.head;
      let { value } = currentHead;

      this.head = this.head.next;
      currentHead.next = null;

      this.length--;
      return value;
    } else {
      this.tail = this.head = null;
      this.length = 0;

      return undefined;
    }
  }

  public peek(): T | undefined {
    return this.head?.value;
  }

  public print(): void {
    let list = "[ ";
    let currentNode = this.head;
    while (currentNode) {
      list = list + currentNode.value + (currentNode.next ? ", " : "");
      currentNode = currentNode.next;
    }
    console.log(list + " ]");
    console.log("length = ", this.length);
  }
}
