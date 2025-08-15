// Tree : A tree data structure implementation in JavaScript
// This implementation includes methods for adding nodes, removing nodes, finding nodes, and traversing the tree.
// Binary search trees.

class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    addChild(childNode) {
        // Debug log: Adding child node
        // console.log(`addChild: Adding child with value '${childNode.value}' to parent '${this.value}'`);
        if (childNode instanceof TreeNode) {
            this.children.push(childNode);
        } else {
            throw new Error("Child must be an instance of TreeNode");
        }
    }

    removeChild(childNode) {
        // Debug log: Attempting to remove child node
        // console.log(`removeChild: Attempting to remove child with value '${childNode.value}' from parent '${this.value}'`);
        const index = this.children.indexOf(childNode);
        if (index > -1) {
            this.children.splice(index, 1);
        } else {
            throw new Error("Child not found in children");
        }
    }

    findChild(value) {
        // Debug log: Searching for child node
        // console.log(`findChild: Searching for child with value '${value}' in parent '${this.value}'`);
        for (let child of this.children) {
            if (child.value === value) {
                return child;
            }
        }
        return null;
    }

    traverse(callback) {
        callback(this);
        for (let child of this.children) {
            child.traverse(callback);
        }
    }

    toString() {
        return `TreeNode(value: ${this.value}, children: [${this.children.map(child => child.value).join(', ')}])`;
    }
}


class Tree {

    constructor(rootValue) {
        this.root = new TreeNode(rootValue);
    }

    addNode(parentValue, childValue) {
        // Debug log: Adding node
        // console.log(`addNode: Adding node with value '${childValue}' under parent '${parentValue}'`);
        const parentNode = this.findNode(this.root, parentValue);
        if (parentNode) {
            parentNode.addChild(new TreeNode(childValue));
        } else {
            throw new Error("Parent node not found");
        }
    }

    findNode(node, value) {
        // Debug log: Searching for node
        // console.log(`findNode: Searching for value '${value}' at node '${node.value}'`);
        if (node.value === value) {
            return node;
        }
        for (let child of node.children) {
            const foundNode = this.findNode(child, value);
            if (foundNode) {
                return foundNode;
            }
        }
        return null;
    }

    traverse(callback) {
        this.root.traverse(callback);
    }

    toString() {
        return this.root.toString();
    }
}

// example usage
const myTree = new Tree("Root");

// Adding nodes to the tree
myTree.addNode("Root", "Child1");
myTree.addNode("Root", "Child2");

// Adding a child to Child1
myTree.addNode("Child1", "Grandchild1");
myTree.addNode("Child1", "Grandchild2");

myTree.addNode("Child2", "Grandchild3");
myTree.addNode("Child2", "Grandchild4");

// Traversing the tree
myTree.traverse(node => {
    // Debug log: Traversing node
    console.log(`Visiting node '${node.value}'`);
    console.log(node.toString());
});