let cart = ["milk", "bread", "eggs", "butter"];

function addItem(item) {
  cart.push(item);   // O(1) - Adding an item to the end of an array is a constant time operation 
  // push() in JavaScript arrays is O(1) (constant time).
}

function getFirstItem() {
  return cart[0];
}

function getLastItem() {
  return cart[cart.length - 1];  // O(1) - Accessing the last item is also a constant time operation
}



// Example usage:
console.log(getFirstItem()); // Output: "milk"  :  O(1)

addItem("cheese");  // O(1)

console.log(getLastItem()); // Output: "cheese"  : O(1)

