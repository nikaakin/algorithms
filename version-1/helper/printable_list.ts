import { LinkedListNode } from "@/version-1";

export class PrintableList<T> {
  protected head: LinkedListNode<T>;

  public printNext(): void {
    let list = "[ ";
    let currentNode = this.head;
    while (currentNode) {
      list = list + currentNode.value + (currentNode.next ? ", " : "");
      currentNode = currentNode.next;
    }
    console.log(list + " ]");
  }

  public printPrev(): void {
    let list = "[ ";
    let currentNode = this.head;
    while (currentNode) {
      list = list + currentNode.value + (currentNode.prev ? ", " : "");
      currentNode = currentNode.prev;
    }
    console.log(list + " ]");
  }
}
