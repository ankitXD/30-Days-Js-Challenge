// Day 10: Event Handling
// Tasks/Activities:

// Activity 1: Basic Event Handling
// Task 1: Add a click event listener to a button that changes the text content of a paragraph.
document.getElementById("myButton").addEventListener("click", () => {
  document.getElementById("myParagraph").textContent = "Text changed!";
});

// Task 2: Add a double-click event listener to an image that toggles its visibility.
document.getElementById("myImage").addEventListener("dblclick", () => {
  const img = document.getElementById("myImage");
  img.style.display = img.style.display === "none" ? "block" : "none";
});

// Activity 2: Mouse Events
// Task 3: Add a mouseover event listener to an element that changes its background color.
document.getElementById("myDiv").addEventListener("mouseover", () => {
  document.getElementById("myDiv").style.backgroundColor = "lightblue";
});

// Task 4: Add a mouseout event listener to an element that resets its background color.
document.getElementById("myDiv").addEventListener("mouseout", () => {
  document.getElementById("myDiv").style.backgroundColor = "lightgrey";
});

// Activity 3: Keyboard Events
// Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.
document.getElementById("myInput").addEventListener("keydown", (event) => {
  console.log(`Key pressed: ${event.key}`);
});

// Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.
document.getElementById("myInput").addEventListener("keyup", () => {
  document.getElementById("myParagraph").textContent = `Current value: ${document.getElementById("myInput").value}`;
});

// Activity 4: Form Events
// Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
document.getElementById("myForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = {};
  formData.forEach((value, key) => {
      data[key] = value;
  });
  console.log(data);
});

// Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.
document.getElementById("mySelect").addEventListener("change", () => {
  const selectedValue = document.getElementById("mySelect").value;
  document.getElementById("selectedValue").textContent = `Selected value: ${selectedValue}`;
});

// Activity 5: Event Delegation
// Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
document.getElementById("myList").addEventListener("click", (event) => {
  if (event.target.tagName === 'LI') {
      console.log(event.target.textContent);
  }
});

// Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.
document.getElementById("addButton").addEventListener("click", () => {
  const newItem = document.createElement("li");
  newItem.textContent = `Item ${document.getElementById("dynamicList").childElementCount + 1}`;
  document.getElementById("dynamicList").appendChild(newItem);
});

document.getElementById("parentDiv").addEventListener("click", (event) => {
  if (event.target.tagName === 'LI') {
      console.log(event.target.textContent);
  }
});

// Feature Request:
// Click Event Script: Write a script that adds a click event listener to a button to change the text content of a paragraph.
// Mouse Events Script: Create a script that handles mouseover and mouseout events to change the background color of an element.
// Keyboard Events Script: Write a script that logs key presses and displays input field values using keydown and keyup event listeners.
// Form Events Script: Create a script that handles form submission and change events on a select dropdown.
// Event Delegation Script: Write a script that demonstrates event delegation by handling events on dynamically added child elements.

// Achievement:
// By the end of these activities, students will:
// Add and handle basic events like click, double-click, mouseover, mouseout, keydown, and keyup.
// Understand and handle form events.
// Implement event delegation to manage events on dynamically added elements.
// Make web pages interactive by responding to various user actions.