import { LinkedListNode } from "@/version-1";

interface LinkedListInterface<T> {
  print(): void;
  insertAt(item: T, index: number): void;
  removeAt(index: number): T | undefined;
  remove(): T | undefined;
  append(item: T): void;
  prepend(item: T): void;
  get(index: number): T | undefined;
  reverse(): void;
}

export class LinkedList<T> implements LinkedListInterface<T> {
  public length: number = 0;

  constructor(public head: LinkedListNode<T>) {
    let currentNode = this.head;
    while (currentNode) {
      this.length++;
      currentNode = currentNode.next;
    }
  }

  public print(): void {
    let list = "[ ";
    let currentNode = this.head;
    while (currentNode) {
      list = list + currentNode.value + (currentNode.next ? ", " : "");
      currentNode = currentNode.next;
    }
    console.log(list + " ]");
  }

  public insertAt(item: T, index: number): void {
    if (index < 0) return undefined;

    if (index === 0) {
      this.prepend(item);
      return;
    }

    let currentNode = this.head;
    let prevNode = this.head;

    while (currentNode && index) {
      index--;
      prevNode = currentNode;
      currentNode = currentNode.next;
    }

    if (index) return undefined;

    prevNode.next = new LinkedListNode(item, currentNode);
    this.length++;
  }

  public removeAt(index: number): T | undefined {
    if (index < 0) return undefined;
    if (index === 0) {
      this.remove();
      return;
    }

    let prevNode = this.head;
    let currentNode = this.head;

    while (currentNode.next && index) {
      prevNode = currentNode;
      currentNode = currentNode.next;
      index--;
    }

    if (index) return undefined;

    let { value } = currentNode;
    prevNode.next = currentNode.next;
    currentNode = null;

    this.length--;

    return value;
  }

  public remove(): T | undefined {
    if (!this.head) return undefined;

    let { value } = this.head;
    this.head = this.head.next;

    this.length--;
    return value;
  }

  public append(item: T): void {
    this.head.next = new LinkedListNode(item, this.head.next);
    this.length++;

    return;
  }

  public prepend(item: T): void {
    this.head = new LinkedListNode(item, this.head);
    this.length++;

    return;
  }

  public get(index: number): T | undefined {
    let currentNode = this.head;
    if (index < 0) return undefined;

    while (currentNode.next && index) {
      currentNode = currentNode.next;
      index--;
    }

    if (index) return undefined;

    return currentNode.value;
  }

  // public reverse(): void {
  //   let currentNode = this.head;
  //   let newHead: LinkedListNode<T> | null = null;

  //   while (currentNode) {
  //     newHead = new LinkedListNode(currentNode.value, newHead);
  //     currentNode = currentNode.next;
  //   }

  //   this.head = newHead;
  // }

  //! without making: new LinkedListNode(currentNode.value, previousNode). less memory. aka way better
  public reverse(): void {
    let prevNode = null;
    let nextNode = null;
    let currentNode = this.head;

    console.log(this.length);

    while (currentNode) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }

    this.head = prevNode;
  }
}
