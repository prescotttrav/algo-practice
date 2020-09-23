import { LinkedListNode } from '../Nodes';

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  add(val) {
    const node = new LinkedListNode(val);
    if (!this.last) this.head = node;
    else this.last.next = node;
    this.last = node;
    this.size++;
  }
  remove() {
    if (!this.head) return null;
    const node = this.head;
    this.head = this.head.next;
    if (!this.head) this.last = null;
    this.size--;
    return node.val;
  }
  isEmpty() {
    return this.size === 0;
  }
}

export default Queue;
