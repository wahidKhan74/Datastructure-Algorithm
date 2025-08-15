// Queue: Implementation of a queue data structure
class Queue {
  
  // Initialize the queue
  constructor() {
    this.items = [];
  }

  // Enqueue an item to the back of the queue
  enqueue(item) {
    this.items.push(item);
  }

  // Dequeue an item from the front of the queue
  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    return this.items.shift();
  }

  // Peek at the front item of the queue without removing it
  peek() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    return this.items[0];
  }

  // Check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get the size of the queue
  size() {
    return this.items.length;
  }

  // Clear the queue
  clear() {
    this.items = [];
  }
}

// Example usage of the Queue class
let queue = new Queue();

// add items to the queue
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);

console.log("front item : ", queue.peek()); // Output: 10
queue.dequeue(); // remove the front item
console.log("queue size : ", queue.size()); // Output: 4
console.log("front item : ", queue.peek()); // Output: 20

