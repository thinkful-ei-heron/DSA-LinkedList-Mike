//js file for syntax highlighting
function WhatDoesThisProgramDo(lst) {
  let current = lst.head;
  while (current !== null) {
    //for every item in list
    let newNode = current;
    while (newNode.next !== null) {
      //for every item in list (starting with current)
      if (newNode.next.value === current.value) {
        //if the node after newNode has the same value as current
        newNode.next = newNode.next.next; //remove the node after newNode (and DO NOT ADVANCE newNode)
      } else {
        newNode = newNode.next;
      }
    }
    current = current.next;
  }
}

//function goes through a linked list and removes any duplicates
//time complexity is O(n^2)
