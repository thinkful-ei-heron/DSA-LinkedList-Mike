class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  insertFirst(data) {
    //O(1)
    this.head = new _Node(data, null, this.head);
    if (this.tail === null) {
      this.tail = this.head;
    }
  }
  insertLast(data) {
    //O(n)
    let temp = this.tail;
    this.tail = new _Node(data, temp, null);
    if (temp) temp.next = this.tail;
    if (this.head === null) {
      this.head = this.tail;
    }
  }
  insertBefore(data, target) {
    let cur = this.head;
    let prev = null;
    while (cur !== null && cur.value !== target) {
      prev = cur;
      cur = cur.next;
    }
    if (prev === null) {
      //head of list
      this.insertFirst(data);
      return;
    }
    if (cur === null) {
      throw new Error(`Insert before ${target} failed: no matching node`);
    }
    prev.next = new _Node(data, prev, cur);
    cur.prev = prev.next;
  }
  insertAfter(data, target) {
    let cur = this.head;
    while (cur !== null && cur.value !== target) {
      cur = cur.next;
    }
    if (cur === null) {
      throw new Error(`Insert after ${target} failed: no matching node`);
    }
    let temp = cur.next;
    cur.next = new _Node(data, cur, cur.next);
    if (temp === null) {
      this.tail = cur.next;
    } else {
      temp.prev = cur.next;
    }
  }
  insertAt(data, index) {
    if (index < 0) {
      throw new Error('Index out of bounds');
    }
    if (index === 0) {
      this.insertFirst(data);
      return;
    }
    index--; //otherwise we insert *after* index;
    let cur = this.head;
    if (cur === null) {
      //insertAt(foo,0) seems kosher on empty list, but any other index is not ok
      throw new Error('Index out of bounds');
    }
    for (let i = 0; i < index; i++) {
      cur = cur.next;
      if (cur === null) {
        throw new Error('Index out of bounds');
      }
    }
    let temp = cur.next;
    cur.next = new _Node(data, cur, cur.next);
    if (temp === null) {
      this.tail = cur.next;
    } else {
      temp.prev = cur.next;
    }
  }

  remove(data) {
    ///O(n)
    if (!this.head) {
      return;
    }
    if (this.head.value === data) {
      this.head = this.head.next;
      this.head.prev = null;
      return;
    }
    let cur = this.head;
    let prev = this.head;
    while (cur !== null && cur.value !== data) {
      prev = cur;
      cur = cur.next;
    }
    if (cur === null) {
      return;
    }
    prev.next = cur.next;
    if (cur.next === null) {
      this.tail = prev;
    } else {
      cur.next.prev = prev;
    }
  }
  find(data) {
    //O(n)
    let cur = this.head;
    if (cur === null) return null;
    while (cur.value !== data) {
      if (cur.next === null) return null;
      cur = cur.next;
    }
    return cur;
  }

  printList() {
    //prints each node in detail for debug
    let cur = this.head;
    while (cur !== null) {
      console.log(cur);
      cur = cur.next;
    }
  }
}

class _Node {
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

module.exports = DoublyLinkedList;
