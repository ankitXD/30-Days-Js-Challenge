// Day 17: Data Structures
// Tasks/Activities:

// Activity 1: Linked List
// Task 1: Implement a Node class to represent an element in a linked list with properties value and next.
class Node {
  constructor(value) {
      this.value = value;
      this.next = null;
  }
}

// Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.
class LinkedList {
  constructor() {
      this.head = null;
  }

  add(value) {
      const newNode = new Node(value);
      if (this.head === null) {
          this.head = newNode;
      } else {
          let current = this.head;
          while (current.next !== null) {
              current = current.next;
          }
          current.next = newNode;
      }
  }

  remove() {
      if (this.head === null) {
          return null;
      }
      if (this.head.next === null) {
          const value = this.head.value;
          this.head = null;
          return value;
      }
      let current = this.head;
      while (current.next.next !== null) {
          current = current.next;
      }
      const value = current.next.value;
      current.next = null;
      return value;
  }

  display() {
      let current = this.head;
      while (current !== null) {
          console.log(current.value);
          current = current.next;
      }
  }
}

// Testing LinkedList
const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.display(); // Output: 1 2 3
console.log("Removed:", list.remove()); // Output: Removed: 3
list.display(); // Output: 1 2

// Activity 2: Stack
// Task 3: Implement a Stack class with methods push (add element), pop (remove element), and peek (view the top element).
class Stack {
  constructor() {
      this.items = [];
  }

  push(element) {
      this.items.push(element);
  }

  pop() {
      if (this.items.length === 0) {
          return null;
      }
      return this.items.pop();
  }

  peek() {
      if (this.items.length === 0) {
          return null;
      }
      return this.items[this.items.length - 1];
  }

  isEmpty() {
      return this.items.length === 0;
  }

  display() {
      console.log(this.items);
  }
}

// Testing Stack
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.display(); // Output: [1, 2, 3]
console.log("Popped:", stack.pop()); // Output: Popped: 3
console.log("Top Element:", stack.peek()); // Output: Top Element: 2

// Task 4: Use the Stack class to reverse a string by pushing all characters onto the stack and then popping them off.
function reverseString(str) {
  const stack = new Stack();
  for (let char of str) {
      stack.push(char);
  }
  let reversedStr = '';
  while (!stack.isEmpty()) {
      reversedStr += stack.pop();
  }
  return reversedStr;
}

console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("world")); // Output: "dlrow"

// Activity 3: Queue
// Task 5: Implement a Queue class with methods enqueue (add element), dequeue (remove element), and front (view the first element).
class Queue {
  constructor() {
      this.items = [];
  }

  enqueue(element) {
      this.items.push(element);
  }

  dequeue() {
      if (this.items.length === 0) {
          return null;
      }
      return this.items.shift();
  }

  front() {
      if (this.items.length === 0) {
          return null;
      }
      return this.items[0];
  }

  isEmpty() {
      return this.items.length === 0;
  }

  display() {
      console.log(this.items);
  }
}

// Testing Queue
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.display(); // Output: [1, 2, 3]
console.log("Dequeued:", queue.dequeue()); // Output: Dequeued: 1
console.log("Front Element:", queue.front()); // Output: Front Element: 2

// Task 6: Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.
class PrinterQueue extends Queue {
  processJobs() {
      while (!this.isEmpty()) {
          const job = this.dequeue();
          console.log("Processing job:", job);
      }
  }
}

// Testing PrinterQueue
const printerQueue = new PrinterQueue();
printerQueue.enqueue("Print job 1");
printerQueue.enqueue("Print job 2");
printerQueue.enqueue("Print job 3");
printerQueue.display(); // Output: ["Print job 1", "Print job 2", "Print job 3"]
printerQueue.processJobs(); // Output: Processing job: Print job 1, Processing job: Print job 2, Processing job: Print job 3

// Activity 4: Binary Tree
// Task 7: Implement a TreeNode class to represent a node in a binary tree with properties value, left, and right.
class TreeNode {
  constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
  }
}

// Task 8: Implement a BinaryTree class with methods for inserting values and performing in-order traversal to display nodes.
class BinaryTree {
  constructor() {
      this.root = null;
  }

  insert(value) {
      const newNode = new TreeNode(value);
      if (this.root === null) {
          this.root = newNode;
      } else {
          this.insertNode(this.root, newNode);
      }
  }

  insertNode(node, newNode) {
      if (newNode.value < node.value) {
          if (node.left === null) {
              node.left = newNode;
          } else {
              this.insertNode(node.left, newNode);
          }
      } else {
          if (node.right === null) {
              node.right = newNode;
          } else {
              this.insertNode(node.right, newNode);
          }
      }
  }

  inOrder(node) {
      if (node !== null) {
          this.inOrder(node.left);
          console.log(node.value);
          this.inOrder(node.right);
      }
  }
}

// Testing BinaryTree
const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(12);
tree.insert(18);
tree.inOrder(tree.root); // Output: 3 5 7 10 12 15 18

// Activity 5: Graph (Optional)
// Task 9: Implement a Graph class with methods to add vertices, add edges, and perform a breadth-first search (BFS).
class Graph {
  constructor() {
      this.adjacencyList = new Map();
  }

  addVertex(vertex) {
      if (!this.adjacencyList.has(vertex)) {
          this.adjacencyList.set(vertex, []);
      }
  }

  addEdge(vertex1, vertex2) {
      this.adjacencyList.get(vertex1).push(vertex2);
      this.adjacencyList.get(vertex2).push(vertex1);
  }

  bfs(start) {
      const visited = new Set();
      const queue = [start];
      while (queue.length > 0) {
          const vertex = queue.shift();
          if (!visited.has(vertex)) {
              console.log(vertex);
              visited.add(vertex);
              const neighbors = this.adjacencyList.get(vertex);
              for (let neighbor of neighbors) {
                  if (!visited.has(neighbor)) {
                      queue.push(neighbor);
                  }
              }
          }
      }
  }
}

// Testing Graph
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.bfs('A'); // Output: A B C D E

// Task 10: Use the Graph class to represent a simple network and perform BFS to find the shortest path between two nodes.
class Graph1 {
  constructor() {
      this.adjacencyList = new Map();
  }

  addVertex(vertex) {
      if (!this.adjacencyList.has(vertex)) {
          this.adjacencyList.set(vertex, []);
      }
  }

  addEdge(vertex1, vertex2) {
      this.adjacencyList.get(vertex1).push(vertex2);
      this.adjacencyList.get(vertex2).push(vertex1);
  }

  bfs(start, goal) {
      const visited = new Set();
      const queue = [[start]];
      while (queue.length > 0) {
          const path = queue.shift();
          const vertex = path[path.length - 1];
          if (vertex === goal) {
              return path;
          }
          if (!visited.has(vertex)) {
              visited.add(vertex);
              const neighbors = this.adjacencyList.get(vertex);
              for (let neighbor of neighbors) {
                  const newPath = [...path, neighbor];
                  queue.push(newPath);
              }
          }
      }
      return null;
  }
}

// Testing Graph with shortest path
const graph1 = new Graph();
graph1.addVertex('A');
graph1.addVertex('B');
graph1.addVertex('C');
graph1.addVertex('D');
graph1.addVertex('E');
graph1.addEdge('A', 'B');
graph1.addEdge('A', 'C');
graph1.addEdge('B', 'D');
graph1.addEdge('C', 'E');
graph1.addEdge('D', 'E');
console.log(graph1.bfs('A', 'E')); // Output: [ 'A', 'C', 'E' ] or [ 'A', 'B', 'D', 'E' ]

// Feature Request:
// Linked List Script: Write a script that implements a linked list with methods to add, remove, and display nodes.
// Stack Script: Create a script that implements a stack and uses it to reverse a string.
// Queue Script: Write a script that implements a queue and simulates a printer queue.
// Binary Tree Script: Create a script that implements a binary tree with insertion and in-order traversal methods.
// Graph Script: Write a script that implements a graph and performs breadth-first search (optional).

// Achievement:
// By the end of these activities, students will:
// Implement and use linked lists for dynamic data storage.
// Use stacks for LIFO (Last-In-First-Out) operations and reverse data.
// Use queues for FIFO (First-In-First-Out) operations and simulate real-world scenarios.
// Implement binary trees for hierarchical data storage and traversal.
// Understand and use graphs for network representations and pathfinding (optional).