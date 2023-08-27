import { LinkedListNode } from "@/version-1";

export class Queue<T> {
  public length = 0;
  constructor(public head: LinkedListNode<T>) {
    this.length++;
  }
}
