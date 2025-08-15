// LinkedList : A simple implementation of a doubly linked list in JavaScript
// It supports navigation forward and backward using next and prev pointers.

// Node class
class Node {
    constructor(data) {
        this.data = data;  // Value stored in the node
        this.next = null; // Pointer to next node
        this.prev = null; // Pointer to previous node
    }
}

// LinkedList class
class DoublyLinkedList {
    constructor() {
        this.head = null; // Start node
        this.tail = null; // Last node
        this.size = 0;    // Size of the list
    }

    // Add a new node at the end
    add(data) {
        const newNode = new Node(data); // Create a new node
        if (!this.head) {
            this.head = newNode; // If list is empty, set head to new node
            this.tail = newNode; // Also set tail to new node
        } else {
            this.tail.next = newNode; // Link the new node at the end
            newNode.prev = this.tail; // Set previous pointer of new node
            this.tail = newNode; // Update tail to new node
        } 
    
    }
       

    // Add a new node at start of the list
    addAtStart(data) {
        const newNode = new Node(data);
        if (!this.head) { // If list is empty
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
    }

     // Delete a node by value
    delete(data) {
        if (!this.head) return;

        let current = this.head;
        while (current && current.data !== data) {
            current = current.next;
        }

        if (!current) return; // Not found

        if (current.prev) {
            current.prev.next = current.next;
        } else {
            this.head = current.next; // Deleting head
        }

        if (current.next) {
            current.next.prev = current.prev;
        } else {
            this.tail = current.prev; // Deleting tail
        }
    }

    // Print list forward
    printForward() {
        let current = this.head;
        let result = "";
        while (current) {
            result += current.data + " <-> ";
            current = current.next;
        }
        result += "null";
        console.log("Forward:", result);
    }

    // Print list backward
    printBackward() {
        let current = this.tail;
        let result = "";
        while (current) {
            result += current.data + " <-> ";
            current = current.prev;
        }
        result += "null";
        console.log("Backward:", result);
    }
}


// Usage example
const list = new DoublyLinkedList();

list.add(10); // head -> 10
list.add(20);
list.add(30);
list.add(40);
list.add(90);
list.add(50); // tail -> 50

list.printForward(); // Output: Forward: 10 <-> 20 <-> 30 <-> 40 <-> 90 <-> 50 <-> null
list.printBackward(); // Output: Backward: 50 <-> 90 <-> 40 <-> 30 <-> 20 <-> 10 <-> null
