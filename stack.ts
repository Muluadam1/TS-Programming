/*Implement a TypeScript class representing a stack data structure with methods for pushing, popping, 
and peeking elements.*/
class Stack<T> {
    private stack: T[];
  
    constructor() {
      this.stack = [];
    }
  
    push(element: T): void {
      this.stack.push(element);
    }
  
    pop(): T | undefined {
      return this.stack.pop();
    }
  
    peek(): T | undefined {
      return this.stack[this.stack.length - 1];
    }
  
    isEmpty(): boolean {
      return this.stack.length === 0;
    }
  }
  
  const stack = new Stack<number>();
  stack.push(101);
  stack.push(201);
  stack.push(301);
  console.log(stack.peek());   // Output: 30
  console.log(stack.pop());    // Output: 30
  console.log(stack.pop());    // Output: 20
  console.log(stack.isEmpty()); // Output: false
  console.log(stack.pop());    // Output: 10
  console.log(stack.isEmpty()); // Output: true