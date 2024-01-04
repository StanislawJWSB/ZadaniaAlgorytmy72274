// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
      }
    
      // Method to insert a new node with the given data
      insert(data) {
        if (data < this.data) {
          if (this.left === null) {
            this.left = new Node(data);
          } else {
            this.left.insert(data);
          }
        } else if (data > this.data) {
          if (this.right === null) {
            this.right = new Node(data);
          } else {
            this.right.insert(data);
          }
        }
        // If data is equal, do nothing (assuming no duplicates allowed)
      }
    
      // Method to check if the tree contains a node with the given data
      contains(data) {
        if (data === this.data) {
          return this; // Node with the given data found
        }
    
        if (data < this.data && this.left !== null) {
          return this.left.contains(data);
        } else if (data > this.data && this.right !== null) {
          return this.right.contains(data);
        }
    
        return null; // Node with the given data not found
      }
}

module.exports = Node;
