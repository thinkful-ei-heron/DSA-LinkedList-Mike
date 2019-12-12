class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(data) {
    //O(1)
    this.head = new _Node(data, this.head);
  }
  insertLast(data) {
    //O(n)
    let cur = this.head;
    if (cur === null) {
      this.insertFirst(data);
    } else {
      while (cur.next !== null) {
        cur = cur.next;
      }
      cur.next = new _Node(data, null);
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
    prev.next = new _Node(data, cur);
  }
  insertAfter(data, target) {
    let cur = this.head;
    while (cur !== null && cur.value !== target) {
      cur = cur.next;
    }
    if (cur === null) {
      throw new Error(`Insert after ${target} failed: no matching node`);
    }
    cur.next = new _Node(data, cur.next);
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
    cur.next = new _Node(data, cur.next);
  }

  remove(data) {
    ///O(n)
    if (!this.head) {
      return;
    }
    if (this.head.value === data) {
      this.head = this.head.next;
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
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

module.exports = LinkedList;
