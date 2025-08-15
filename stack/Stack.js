// Stack : Implementation of a stack data structure
class Stack {
  
  // Initialize the stack
  constructor() {
    this.items = [];
  }

  // Push an item onto the stack
  push(item) {
    this.items.push(item);
  }

  // Pop an item off the stack
  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    return this.items.pop();
  }

  // Peek at the top item of the stack without removing it
  peek() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get the size of the stack
  size() {
    return this.items.length;
  }

  // Clear the stack
  clear() {
    this.items = [];
  }
}


// Example usage of the Stack class
let stack = new Stack();

// add items to the stack
stack.push(10);
stack.push(20);
stack.push(30);

console.log("top item : ", stack.peek()); // Output: 30

stack.pop(); // remove the top item
console.log("stack size : ", stack.size()); // Output: 2
console.log("top item : ", stack.peek()); // Output: 20