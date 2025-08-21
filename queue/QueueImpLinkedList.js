// Implementation of a queue data structure using a linked list
// Operations: enqueue, dequeue, peek, isEmpty, size, clear

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class QueueImpLinkedList {
  
  // Initialize the queue
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }

  // Enqueue an item to the back of the queue
  enqueue(item) {
    const newNode = new Node(item); // Create a new node
    if (this.isEmpty()) { // If the queue is empty
      this.front = this.rear = newNode;
    } else {
      this.rear.next = newNode; // Link the new node at the end
      this.rear = newNode; // Update the rear pointer
    }
    this.length++;
  }

  // Dequeue an item from the front of the queue
  dequeue() {
    if (this.isEmpty()) { // If the queue is empty
      throw new Error("Queue is empty");
    }
    const removedNode = this.front; // Get the front node
    this.front = this.front.next; // Move the front pointer to the next node
    if (this.front === null) {
      this.rear = null; // Queue is now empty
    }
    this.length--;
    return removedNode.data;
  }

  // Peek at the front item of the queue without removing it
  peek() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    return this.front.data;
  }

  // Check if the queue is empty
  isEmpty() {
    return this.length === 0;
  }

  // Get the size of the queue
  size() {
    return this.length;
  }

  // Clear the queue
  clear() {
    this.front = this.rear = null;
    this.length = 0;
  }
}

// Example usage of the QueueImpLinkedList
let queueLinkedList = new QueueImpLinkedList();

// add items to the queue
queueLinkedList.enqueue(10);
queueLinkedList.enqueue(20);
queueLinkedList.enqueue(30);
queueLinkedList.enqueue(40);
queueLinkedList.enqueue(50);

console.log("front item : ", queueLinkedList.peek()); // Output: 10

queueLinkedList.dequeue(); // remove the front item
console.log("queue size : ", queueLinkedList.size()); // Output: 4
console.log("front item : ", queueLinkedList.peek()); // Output: 20

