// Node exists on typscript so NodeLL (LL for linked list)
type NodeValue = number | string | boolean;

class NodeLL {
  public value: NodeValue;
  public next: NodeLL | null;
  constructor(value: NodeValue) {
    this.value = value;
    this.next = null;
  }
}

export class SinglyLinkedList {
  private head: NodeLL | null;
  private tail: NodeLL | null;
  public length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value: NodeValue) {
    const newNode = new NodeLL(value);
    if (this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.tail = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (newTail.next) {
      current = newTail;
      newTail = newTail.next;
    }
    current.next = null;
    this.tail = current;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    const oldHead = this.head;
    this.head = oldHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return oldHead;
  }

  unshift(value: NodeValue) {
    const newHead = new NodeLL(value);
    if (!this.head) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }
    this.length++;
    return this;
  }

  get(index: number) {
    if (this.length <= index || index < 0) return undefined;
    let currentNode = this.head;
    let counter = 0;
    while (counter !== index) {
      currentNode = currentNode?.next as NodeLL;
      counter++;
    }
    return currentNode;
  }

  set(index: number, value: NodeValue) {
    const node = this.get(index);
    if (!node) return false;
    node.value = value;
    return true;
  }

  insert(index: number, value: NodeValue) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) {
      return Boolean(this.unshift(value));
    }
    if (index === this.length) {
      return Boolean(this.push(value));
    }
    const previousNode = this.get(index - 1);
    const currentNode = new NodeLL(value);
    const nextNode = (previousNode as NodeLL).next;
    (previousNode as NodeLL).next = currentNode;
    currentNode.next = nextNode;
    this.length++;
    return true;
  }

  remove(index: number) {
    if (index >= this.length || index < 0) return false;
    if (index === 0) return !!this.shift();
    if (index === this.length - 1) return !!this.pop();
    const previousNode = this.get(index - 1);
    const nextNode = (previousNode as NodeLL).next?.next || null;
    (previousNode as NodeLL).next = nextNode;
    this.length--;
    return true;
  }

  // #1

  // reverse() {
  //   if (this.length < 1) return this;
  //   let curHead = this.head as NodeLL;
  //   this.tail = curHead;
  //   while (curHead.next) {
  //     let tempValue = curHead.next.value;
  //     curHead.next = curHead.next.next;
  //     this.unshift(tempValue);
  //     this.length--;
  //   }
  //   this.tail.next = null;
  //   return this;
  // }

  // #2 solution

  reverse() {
    let prev: NodeLL | null = null;
    let next: NodeLL | null = null;
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    return this;
  }
}
