// Problem 4: Variadic Statistics Function

function getStats(...nums) {
    // else statement not neccessary since only one statement is being checked and the if statement is purposefully not meant to run since it's false

    if (nums.length === 0) { 
      return { count: 0, sum: 0, min: null, max: null, average: null };
    }
  
    let count = nums.length;
    let sum = nums.reduce((acc, num) => acc + num, 0); // .reduce adds all values, acc carries result through array Ex: (0+3, 3+7, 10+10, 20+2, etc) acc is set to 0
                                                        //* => shorthand for function sum{return}
    let min = Math.min(...nums); // Math.min finds smallest number
    let max = Math.max(...nums); // Math.max finds biggest number
    let average = sum / count;
  
    return { 
        count,
        sum,
        min,
        max,
        average 
    };
  }
  
// Test the function
console.log(getStats(3, 7, 10, 2, 20));
  

