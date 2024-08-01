// Day 19: Regular Expressions
// Tasks/Activities:

// Activity 1: Basic Regular Expressions
// Task 1: Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "JavaScript" in a string). Log the matches.
let text = "JavaScript is awesome. I love JavaScript.";
let regex1 = /JavaScript/g;
let matches1 = text.match(regex1);
console.log(matches1); // Output: ["JavaScript", "JavaScript"]

// Task 2: Write a regular expression to match all digits in a string. Log the matches.
let text2 = "My phone number is 123-456-7890.";
let regex2 = /\d/g;
let matches2 = text2.match(regex2);
console.log(matches2); // Output: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

// Activity 2: Character Classes and Quantifiers
// Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.
let text3 = "JavaScript is Fun. Learning Regex is Useful.";
let regex3 = /\b[A-Z][a-z]*\b/g;
let matches3 = text3.match(regex3);
console.log(matches3); // Output: ["JavaScript", "Fun", "Learning", "Regex", "Useful"]

// Task 4: Write a regular expression to match all sequences of one or more digits in a string. Log the matches.
let text4 = "The event is on 24th July, 2024.";
let regex4 = /\d+/g;
let matches4 = text4.match(regex4);
console.log(matches4); // Output: ["24", "2024"]

// Activity 3: Grouping and Capturing
// Task 5: Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g., (123) 456-7890). Log the captures.
let phoneNumber = "(123) 456-7890";
let regex5 = /\((\d{3})\)\s(\d{3})-(\d{4})/;
let matches5 = phoneNumber.match(regex5);
console.log(matches5); // Output: ["(123) 456-7890", "123", "456", "7890"]

// Task 6: Write a regular expression to capture the username and domain from an email address. Log the captures.
let email = "example@example.com";
let regex6 = /(\w+)@(\w+\.\w+)/;
let matches6 = email.match(regex6);
console.log(matches6); // Output: ["example@example.com", "example", "example.com"]

// Activity 4: Assertions and Boundaries
// Task 7: Write a regular expression to match a word only if it is at the beginning of a string. Log the matches.
let text7 = "JavaScript is a programming language. JavaScript is widely used.";
let regex7 = /^\w+/;
let matches7 = text7.match(regex7);
console.log(matches7); // Output: ["JavaScript"]

// Task 8: Write a regular expression to match a word only if it is at the end of a string. Log the matches.
let text8 = "I am learning JavaScript.";
let regex8 = /\w+$/;
let matches8 = text8.match(regex8);
console.log(matches8); // Output: ["JavaScript"]

// Activity 5: Practical Applications
// Task 9: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character). Log whether the password is valid.
let password = "P@ssw0rd!";
let regex9 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
let isValidPassword = regex9.test(password);
console.log(isValidPassword); // Output: true

// Task 10: Write a regular expression to validate a URL. Log whether the URL is valid.
let url = "https://www.example.com";
let regex10 = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
let isValidURL = regex10.test(url);
console.log(isValidURL); // Output: true

// Feature Request:
// Basic Regex Script: Write a script that uses regular expressions to match simple patterns and log the matches.
// Character Classes and Quantifiers Script: Create a script that uses regular expressions to match words with specific characteristics and log the matches.
// Grouping and Capturing Script: Write a script that uses regular expressions to capture parts of a string, such as phone numbers and email addresses, and log the captures.
// Assertions and Boundaries Script: Create a script that uses regular expressions to match words at specific positions in a string and log the matches.
// Validation Script: Write a script that uses regular expressions to validate passwords and URLs and log whether they are valid.

// Achievement:
// By the end of these activities, students will:
// Understand and create basic regular expressions.
// Use character classes and quantifiers in regular expressions.
// Implement grouping and capturing in regular expressions.
// Apply assertions and boundaries in regular expressions.
// Use regular expressions for practical applications like validating passwords and URLs.