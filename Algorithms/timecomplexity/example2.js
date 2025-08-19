function findDuplicates(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        console.log("Duplicate:", arr[i] , arr[j]); // O(n²) - Checking each pair of elements for duplicates
      }
    }
  }
}

// Example usage:
let numbers = [1, 2, 3, 4, 5, 1, 2];
findDuplicates(numbers); 