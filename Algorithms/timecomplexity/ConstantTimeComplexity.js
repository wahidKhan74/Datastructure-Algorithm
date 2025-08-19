// Time complexity measures how fast an algorithm runs as the input size grows.
// How many steps does the algorithm take as the input increases?

// Constant Time Complexity: O(1) : Doesn’t matter how big the input is, it always takes the same time.

function getFirstElement(arr) {
  // This function returns the first element of an array.
  // Regardless of the size of the array, it always takes the same amount of time.
  return arr[0];
}

// Example usage:
const numbers = [10, 20, 30, 40, 50];
console.log(getFirstElement(numbers)); // Output: 10
// The function getFirstElement always accesses the first element of the array,
// which is a constant time operation, O(1).


const numbers2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200];
console.log(getFirstElement(numbers2)); // Output: 10
// The size of the array does not affect the time it takes to retrieve the first element.
// It remains a constant time operation, O(1).

function isFirstElementEven(arr) {
  // This function checks if the first element of an array is even.
  // It takes the same time regardless of the size of the array.
  return arr[0] % 2 === 0;
}

// Example usage:
console.log(isFirstElementEven(numbers)); // Output: true   : O(1)
console.log(isFirstElementEven(numbers2)); // Output: true   : O(1)
