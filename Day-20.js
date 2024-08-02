// Day 20: LocalStorage and SessionStorage
// Tasks/Activities:

// Activity 1: Understanding LocalStorage
// Task 1: Write a script to save a string value to localStorage and retrieve it. Log the retrieved value.
// Save a string value to localStorage
localStorage.setItem('myString', 'Hello, World!');

// Retrieve the string value from localStorage
let retrievedString = localStorage.getItem('myString');
console.log(retrievedString); // Output: Hello, World!

// Task 2: Write a script to save an object to localStorage by converting it to a JSON string. Retrieve and parse the object, then log it.
// Save an object to localStorage
let myObject = { name: 'John', age: 30 };
localStorage.setItem('myObject', JSON.stringify(myObject));

// Retrieve and parse the object from localStorage
let retrievedObject = JSON.parse(localStorage.getItem('myObject'));
console.log(retrievedObject); // Output: { name: 'John', age: 30 }

// Activity 2: Using LocalStorage
// Task 3: Create a simple form that saves user input (e.g., name and email) to localStorage when submitted. Retrieve and display the saved data on page load.

{/* <form id="userForm">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  <button type="submit">Save</button>
</form>
<div id="userData"></div> */}

document.getElementById('userForm').addEventListener('submit', function(e) {
  e.preventDefault();
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let userData = { name, email };
  localStorage.setItem('userData', JSON.stringify(userData));
  displayUserData();
});

function displayUserData() {
  let userData = JSON.parse(localStorage.getItem('userData'));
  if (userData) {
    document.getElementById('userData').textContent = `Name: ${userData.name}, Email: ${userData.email}`;
  }
}

// Display user data on page load
window.onload = displayUserData;

// Task 4: Write a script to remove an item from localStorage. Log the localStorage content before and after removal.
// Log localStorage content before removal
console.log('Before removal:', localStorage.getItem('myString'));

// Remove an item from localStorage
localStorage.removeItem('myString');

// Log localStorage content after removal
console.log('After removal:', localStorage.getItem('myString')); // Output: null

// Activity 3: Understanding SessionStorage
// Task 5: Write a script to save a string value to sessionStorage and retrieve it. Log the retrieved value.
// Save a string value to sessionStorage
sessionStorage.setItem('mySessionString', 'Hello, Session!');

// Retrieve the string value from sessionStorage
let retrievedSessionString = sessionStorage.getItem('mySessionString');
console.log(retrievedSessionString); // Output: Hello, Session!

// Task 6: Write a script to save an object to sessionStorage by converting it to a JSON string. Retrieve and parse the object, then log it.
// Save an object to sessionStorage
let mySessionObject = { name: 'Jane', age: 25 };
sessionStorage.setItem('mySessionObject', JSON.stringify(mySessionObject));

// Retrieve and parse the object from sessionStorage
let retrievedSessionObject = JSON.parse(sessionStorage.getItem('mySessionObject'));
console.log(retrievedSessionObject); // Output: { name: 'Jane', age: 25 }

// Activity 4: Using SessionStorage
// Task 7: Create a simple form that saves user input (e.g., name and email) to sessionStorage when submitted. Retrieve and display the saved data on page load.
{/* <form id="sessionUserForm">
  <label for="sessionName">Name:</label>
  <input type="text" id="sessionName" name="name" required>
  <label for="sessionEmail">Email:</label>
  <input type="email" id="sessionEmail" name="email" required>
  <button type="submit">Save</button>
</form>
<div id="sessionUserData"></div> */}

document.getElementById('sessionUserForm').addEventListener('submit', function(e) {
  e.preventDefault();
  let name = document.getElementById('sessionName').value;
  let email = document.getElementById('sessionEmail').value;
  let userData = { name, email };
  sessionStorage.setItem('sessionUserData', JSON.stringify(userData));
  displaySessionUserData();
});

function displaySessionUserData() {
  let userData = JSON.parse(sessionStorage.getItem('sessionUserData'));
  if (userData) {
    document.getElementById('sessionUserData').textContent = `Name: ${userData.name}, Email: ${userData.email}`;
  }
}

// Display user data on page load
window.onload = displaySessionUserData;

// Task 8: Write a script to remove an item from sessionStorage. Log the sessionStorage content before and after removal.
// Log sessionStorage content before removal
console.log('Before removal:', sessionStorage.getItem('mySessionString'));

// Remove an item from sessionStorage
sessionStorage.removeItem('mySessionString');

// Log sessionStorage content after removal
console.log('After removal:', sessionStorage.getItem('mySessionString')); // Output: null

// Activity 5: Comparing LocalStorage and SessionStorage
// Task 9: Write a function that accepts a key and a value, and saves the value to both localStorage and sessionStorage. Retrieve and log the values from both storage mechanisms.
function saveToBothStorages(key, value) {
  localStorage.setItem(key, value);
  sessionStorage.setItem(key, value);
  
  console.log('From localStorage:', localStorage.getItem(key));
  console.log('From sessionStorage:', sessionStorage.getItem(key));
}

saveToBothStorages('testKey', 'testValue');

// Task 10: Write a function that clears all data from both localStorage and sessionStorage. Verify that both storages are empty.
function clearBothStorages() {
  localStorage.clear();
  sessionStorage.clear();
  
  console.log('localStorage:', localStorage.length === 0 ? 'Empty' : 'Not Empty');
  console.log('sessionStorage:', sessionStorage.length === 0 ? 'Empty' : 'Not Empty');
}

clearBothStorages();

// Feature Request:
// LocalStorage Script: Write a script that saves, retrieves, and removes items from localStorage, and displays the saved data on page load.
// SessionStorage Script: Create a script that saves, retrieves, and removes items from sessionStorage, and displays the saved data on page load.
// Storage Comparison Script: Write a script that saves data to both localStorage and sessionStorage, retrieves the data, and compares the results.
// Clear Storage Script: Create a script that clears all data from both localStorage and sessionStorage, and verifies the operation.

// Achievement:
// By the end of these activities, students will:
// Understand how to use localStorage and sessionStorage for persistent and session-specific data storage.
// Save, retrieve, and remove data from both localStorage and sessionStorage.
// Implement form data storage using localStorage and sessionStorage.
// Compare and contrast the use cases for localStorage and sessionStorage.