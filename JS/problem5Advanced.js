// Problem 5: Title-Case Converter

function toTitleCase(word) {
    word = String(word) // String() ,with capital S, converts anything to a string

    let firstChar = word.charAt(0).toUpperCase(); // .charAt() targets specific character in string, can be used to target specific string in arrays
    
    let rest = word.slice(1).toLowerCase(); // .slice() targets specifc chars in string, Ex: .slice(1,4) targets from second char onwwards, the second number excludes that char and everything after

  return firstChar + rest;
  }

console.log(toTitleCase("javascript")); // "Javascript"
console.log(toTitleCase("hELLo"));      // "Hello"