// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
    constructor() {
        this.elements = [];
      }
    
      // Method to add an element to the top of the stack
      push(element) {
        this.elements.push(element);
      }
    
      // Method to remove and return the element from the top of the stack
      pop() {
        if (this.isEmpty()) {
          return undefined; // If the stack is empty, return undefined
        }
        return this.elements.pop();
      }
    
      // Method to get the element from the top of the stack without removing it
      peek() {
        if (this.isEmpty()) {
          return undefined; // If the stack is empty, return undefined
        }
        return this.elements[this.elements.length - 1];
      }
    
      // Method to check if the stack is empty
      isEmpty() {
        return this.elements.length === 0;
      }
    
      // Method to get the size of the stack
      size() {
        return this.elements.length;
      }
}

module.exports = Stack;
