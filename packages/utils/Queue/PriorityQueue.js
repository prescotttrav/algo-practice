import { swap } from '../index';

class PriorityQueue {
  constructor() {
    this.items = [];
    this.size = 0;
  }
  getMin() {
    if (this.isEmpty()) {
      throw new Error('Empty priority queue.');
    }
    return this.items[0];
  }
  heapify(index) {
    let smallest = index;
    const l = 2 * index + 1;
    const r = l + 1;
    if (l < this.size && this.items[l] < this.items[index]) {
      smallest = l; 
    }
    if (r < this.size && this.items[r] < this.items[smallest]) {
      smallest = r;
    }
    if (smallest !== index) {
      swap(this.items, smallest, index);
      this.heapify(smallest);
    }
  }
  parent(index) {
    if (index <= 0) {
      throw new Error('No parent exists for current index.');
    }
    return Math.floor((index - 1) / 2);
  }
  removeMin() {
    const min = this.getMin();
    this.size--;
    this.items[0] = this.items[this.size];
    this.heapify(0);
    return min;
  }
  decreaseKey(key, val) {
    if (val > this.items[key]) {
      throw new Error('New value expected to be smaller than existing key value.');
    }
    let i = key;
    this.items[i] = val;
    while (i > 0 && this.items[this.parent(i)] > this.items[i]) {
      swap(this.items, i, this.parent(i));
      i = this.parent(i);
    }
  }
  insert(val) {
    this.items[this.size++] = Infinity;
    this.decreaseKey(this.size - 1, val);
  }
  isEmpty() {
    return this.size === 0;
  }
  print() {
    return this.items.slice(0, this.size);
  }
}

export default PriorityQueue;

