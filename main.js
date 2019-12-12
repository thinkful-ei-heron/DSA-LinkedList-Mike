const LinkedList = require('./linkedList');
const DoublyLinkedList = require('./doublyLinkedList');

function main() {
  let SLL = new LinkedList();
  SLL.insertLast('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');
  SLL.remove('squirrel');
  SLL.insertBefore('Athena', 'Boomer');
  SLL.insertAfter('Hotdog', 'Helo');

  SLL.remove('Tauhida');
  // SLL.insertAt('Kat', 2);
  //SLL.printList();
  // display(SLL);
  // console.log('-----');
  // reverseList(SLL);
  // display(SLL);
  // let nl = new LinkedList();
  // console.log(findPrevious(SLL, 'Kat'));
  // console.log(findPrevious(SLL, 'Apollo'));
  // console.log(findPrevious(SLL, 'foo'));
  // console.log(findLast(nl));
  // reverseList(nl);

  // console.log(findMid(SLL));

  // let CycleList = new LinkedList();
  // CycleList.insertLast('one');
  // CycleList.insertLast('two');
  // CycleList.insertLast('three');
  // let cycleLast = findLast(CycleList);
  // cycleLast.next = CycleList.head;
  // console.log(cycleCheck(SLL));
  // console.log(cycleCheck(CycleList));
  // reverseList(SLL);

  let DLL = new DoublyLinkedList();
  DLL.insertLast('Aquaria');
  DLL.insertLast('Caprica');
  DLL.insertLast('Gemenon');
  DLL.insertLast('Picon');
  DLL.insertLast('Sagittaron');
  DLL.insertLast('Tauron');
  DLL.remove('Picon');
  // DLL.insertAt('foo', 5);
  // DLL.printList();
  display(DLL);
  // console.log(DLL.head);
  // console.log(DLL.tail);
  reverseDoublyLinkedList(DLL);
  display(DLL);
  DLL.printList();
}

function display(list) {
  let cur = list.head;
  while (cur !== null) {
    console.log(cur.value);
    cur = cur.next;
  }
}
function size(list) {
  let cur = list.head;
  let i = 0;
  while (cur !== null) {
    i++;
    cur = cur.next;
  }
  return i;
}

function isEmpty(list) {
  return list.head === null;
}

function findPrevious(list, target) {
  let cur = list.head;
  let prev = null;
  while (cur !== null && cur.value !== target) {
    prev = cur;
    cur = cur.next;
  }
  if (cur === null) {
    throw new Error(`no node matching ${target}`);
  }
  return prev;
}

function findLast(list) {
  let cur = list.head;
  if (cur === null) return null;
  while (cur.next !== null) {
    cur = cur.next;
  }
  return cur;
}

function reverseList(list) {
  //iterative
  let cur = list.head;
  let prev = null;
  while (cur !== null) {
    let next = cur.next; //hang on to next node
    cur.next = prev; //change cur to point to previous node
    prev = cur;
    cur = next;
  }
  //cur stepped past the end so prev holds the last pointer
  list.head = prev;
}

function thirdFromEnd(list) {
  let cur = list.head;
  if (cur === null) return null;
  let prev = null;
  let prev2 = null;
  while (cur.next !== null) {
    prev2 = prev;
    prev = cur;
    cur = cur.next;
  }
  //cur.next is null so cur is last, prev is second last, prev2 is third last
  return prev2;
}

function findMid(list) {
  let fast = list.head;
  let slow = list.head;
  if (fast === null) return null;
  let i = 0;
  while (fast.next !== null) {
    fast = fast.next;
    if (i) {
      slow = slow.next;
    }
    i++;
    i = i % 2;
  }
  return slow;
}

function cycleCheck(list) {
  let visited = new Set();
  let cur = list.head;
  if (cur === null) return null;
  while (cur.next !== null) {
    visited.add(cur);
    cur = cur.next;
    if (visited.has(cur)) return true;
  }
  return false;
}

function reverseDoublyLinkedList(DLL) {
  //this is more straightforward than reverseList()
  //first, get the first element of the list
  //switch the list's head and tail
  //step through the list and swap each element's prev and next
  let cur = DLL.head;
  DLL.head = DLL.tail;
  DLL.tail = cur;
  while (cur !== null) {
    let next = cur.next;
    cur.next = cur.prev;
    cur.prev = next;
    cur = next;
  }
}

main();
