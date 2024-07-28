// Day 15: Closures
// Tasks/Activities:
// Activity 1: Understanding Closures
// Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.
function outerFunction() {
  let outerVariable = 'Hello, Closure!';

  function innerFunction() {
      return outerVariable;
  }

  return innerFunction;
}

const getInnerFunction = outerFunction();
console.log(getInnerFunction()); // Output: Hello, Closure!

// Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.
function createCounter() {
  let counter = 0;

  return {
      increment: function() {
          counter++;
      },
      getValue: function() {
          return counter;
      }
  };
}

const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getValue()); // Output: 2

// Activity 2: Practical Closures
// Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.
function createIdGenerator() {
  let lastId = 0;

  return function() {
      lastId++;
      return lastId;
  };
}

const generateId = createIdGenerator();
console.log(generateId()); // Output: 1
console.log(generateId()); // Output: 2

// Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.
function createGreeter(name) {
  return function() {
      return `Hello, ${name}!`;
  };
}

const greetJohn = createGreeter('John');
console.log(greetJohn()); // Output: Hello, John!

// Activity 3: Closures in Loops
// Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.
function createFunctionArray() {
  let functions = [];

  for (let i = 0; i < 5; i++) {
      functions.push((function(index) {
          return function() {
              console.log(index);
          };
      })(i));
  }

  return functions;
}

const functionArray = createFunctionArray();
functionArray[0](); // Output: 0
functionArray[1](); // Output: 1
functionArray[2](); // Output: 2
functionArray[3](); // Output: 3
functionArray[4](); // Output: 4

// Activity 4: Module Pattern
// Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.
const ItemManager = (function() {
  let items = [];

  return {
      addItem: function(item) {
          items.push(item);
      },
      removeItem: function(item) {
          const index = items.indexOf(item);
          if (index > -1) {
              items.splice(index, 1);
          }
      },
      listItems: function() {
          return items;
      }
  };
})();

ItemManager.addItem('Apple');
ItemManager.addItem('Banana');
console.log(ItemManager.listItems()); // Output: ['Apple', 'Banana']
ItemManager.removeItem('Apple');
console.log(ItemManager.listItems()); // Output: ['Banana']

// Activity 5: Memoization
// Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.
function memoize(fn) {
  const cache = {};

  return function(...args) {
      const key = JSON.stringify(args);
      if (cache[key]) {
          return cache[key];
      } else {
          const result = fn(...args);
          cache[key] = result;
          return result;
      }
  };
}

const add = (a, b) => a + b;
const memoizedAdd = memoize(add);

console.log(memoizedAdd(1, 2)); // Output: 3
console.log(memoizedAdd(1, 2)); // Output: 3 (from cache)

// Task 8: Create a memoized version of a function that calculates the factorial of a number.
function memoize(fn) {
  const cache = {};

  return function(...args) {
      const key = JSON.stringify(args);
      if (cache[key]) {
          return cache[key];
      } else {
          const result = fn(...args);
          cache[key] = result;
          return result;
      }
  };
}

const factorial = memoize(function(n) {
  if (n <= 1) {
      return 1;
  } else {
      return n * factorial(n - 1);
  }
});

console.log(factorial(5)); // Output: 120
console.log(factorial(6)); // Output: 720 (uses cached factorial(5) for computation)

// Feature Request:
// Basic Closure Script: Write a script that demonstrates a basic closure with a function returning another function that accesses the outer function's variable.
// Counter Closure Script: Create a script that uses a closure to maintain a private counter with increment and get functions.
// Unique ID Generator Script: Write a script that generates unique IDs using a closure to keep track of the last generated ID.
// Loop Closure Script: Create a script that demonstrates closures in loops to ensure functions log the correct index.
// Memoization Script: Write a script that memoizes the results of a function and demonstrates it with a factorial calculation.

// Achievement:
// By the end of these activities, students will:
// Understand and create closures in JavaScript.
// Use closures to maintain private state and create encapsulated modules.
// Apply closures in practical scenarios like generating unique IDs and memoization.
// Use closures in loops to capture and use variables correctly.