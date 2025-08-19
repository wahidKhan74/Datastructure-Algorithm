// Quadratic Time → O(n²)  :: The time taken grows quadratically with the size of the input.
// This means if the input size doubles, the time taken increases by four times.
// Example: A function that checks all pairs of elements in an array.

function checkAllPairs(arr) {
    // This function checks all pairs of elements in an array.
    // It uses two nested loops, which results in quadratic time complexity.
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(`Pair: ${arr[i]}, ${arr[j]}`);
        }
    }
}


// Example usage: 
let numbers = [1, 2, 3, 4, 5];
checkAllPairs(numbers); // Output: Pair: 1, 1, Pair: 1, 2, Pair: 1, 3, ..., Pair: 5, 4, Pair: 5, 5  :: O(n²)

let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
checkAllPairs(numbers2); // Output: Pair: 1, 1, Pair: 1, 2, ..., Pair: 10, 9, Pair: 10, 10 :: O(n²)



