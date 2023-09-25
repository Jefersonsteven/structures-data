export class MyArray {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  search(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }

  pop() {
    const deletedItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return deletedItem;
  }

  delete(index) {
    const deletedItem = this.data[index];
    this._shiftIndex(index);
    return deletedItem;
  }

  _shiftIndex(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }

  shift() {
    const deletedItem = this.data[0];
    this._shiftIndex(0);
    return deletedItem;
  }

  unshift(item) {
    const lastItem = this.data[0];
    for (let i = this.length; i > 1; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = item;
    this.data[1] = lastItem;
    this.length++;
    return this.data;
  }
}
