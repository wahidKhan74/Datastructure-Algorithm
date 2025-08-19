let twoDArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

//Accessing elements in a 2D array
console.log("Element at (0, 0):", twoDArray[0][0]); // Output: 1
console.log("Element at (1, 2):", twoDArray[1][1]); // Output: 5
console.log("Element at (2, 1):", twoDArray[2][1]); // Output: 8

console.log("-------------------------");

// Iterating through a 2D array
for (let row = 0; row < twoDArray.length; row++) {
    for (let col = 0; col < twoDArray[row].length; col++) {
        console.log(`Element at (${row}, ${col}):`, twoDArray[row][col]);
    }
}

// Add a new row to the 2D array
twoDArray.push([10, 11, 12]);
console.log("After adding a new row:", twoDArray);

// Remove a row from the 2D array
twoDArray.pop();
console.log("After removing the last row:", twoDArray);
