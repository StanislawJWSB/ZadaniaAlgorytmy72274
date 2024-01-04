// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
    constructor() {
        this.elements = [];
      }
    
      
      add(element) {
        this.elements.push(element);
      }
    
      
      remove() {
        if (this.isEmpty()) {
          return undefined; 
        }
        return this.elements.shift();
      }
    
      
      isEmpty() {
        return this.elements.length === 0;
      }
    
      
      size() {
        return this.elements.length;
      }
}

module.exports = Queue;
