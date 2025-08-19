// Linear Time Complexity : O(n) : The time taken grows linearly with the size of the input.
// This means if the input size doubles, the time taken also doubles.
// Example: A function that prints all elements of an array.
function printAll(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

// Example usage:
let numebrs = [10, 20, 30, 40, 50];
printAll(numebrs); // Output: 10, 20, 30, 40, 50  :: O(n)

let moreNumbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
printAll(moreNumbers); // Output: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 :: O(n)


// O(n) ::  Big of O (n)  :: n is the numner of steps.


let cart = ["milk", "bread", "eggs", "butter"];

function checkExpiry(cart) {
    for (let i = 0; i < cart.length; i++) {
        console.log(`Checking expiry for : ${cart[i]}`);
    }
}

// Example usage:
checkExpiry(cart); // Output: Checking expiry for : milk, bread, eggs, butter :: O(n)

function findCartItem(item) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i] === item) {
            return `Found ${item} at index ${i}`;
        }
    }
    return `${item} not found`;
}

// Example usage:
console.log(findCartItem("bread")); // Output: Found bread at index 1 :: O(n)
console.log(findCartItem("milk")); // Output: cheese not found  :: O(n)