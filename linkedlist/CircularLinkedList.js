// LinkedList : A simple implementation of a circular linked list in JavaScript

// Node class
class Node {
    constructor(data) {
        this.data = data;  // Value stored in the node
        this.next = null; // Pointer to next node
    }
}

// LinkedList class
class CircularLinkedList {
    constructor() {
        this.head = null; // Start of the list
        this.size = 0;    // Size of the list
    }

    // Add a new node at the end of the list
    add(data) {
        const newNode = new Node(data); // Create a new node
        if (!this.head) {
            this.head = newNode; // If list is empty, set head to new node
            newNode.next = this.head; // Point new node to itself
        } else {
            let current = this.head;
            while (current.next !== this.head) {
                current = current.next; // Traverse to the end of the list
            }
            current.next = newNode; // Link the new node at the end
            newNode.next = this.head; // Point new node to head to maintain circularity
        }
        this.size++; // Increment size of the list
    }

    // Add a new node at start of the list
    addAtStart(data) {
        const newNode = new Node(data);
        if (!this.head) { // If list is empty
            this.head = newNode;
            newNode.next = this.head; // Point new node to itself
        } else {
            newNode.next = this.head; // Point new node to current head
            let current = this.head;
            while (current.next !== this.head) {
                current = current.next; // Traverse to the end of the list
            }
            current.next = newNode; // Link the last node to the new head
            this.head = newNode; // Update head to new node
        }
        this.size++; // Increment size of the list
    }

    // Delete a node by value
    delete(data) {
        if (!this.head) return; // If list is empty, nothing to delete

        let current = this.head;
        let prev = null;

        // Traverse the list to find the node to delete
        do {
            if (current.data === data) {
                if (prev) {
                    prev.next = current.next; // Bypass the current node
                } else {
                    // If head is to be deleted, find the last node
                    let last = this.head;
                    while (last.next !== this.head) {
                        last = last.next; // Traverse to the last node
                    }
                    last.next = current.next; // Update last node's next pointer
                    this.head = current.next; // Update head to next node
                }
                this.size--; // Decrement size
                return;
            }
            prev = current;
            current = current.next; // Move to next node
        } while (current !== this.head); // Stop when we circle back to head
    }

    // Print the list
    print() {
        if (!this.head) return "List is empty";

        let current = this.head;
        let result = "";
        do {
            result += current.data + " -> ";
            current = current.next; // Move to next node
        } while (current !== this.head); // Stop when we circle back to head
        result += "(head: " + this.head.data + ")";
        return result; // Return the string representation of the list
    }

    // Get the size of the list
    getSize() {
        return this.size; // Return the size of the list
    }

    // Check if the list is empty
    isEmpty() { 
        return this.size === 0; // Return true if size is zero
    }

    // Clear the list
    clear() {   
        this.head = null; // Reset head to null
        this.size = 0;    // Reset size to zero
        return "List cleared"; // Return confirmation message
    }

    // Get the head of the list
    getHead() {
        return this.head; // Return the head of the list
    }

    // Get the tail of the list
    getTail() {
        if (!this.head) return null; // If list is empty, return null
        let current = this.head;
        while (current.next !== this.head) {
            current = current.next; // Traverse to the last node
        }
        return current; // Return the last node
    }

    // Get the node at a specific index
    getNodeAtIndex(index) {
        if (index < 0 || index >= this.size) return null; // Check for valid index
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next; // Traverse to the node at index
        }
        return current; // Return the node at the specified index
    }
    
    
}


// Usage example
const list = new CircularLinkedList();
