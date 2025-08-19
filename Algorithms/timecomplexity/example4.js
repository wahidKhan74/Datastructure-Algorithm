function bruteForcePassword(password) {
  const chars = ["0", "1"]; // just binary for simplicity
  const maxLength = password.length;

  function generate(current) {
    if (current.length === maxLength) {
      if (current === password) {
        console.log("Password found:", current);
        return true;
      }
      return false;
    }

    for (let ch of chars) {
      if (generate(current + ch)) return true; // stop when found
    }
    return false;
  }

  generate("");
}

bruteForcePassword("101"); 
// Output: Password found: 101 :: O(2^n) - Exponential time complexity due to all combinations of characters
