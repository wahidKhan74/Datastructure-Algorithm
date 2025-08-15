// Graph : A graph data structure implementation in JavaScript
// This implementation includes methods for adding vertices, adding edges, removing vertices, removing edges, and
// traversing the graph using depth-first search (DFS) and breadth-first search (BFS).

class Graph {
    // Constructor initializes an empty adjacency list
    constructor() {
        this.adjacencyList = {}; // Stores vertices and their neighbors
    }

    // Add a vertex or node to the graph
    addVertex(vertex) {
        // check if the vertex already exists
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    // Add an edge (undirected by default)
    addEdge(v1, v2) {
        if (!this.adjacencyList[v1]) this.addVertex(v1);
        if (!this.adjacencyList[v2]) this.addVertex(v2);
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    // Remove an edge
    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
    }

    // Remove a vertex
    removeVertex(vertex) {
        while (this.adjacencyList[vertex]) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }

    // Breadth-First Search (BFS)
    // Starts from a given vertex and explores all its neighbors before moving to the next level
    // Uses a queue to keep track of vertices to visit
    bfs(start) {
        const queue = [start];
        const visited = new Set();
        visited.add(start);

        while (queue.length) {
            const vertex = queue.shift();
            console.log(vertex ,"=>");

            for (let neighbor of this.adjacencyList[vertex]) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
    }

    // Depth-First Search (DFS) - Recursive
    // Starts from a given vertex and explores as far as possible along each branch before backtracking
    // Uses a set to keep track of visited vertices
    dfsRecursive(start, visited = new Set()) {
        if (!start) return;
        console.log(start);
        visited.add(start);

        for (let neighbor of this.adjacencyList[start]) {
            if (!visited.has(neighbor)) {
                this.dfsRecursive(neighbor, visited);
            }
        }
    }

    // Depth-First Search (DFS) - Iterative
    dfsIterative(start) {
        const stack = [start];
        const visited = new Set();
        visited.add(start);

        while (stack.length) {
            const vertex = stack.pop();
            console.log(vertex);

            for (let neighbor of this.adjacencyList[vertex]) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    stack.push(neighbor);
                }
            }
        }
    }
}

// Example Usage
const g = new Graph();

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log("Adjacency List:", g.adjacencyList);

console.log("\nBFS Traversal:");
g.bfs("A");

console.log("\nDFS Recursive Traversal:");
g.dfsRecursive("A");
