class Heap {
  constructor() {
    this.items = [];
    this.size = 0;
  }
  insert(val) {
    let i = this.size;
    this.items[i] = val;
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      if (this.items[parent] > val) {
        this.swap(parent, i);
        i = parent;
      } else {
        break;
      }
    }
    this.size++;
  }
  remove() {
    if (this.isEmpty()) return null;
    let i = 0;
    const val = this.items[i];
    this.replaceLast();
    this.size--;
    while (i < this.size) {
      const l = i * 2 + 1;
      const min = Math.min(this.items[l], this.items[l + 1], this.items[i]);
      if (this.items[l] === min) {
        this.swap(i, l);
        i = l;
      } else if (this.items[l + 1] === min) {
        this.swap(i, l + 1);
        i = l + 1;
      } else {
        break;
      }
    }
    return val;
  }
  getMin() {
    if (this.isEmpty()) return null;
    return this.items[0];
  }
  swap(a, b) {
    [this.items[a], this.items[b]] = [this.items[b], this.items[a]];
  }
  replaceLast() {
    this.items[0] = this.items[this.size - 1];
    this.items[this.size - 1] = undefined;
  }
  isEmpty() {
    return this.size === 0;
  }
}

export default Heap;
