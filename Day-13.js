// Day 13: Modules
// Tasks/Activities:

// Activity 1: Creating and Exporting Modules
// Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.
// add.js
export function add(a, b) {
  return a + b;
}
// main.js
import { add } from './add.js';

const result = add(2, 3);
console.log(`The sum is: ${result}`);

// Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.
// person.js
const person = {
  name: 'John Doe',
  age: 30,
  greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
};

//export default person;

// main.js
import person from './person.js';

person.greet();


// Activity 2: Named and Default Exports
// Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.
// math.js
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

// main.js
import { add, subtract } from './math.js';

console.log(`Addition: ${add(5, 3)}`);
console.log(`Subtraction: ${subtract(5, 3)}`);


// Task 4: Create a module that exports a single function using default export. Import and use this function in another script.
// multiply.js
export default function multiply(a, b) {
  return a * b;
}

// main.js
import multiply from './multiply.js';

console.log(`Multiplication: ${multiply(4, 5)}`);


// Activity 3: Importing Entire Modules
// Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.
// constants.js
export const PI = 3.14159;
export const E = 2.71828;

export function circleArea(radius) {
    return PI * radius * radius;
}

export function naturalLogarithm(value) {
    return Math.log(value) / Math.log(E);
}

// main.js
import * as constants from './constants.js';

console.log(`PI: ${constants.PI}`);
console.log(`Circle Area (radius 2): ${constants.circleArea(2)}`);
console.log(`Natural Logarithm (E): ${constants.naturalLogarithm(constants.E)}`);


// Activity 4: Using Third-Party Modules
// Task 6: Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.
//npm install lodash
// main.js
import _ from 'lodash';

const array = [1, 2, 3, 4, 5];
const shuffledArray = _.shuffle(array);

console.log(`Original Array: ${array}`);
console.log(`Shuffled Array: ${shuffledArray}`);


// Task 7: Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script.
//npm install axios

// main.js
import axios from 'axios';

async function fetchData() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();

// Activity 5: Module Bundling (Optional)
// Task 8: Use a module bundler like Webpack or Parcel to bundle multiple JavaScript files into a single file. Write a script to demonstrate the bundling process.
//npm install --save-dev webpack webpack-cli

// webpack.config.js
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
};

// /project
//   /dist
//   /src
//     index.js
//     add.js
//     multiply.js
//   webpack.config.js
//   package.json

// src/add.js
export function add(a, b) {
  return a + b;
}

// src/multiply.js
export default function multiply(a, b) {
  return a * b;
}
// src/index.js
import { add } from './add.js';
import multiply from './multiply.js';

console.log(`Addition: ${add(3, 4)}`);
console.log(`Multiplication: ${multiply(3, 4)}`);

//npx webpack

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Webpack Bundle</title>
// </head>
// <body>
//     <script src="./dist/bundle.js"></script>
// </body>
// </html>


// Feature Request:
// Basic Module Script: Write a script that creates a module exporting a function and imports it in another script.
// Named and Default Exports Script: Create a script demonstrating both named and default exports and their usage.
// Third-Party Module Script: Write a script that installs, imports, and uses functions from third-party modules like lodash and axios.
// Module Bundling Script: Create a script demonstrating how to bundle JavaScript files using a module bundler (optional).

// Achievement:
// By the end of these activities, students will:
// Create and export functions, objects, and constants using modules.
// Import modules using named and default imports.
// Use third-party modules installed via npm.
// Understand the basics of module bundling (optional).