// Finding the Missing Number

function findMissingNumber(arr) { 
    const n = arr.length + 1; // Since one number is missing
    const totalSum = (n * (n + 1)) / 2; // Sum of first n natural numbers
    let actualSum = 0;

    for (let i = 0; i < arr.length; i++) {
        actualSum += arr[i]; // Calculate the sum of the array elements
    }
    return totalSum - actualSum; // The difference is the missing number
}


const array = [1, 2, 3, 4, 6, 7, 8, 9];
console.log("The missing number is:", findMissingNumber(array)); // Output: The missing number is: 5


