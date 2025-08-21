// Implementation of a stack data structure using a linked list
// This stack supports basic operations like push, pop, peek, isEmpty, size, and clear.

// Node class for linked list
class Node {
    constructor(data) {
      this.data = data;
      this.next = null; // Pointer to the next node
    }
}

class StackImpLinkedList {

    // Initialize the stack
    constructor() {
        this.top = null; // Top of the stack
        this.sizeCount = 0; // Size of the stack
    }

    // Push an item onto the stack
    push(item) {
        const newNode = new Node(item); // Create a new node with the item
        newNode.next = this.top; // Link the new node to the previous top
        this.top = newNode; // Update the top to the new node
        this.sizeCount++; // Increment size count
    }

    // Pop an item off the stack
    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        const poppedItem = this.top.data; // Get the data from the top node
        this.top = this.top.next; // Update the top to the next node
        this.sizeCount--; // Decrement size count
        return poppedItem; // Return the popped item
    }

    // Peek at the top item of the stack without removing it
    peek() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.top.data; // Return the data from the top node
    }

    // Check if the stack is empty
    isEmpty() {
        return this.sizeCount === 0; // Check if size count is zero
    }

    // Get the size of the stack
    size() {
        return this.sizeCount; // Return the current size count
    }

    // Clear the stack
    clear() {
        this.top = null; // Reset the top to null
        this.sizeCount = 0; // Reset size count to zero
    }
  
    // print the stack (for debugging purposes)
    print() {
        let current = this.top;
        const items = [];
        while (current) {
            items.push(current.data);
            current = current.next;
        }
        console.log("Stack items:", items.reverse().join(" -> "));
    }

  }

// Example usage of the StackImpLinkedList class
let stack = new StackImpLinkedList();

// add items to the stack
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);


console.log("top item : ", stack.peek()); // Output: 50

stack.print(); // Output: Stack items: 10 -> 20 -> 30 -> 40 -> 50

stack.pop(); // remove the top item
console.log("stack size : ", stack.size()); // Output: 4
console.log("top item : ", stack.peek()); // Output: 40