interface LinkedListInterface<T> {
  print(): void;
  insertAt(item: T, index: number): void;
  removeAt(item: T, index: number): T | undefined;
  remove(item: T): T | undefined;
  append(item: T): void;
  prepend(item: T): void;
  get(index: number): T | undefined;
}

export class LinkedListNode {
  constructor(public value: number, public next: LinkedListNode | null) {}
}

export class LinkedList<T> implements LinkedListInterface<T> {
  public length: number = 0;

  constructor(public head: LinkedListNode) {
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
    throw new Error("Method not implemented.");
  }

  public removeAt(item: T, index: number): T | undefined {
    throw new Error("Method not implemented.");
  }

  public remove(item: T): T | undefined {
    throw new Error("Method not implemented.");
  }

  public append(item: T): void {
    throw new Error("Method not implemented.");
  }

  public prepend(item: T): void {
    throw new Error("Method not implemented.");
  }

  get(index: number): T | undefined {
    throw new Error("Method not implemented.");
  }
}
