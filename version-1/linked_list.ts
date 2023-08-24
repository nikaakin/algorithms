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

interface LinkedListNodeInterface<T> {
  value: T;
  next?: LinkedListNode<T>;
}

export class LinkedListNode<T> implements LinkedListNodeInterface<T> {
  constructor(public value: T, public next: LinkedListNode<T> = null) {}
}

export class LinkedList<T> implements LinkedListInterface<T> {
  public length: number = 0;

  constructor(public head: LinkedListNode<T>) {
    this.length++;
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
    this.length++;
    if (!this.head) {
      this.head = new LinkedListNode(item);
      return;
    }

    let currentNode = this.head;

    while (currentNode.next && index) {
      index--;
      currentNode = currentNode.next;
    }

    currentNode.next = new LinkedListNode(item, currentNode.next);
  }

  public removeAt(index: number): T | undefined {
    if (index === 0) {
      this.remove();
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

    return value;
  }

  public remove(): T | undefined {
    if (!this.head) return undefined;

    let { value } = this.head;
    this.head = this.head.next;
    return value;
  }

  public append(item: T): void {
    throw new Error("Method not implemented.");
  }

  public prepend(item: T): void {
    throw new Error("Method not implemented.");
  }

  public get(index: number): T | undefined {
    throw new Error("Method not implemented.");
  }

  public reverse(): void {
    throw new Error("Method not implemented.");
  }
}
