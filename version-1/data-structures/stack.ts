import { LinkedListNode } from "@/version-1";
import { PrintableList } from "../helper";

export class Stack<T> extends PrintableList<T> {
  protected head: LinkedListNode<T> = null;
  public lenght = 0;
  constructor(tail: LinkedListNode<T>) {
    super();
    if (!tail) return;
    while (tail.next) {
      this.lenght++;
      tail = tail.next;
    }
    this.lenght++;
    this.head = tail;
  }

  public push(value: T): void {
    const node = new LinkedListNode(value, null, this.head);
    this.head = node;
    this.lenght++;
  }

  public pop(): T | undefined {
    if (!this.head) return undefined;
    this.lenght--;
    let oldHead = this.head;
    const { value } = oldHead;

    this.head = this.head.prev;
    oldHead = null;

    return value;
  }

  public peek(): T | undefined {
    return this.head?.value;
  }
}
