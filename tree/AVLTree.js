// AVL Tree : An implementation of an AVL Tree, a self-balancing binary search tree.
// where the height of the two child subtrees of any node differs by at most one.
// This implementation includes methods for adding nodes, removing nodes, finding nodes, and traversing the tree.

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.height = 1; // Height of the node
    }
}

class AVLTree {
    // AVL Tree constructor initializes the root node to null
    constructor() {
        this.root = null;
    }

    // Get the height of a node
    getHeight(node) {
        return node ? node.height : 0;
    }

    // Get the balance factor of a node
    getBalance(node) {
        return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
    }

    // Rotate the subtree rooted with y to the right
    rightRotate(y) {
        const x = y.left;
        const T2 = x.right;

        // Perform rotation
        x.right = y;
        y.left = T2;

        // Update heights
        y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
        x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;

        // Return new root
        return x;
    }

    leftRotate(x) {
        const y = x.right;
        const T2 = y.left;

        // Perform rotation
        y.left = x;
        x.right = T2;

        // Update heights
        x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
        y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;

        // Return new root
        return y;
    }

    // Add a value to the AVL Tree
    add(value) {
        this.root = this._add(this.root, value);
    }

    _add(node, value) {
        // Normal BST insertion
        if (!node) {
            return new Node(value);
        }
        
        if (value < node.value) {
            node.left = this._add(node.left, value);
        } else if (value > node.value) {
            node.right = this._add(node.right, value);
        } else {
            // Duplicate values are not allowed in the AVL Tree
            return node;
        }

        // Update height of the ancestor node
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));

        // Get balance factor
        const balance = this.getBalance(node);

        // If the node becomes unbalanced, then there are 4 cases

        // Left Left Case
        if (balance > 1 && value < node.left.value) {
            return this.rightRotate(node);
        }

        // Right Right Case
        if (balance < -1 && value > node.right.value) {
            return this.leftRotate(node);
        }

        // Left Right Case
        if (balance > 1 && value > node.left.value) {
            node.left = this.leftRotate(node.left);
            return this.rightRotate(node);
        }

        // Right Left Case
        if (balance < -1 && value < node.right.value) {
            node.right = this.rightRotate(node.right);
            return this.leftRotate(node);
        }

        // Return the (unchanged) node pointer
        return node;
    }

    // Find a value in the AVL Tree
    find(value) {
        return this._find(this.root, value);
    }

    _find(node, value) {
        if (!node) {
            return null;
        }
        if (value < node.value) {
            return this._find(node.left, value);
        } else if (value > node.value) {
            return this._find(node.right, value);
        } else {
            return node; // Node found
        }
    }

    // Remove a value from the AVL Tree
    remove(value) {
        this.root = this._remove(this.root, value);
    }

    _remove(node, value) {
        // Normal BST deletion
        if (!node) {
            return node;
        }

        if (value < node.value) {
            node.left = this._remove(node.left, value);
        } else if (value > node.value) {
            node.right = this._remove(node.right, value);
        } else {
            // Node with only one child or no child
            if (!node.left || !node.right) {
                const temp = node.left ? node.left : node.right;
                if (!temp) {
                    return null; // No child case
                } else {
                    return temp; // One child case
                }
            } else {
                // Node with two children: Get the inorder successor (smallest in the right subtree)
                let temp = this._minValueNode(node.right);
                node.value = temp.value; // Copy the inorder successor's content to this node
                node.right = this._remove(node.right, temp.value); // Delete the inorder successor
            }
        }

        // If the tree had only one node then return
        if (!node) {
            return node;
        }

        // Update height of the current node
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));

        // Get balance factor of this ancestor node to check whether this node became unbalanced
        const balance = this.getBalance(node);

        // If this node becomes unbalanced, then there are 4 cases

        // Left Left Case
        if (balance > 1 && this.getBalance(node.left) >= 0) {
            return this.rightRotate(node);
        }

        // Left Right Case
        if (balance > 1 && this.getBalance(node.left) < 0) {
            node.left = this.leftRotate(node.left);
            return this.rightRotate(node);
        }

        // Right Right Case
        if (balance < -1 && this.getBalance(node.right) <= 0) {
            return this.leftRotate(node);
        }

        // Right Left Case
        if (balance < -1 && this.getBalance(node.right) > 0) {
            node.right = this.rightRotate(node.right);
            return this.leftRotate(node);
        }

        return node; // Return the (unchanged) node pointer
    }

    // inorder traversal of the AVL Tree
    inorderTraversal(node=this.root, prefix="", position="root", parent=null) {
        if (node) {
            // Got left first
            this.inorderTraversal(node.left, prefix + "    ", "L", node);

            const parentHint = parent ? ` of ${parent.value}` : "";
            // Print current node with position
            console.log(`${prefix}[${position}${parentHint}] -> ${node.value}`);

            // Then got right
            this.inorderTraversal(node.right, prefix + "    ", "R", node);
        }
    }


    // In-order traversal
    inorder(node = this.root) {
        if (node) {
        this.inorder(node.left);
        console.log(node.value);
        this.inorder(node.right);
        }
    }
}

// Example usage
const avlTree = new AVLTree();

avlTree.add(10); // Adding nodes to the AVL Tree
avlTree.add(20);
avlTree.add(30);
avlTree.add(25);
avlTree.add(5);
avlTree.add(15);
avlTree.add(3);
avlTree.add(7);
avlTree.add(8);


console.log("Inorder Traversal of AVL Tree:");
avlTree.inorderTraversal();
// avlTree.inorder();


