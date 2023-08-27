declare interface LinkedListNodeInterface<T> {
  value: T;
  next?: LinkedListNode<T>;
  prev?: LinkedListNode<T>;
}

export class LinkedListNode<T> implements LinkedListNodeInterface<T> {
  constructor(
    public value: T,
    public next: LinkedListNode<T> = null,
    public prev: LinkedListNode<T> = null
  ) {}
}
