// Exponential Time Complexity: O(2^n) : The time taken grows exponentially with the size of the input.
// This means if the input size increases by 1, the time taken doubles.
// Example: A function that generates all fibonacci numbers up to n.
// 1 , 1 , 2, 3, 5, 8 , 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765

function fibonacci(n) {
    if (n <= 1) {
        return n; // Base case
    }
    return fibonacci(n - 1) + fibonacci(n - 2); // Recursive calls
}

// Example usage:
console.log("Fibonacci of 5:", fibonacci(10)); // Output: 5  :: O(2^n)

// O(2^n) → Password cracking

