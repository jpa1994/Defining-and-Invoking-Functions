// Problem 6: Factorial Calculator

function factorial(n) {
        //* Base case, to keep function from returning forever
    if (n === 0 || n === 1) {
        return 1; 
    }

    return n * factorial(n - 1); // Recursive case
}

console.log(factorial(0)); // 1
console.log(factorial(5)); // 120  (5×4×3×2×1)
console.log(factorial(7)); // 5040