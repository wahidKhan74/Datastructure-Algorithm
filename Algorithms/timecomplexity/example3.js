// Guess the Number Game :
// Computer asks you to guess a number between 1–100.
// Each time you ask “Is it higher or lower than X?”, you cut the search space in half.

function guessNumberGame(target) {
  let left = 1;
  let right = 100;
  let attempts = 0;

  while (left <= right) {
    attempts++;
    const mid = Math.floor((left + right) / 2);
    
    if (mid === target) {
      return `Found the number ${target} in ${attempts} attempts!`;
    } else if (mid < target) {
      left = mid + 1; // Search in the higher half
    } else {
      right = mid - 1; // Search in the lower half
    }
  }

  return `Number ${target} not found.`;
}

// Example usage:
console.log(guessNumberGame(42)); // Output: Found the number 42 in X attempts!  :: O(log n)
console.log(guessNumberGame(100)); // Output: Found the number 100 in X attempts!  :: O(log n)