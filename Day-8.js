// Day 8: ES6+ Features
// Tasks/Activities:
// Activity 1: Template Literals
// Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
let name = "John";
let age = 25;
let greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting);

// Task 2: Create a multi-line string using template literals and log it to the console.
let multiLineString = `This is a multi-line string.
It spans multiple lines.
Using template literals makes it easy.`;
console.log(multiLineString);

// Activity 2: Destructuring
// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
let numbers = [10, 20, 30, 40, 50];
let [first, second] = numbers;
console.log(first, second); 

// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
let book = {
  title: "The Catcher in the Rye",
  author: "J.D. Salinger",
  year: 1951
};

let { title, author } = book;
console.log(title, author); 

// Activity 3: Spread and Rest Operators
// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
let originalArray = [1, 2, 3];
let newArray = [...originalArray, 4, 5, 6];
console.log(newArray); 

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3)); 
console.log(sum(10, 20, 30, 40)); 

// Activity 4: Default Parameters
// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5, 2)); // Output: 10
console.log(multiply(5)); // Output: 5

// Activity 5: Enhanced Object Literals
// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
let name1 = "Alice";
let age1 = 30;

let person = {
    name1,
    age1,
    greet() {
        console.log(`Hello, my name is ${this.name1} and I am ${this.age1} years old.`);
    }
};

console.log(person);

person.greet(); 

// Task 9: Create an object with computed property names based on variables and log the object to the console.
let propName = "favoriteColor";
let propValue = "blue";

let obj = {
    [propName]: propValue,
    ['is' + propName.charAt(0).toUpperCase() + propName.slice(1)]: true
};

console.log(obj);

// Feature Request:

// Template Literals Script: Write a script that demonstrates the use of template literals to create and log strings with embedded variables and multi-line strings.
// Destructuring Script: Create a script that uses array and object destructuring to extract values and log them.
// Spread and Rest Operators Script: Write a script that demonstrates the use of the spread operator to combine arrays and the rest operator to handle multiple function arguments.
// Default Parameters Script: Create a script that defines a function with default parameters and logs the results of calling it with different arguments.
// Enhanced Object Literals Script: Write a script that uses enhanced object literals to create and log an object with methods and computed property names.

// Achievement:

// By the end of these activities, students will:
// Understand and use template literals for string interpolation and multi-line strings.
// Apply destructuring to extract values from arrays and objects.
// Utilize spread and rest operators for array manipulation and function arguments.
// Define functions with default parameters.
// Create objects using enhanced object literals, including methods and computed property names.