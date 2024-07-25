// Day 12: Error Handling
// Tasks/Activities:

// Activity 1: Basic Error Handling with Try-Catch
// Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.
function throwError() {
  throw new Error("Intentional error");
}

try {
  throwError();
} catch (error) {
  console.error("Caught an error: ", error.message);
}


// Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.
function divideNumbers(a, b) {
  if (b === 0) {
      throw new Error("Cannot divide by zero");
  }
  return a / b;
}

try {
  console.log(divideNumbers(10, 2)); // Should log 5
  console.log(divideNumbers(10, 0)); // Should throw an error
} catch (error) {
  console.error("Caught an error: ", error.message);
}


// Activity 2: Finally Block
// Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.
try {
  console.log("This is the try block.");
  throw new Error("Error in try block");
} catch (error) {
  console.error("Caught an error in catch block: ", error.message);
} finally {
  console.log("This is the finally block.");
}


// Activity 3: Custom Error Objects
// Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.
class CustomError extends Error {
  constructor(message) {
      super(message);
      this.name = "CustomError";
  }
}

function throwCustomError() {
  throw new CustomError("This is a custom error");
}

try {
  throwCustomError();
} catch (error) {
  console.error(`${error.name}: ${error.message}`);
}


// Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.
class ValidationError extends Error {
  constructor(message) {
      super(message);
      this.name = "ValidationError";
  }
}

function validateInput(input) {
  if (input.trim() === "") {
      throw new ValidationError("Input cannot be empty");
  }
  return true;
}

try {
  validateInput("Valid input");
  console.log("Input is valid");
  validateInput(""); // Should throw an error
} catch (error) {
  console.error(`${error.name}: ${error.message}`);
}


// Activity 4: Error Handling in Promises
// Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.
const randomPromise = new Promise((resolve, reject) => {
  const success = Math.random() > 0.5;
  setTimeout(() => {
      success ? resolve("Promise resolved") : reject("Promise rejected");
  }, 1000);
});

randomPromise
  .then((message) => console.log(message))
  .catch((error) => console.error("Caught an error: ", error));


// Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.
const randomPromise2 = new Promise((resolve, reject) => {
  const success = Math.random() > 0.5;
  setTimeout(() => {
      success ? resolve("Promise resolved") : reject("Promise rejected");
  }, 1000);
});

async function handleRandomPromise() {
  try {
      const result = await randomPromise2;
      console.log(result);
  } catch (error) {
      console.error("Caught an error in async function: ", error);
  }
}

handleRandomPromise();


// Activity 5: Graceful Error Handling in Fetch
// Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.
fetch("https://invalid.url")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error fetching data: ", error));


// Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.
async function fetchData() {
  try {
      const response = await fetch("https://invalid.url");
      const data = await response.json();
      console.log(data);
  } catch (error) {
      console.error("Error fetching data in async function: ", error);
  }
}

fetchData();

// Feature Request:
// Basic Error Handling Script: Write a script that demonstrates basic error handling using try-catch and finally blocks.
// Custom Error Script: Create a script that defines and throws custom errors, handling them with try-catch blocks.
// Promise Error Handling Script: Write a script that handles errors in promises using .catch() and try-catch within async functions.
// Fetch Error Handling Script: Create a script that handles errors when using the fetch API to request data from invalid URLs.

// Achievement:
// By the end of these activities, students will:
// Understand and implement basic error handling using try-catch blocks.
// Use finally blocks to execute code regardless of the try-catch outcome.
// Create and use custom error classes.
// Handle errors in promises using .catch() and within async functions using try-catch.
// Implement graceful error handling when making network requests with the fetch API.