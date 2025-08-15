// LinkedList : A simple implementation of a singly linked list in JavaScript

// Node class
class Node {
    constructor(data) {
        this.data = data;  // Value stored in the node
        this.next = null; // Pointer to next node
    }
}

// LinkedList class
class LinkedList {
    constructor() {
        this.head = null; // Start of the list
        this.size = 0;    // Size of the list
    }

    // Add a new node at the end of the list
    add(data) {
        // Create a new node with the given data
        const newNode = new Node(data);
        // If list is empty, set head to new node
        if (!this.head) {
            this.head = newNode; 
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next; // Traverse to the end of the list
            }
            current.next = newNode; // Link the new node at the end
        }
        this.size++; // Increment size of the list
    }

    // Add a new node at start of the list
    addAtStart(data) {
         // Create a new node with the given data
        const newNode = new Node(data);
        newNode.next = this.head;  // Point new node to current head
        this.head = newNode;       // Update head to new node
        this.size++;               // Increment size of the list
    }

    // Delete a node by value
    delete(data) {
        if (!this.head) return; // If list is empty, nothing to delete

        // If head node is the one to be deleted
        if (this.head.data === data) {
            this.head = this.head.next; // Move head to next node
            this.size--; // Decrement size
            return;
        }

        let current = this.head;
        while (current.next && current.next.data !== data) {
            current = current.next; // Traverse the list
        }

        if (current.next) {
            current.next = current.next.next; // Bypass the node to delete it
            this.size--; // Decrement size
        }
    }

    // Print the list
    print() {
        let current = this.head;
        const elements = [];
        while (current) {
            elements.push(current.data); // Collect data from each node
            current = current.next; // Move to next node
        }
        console.log(elements.join(' -> ')); // Print the list in a readable format
    }
}


// Usage example
const list = new LinkedList();

list.add(10); // head -> 10
list.add(20);
list.add(30);
list.add(40);
list.add(90);
list.add(50);

list.print(); // Output: 10 -> 20 -> 30 -> 40 -> 90 -> 50

list.addAtStart(5); // head -> 5 -> 10 -> 20 -> 30 -> 40 -> 90 -> 50
list.print(); // Output: 5 -> 10 -> 20 -> 30 -> 40 -> 90 -> 50

list.delete(30); // head -> 5 -> 10 -> 20 -> 40 -> 90 -> 50
list.print(); // Output: 5 -> 10 -> 20 -> 40 ->