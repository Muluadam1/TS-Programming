/*Implement a TypeScript class representing a queue data structure with methods 
for enqueueing, dequeueing, and checking if the queue is empty.*/
class Queue<T> {
    private elements: T[];
  
    constructor() {
      this.elements = [];
    }
  
    enqueue(item: T): void {
      this.elements.push(item);
    }
  
    dequeue(): T | undefined {
      return this.elements.shift();
    }
  
    isEmpty(): boolean {
      return this.elements.length === 0;
    }
  }
  
  // Example:
  const queue = new Queue<number>();
  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  
  console.log(queue.isEmpty());
  
  console.log(queue.dequeue()); 
  console.log(queue.dequeue()); 
  console.log(queue.dequeue()); 
  
  console.log(queue.isEmpty()); 