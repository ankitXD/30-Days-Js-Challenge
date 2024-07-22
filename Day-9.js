// Day 9: DOM Manipulation
// Tasks/Activities:

// Activity 1: Selecting and Manipulating Elements
// Task 1: Select an HTML element by its ID and change its text content.
document.getElementById("myParagraph").textContent = "Updated Text";

// Task 2: Select an HTML element by its class and change its background color.
document.querySelector(".myDiv").style.backgroundColor = "lightblue";

// Activity 2: Creating and Appending Elements
// Task 3: Create a new div element with some text content and append it to the body.
let newDiv = document.createElement("div");
        newDiv.textContent = "Hello, I'm a new div!";
        document.body.appendChild(newDiv);

// Task 4: Create a new li element and add it to an existing ul list.
let newLi = document.createElement("li");
newLi.textContent = "Item 3";
document.getElementById("myList").appendChild(newLi);

// Activity 3: Removing Elements
// Task 5: Select an HTML element and remove it from the DOM.
let element = document.getElementById("removeThisDiv");
element.parentNode.removeChild(element);

// Task 6: Remove the last child of a specific HTML element.
let list = document.getElementById("myList");
        list.removeChild(list.lastElementChild);

// Activity 4: Modifying Attributes and Classes
// Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).
document.getElementById("myImage").src = "new_image.jpg";

// Task 8: Add and remove a CSS class to/from an HTML element.
let myDiv = document.getElementById("myDiv");
        myDiv.classList.add("highlight");
        setTimeout(() => {
            myDiv.classList.remove("highlight");
        }, 2000);

// Activity 5: Event Handling
// Task 9: Add a click event listener to a button that changes the text content of a paragraph.
document.getElementById("myButton").addEventListener("click", () => {
  document.getElementById("myParagraph").textContent = "Text changed!";
});

// Task 10: Add a mouseover event listener to an element that changes its border color.
document.getElementById("myDiv").addEventListener("mouseover", () => {
  document.getElementById("myDiv").style.borderColor = "red";
});

// Feature Request:
// Text Content Manipulation Script: Write a script that selects an HTML element by its ID and changes its text content.
// Element Creation Script: Create a script that demonstrates creating a new div element and appending it to the body.
// Element Removal Script: Write a script that selects an HTML element and removes it from the DOM.
// Attribute Modification Script: Create a script that changes the attributes of an HTML element.
// Event Handling Script: Write a script that adds event listeners to HTML elements to change their content or style based on user interactions.

// Achievement:
// By the end of these activities, students will:
// Select and manipulate DOM elements using JavaScript.
// Create and append new elements to the DOM.
// Remove elements from the DOM.
// Modify attributes and classes of HTML elements.
// Add and handle events to make web pages interactive.