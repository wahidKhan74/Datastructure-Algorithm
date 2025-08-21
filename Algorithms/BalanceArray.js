// Balanced Array : An array that can be divided into two parts such that the sum of elements in both halves is equal.
// example : [1, 2, 2, 2, 1, 2] can be divided into [1, 2, 2] and [2, 1, 2] with equal sum of 6.
//  Function to check if an array is balanced

function isBalancedArray(arr) {
    // if length of array is odd, it cannot be balanced
    if (arr.length % 2 !== 0) {
        return false;
    }

    const mid = arr.length / 2;

    const leftSum = arr.slice(0, mid).reduce((acc, num) => acc + num, 0);
    const rightSum = arr.slice(mid).reduce((acc, num) => acc + num, 0);

    return leftSum === rightSum;

}

// Example usage
const balancedArray = [1, 2, 2, 2, 1, 2];
console.log("Is the array balanced?", isBalancedArray(balancedArray)); // Output: true

const unbalancedArray = [1, 2, 3, 4, 5];
console.log("Is the array balanced?", isBalancedArray(unbalancedArray)); // Output: false



