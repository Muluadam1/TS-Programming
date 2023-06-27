class LinkedListNode<T> {
    value: T;
    next: LinkedListNode<T> | null;
  
    constructor(value: T) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList<T> {
    head: LinkedListNode<T> | null;
  
    constructor() {
      this.head = null;
    }
  
    addNode(value: T): void {
      const newNode = new LinkedListNode<T>(value);
  
      if (!this.head) {
        this.head = newNode;
      } else {
        let current: LinkedListNode<T> | null = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    removeNode(value: T): void {
      if (!this.head) {
        return;
      }
  
      if (this.head.value === value) {
        this.head = this.head.next;
        return;
      }
  
      let current: LinkedListNode<T> | null = this.head;
      let previous: LinkedListNode<T> | null = null;
  
      while (current && current.value !== value) {
        previous = current;
        current = current.next;
      }
  
      if (!current) {
        return;
      }
  
      if (previous) {
        previous.next = current.next;
      }
    }
  
    printList(): void {
      if (!this.head) {
        console.log("Linked list is empty.");
        return;
      }
  
      let current: LinkedListNode<T> | null = this.head;
      let output = "";
  
      while (current) {
        output += String(current.value) + " -> ";
        current = current.next;
      }
  
      output += "null";
      console.log(output);
    }
  }
  
  const linkedList = new LinkedList<number>();
  linkedList.addNode(10);
  linkedList.addNode(20);
  linkedList.addNode(30);
  linkedList.addNode(40);
  linkedList.printList(); 
  linkedList.removeNode(20);
  linkedList.removeNode(30);
  linkedList.printList();  