// Activity 1: Function Declaration
// Task 1: Write a function to check if a number is even or odd and log the result to the console.
function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
      console.log("Even");
  } else {
      console.log("Odd");
  }
}
checkEvenOrOdd(4); 
checkEvenOrOdd(7); 

// Task 2: Write a function to calculate the square of a number and return the result.
function calculateSquare(number) {
  return number * number;
}

let square = calculateSquare(5);
console.log(square);

// Activity 2: Function Expression
// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
let findMax = function(num1, num2) {
  let max = (num1 > num2) ? num1 : num2;
  console.log(max);
};

findMax(10, 20);

// Task 4: Write a function expression to concatenate two strings and return the result.
let concatenateStrings = function(str1, str2) {
  return str1 + str2;
};

let concatenated = concatenateStrings("Hello, ", "world!");
console.log(concatenated); 

// Activity 3: Arrow Functions
// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
let sum = (num1, num2) => num1 + num2;

let result = sum(5, 10);
console.log(result);

// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
let containsCharacter = (str, char) => str.includes(char);

let hasChar = containsCharacter("Hello, world!", "w");
console.log(hasChar); 

// Activity 4: Function Parameters and Default Values
// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
function multiply(num1, num2 = 1) {
  return num1 * num2;
}

let product = multiply(5);
console.log(product); 

// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
function greet(name, age = "unknown") {
  return `Hello, ${name}! You are ${age} years old.`;
}

let greeting = greet("Alice");
console.log(greeting); 

// Activity 5: Higher-Order Functions
// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
function repeatFunction(fn, times) {
  for (let i = 0; i < times; i++) {
      fn();
  }
}

repeatFunction(() => console.log("Hello"), 3);

// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
function applyFunctions(fn1, fn2, value) {
  return fn2(fn1(value));
}

let add5 = x => x + 5;
let multiplyBy2 = x => x * 2;

let res = applyFunctions(add5, multiplyBy2, 10);
console.log(res);