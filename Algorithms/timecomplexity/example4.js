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


// O(1) → ✅ Best (constant, instant).
// O(log n) → ✅ Very good (shrinks problem size fast).
// O(n) → 🙂 Acceptable (scales linearly).
// O(n log n) → 🙂 Still good (sorting level).
// O(n²) → 😐 OK for small n, bad for big n.
// O(2ⁿ) → 😱 Extremely bad (password cracking).