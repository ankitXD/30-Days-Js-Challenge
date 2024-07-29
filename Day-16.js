// Day 16: Recursion
// Tasks/Activities:

// Activity 1: Basic Recursion
// Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.
function factorial(n) {
  if (n <= 1) {
      return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120
console.log(factorial(3)); // Output: 6
console.log(factorial(7)); // Output: 5040

// Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.
function fibonacci(n) {
  if (n <= 1) {
      return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(5)); // Output: 5
console.log(fibonacci(7)); // Output: 13
console.log(fibonacci(10)); // Output: 55

// Activity 2: Recursion with Arrays
// Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.
function sumArray(arr) {
  if (arr.length === 0) {
      return 0;
  }
  return arr[0] + sumArray(arr.slice(1));
}

console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
console.log(sumArray([10, 20, 30])); // Output: 60
console.log(sumArray([7, 14, 21])); // Output: 42

// Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.
function maxArray(arr) {
  if (arr.length === 1) {
      return arr[0];
  }
  return Math.max(arr[0], maxArray(arr.slice(1)));
}

console.log(maxArray([1, 2, 3, 4, 5])); // Output: 5
console.log(maxArray([10, 20, 30])); // Output: 30
console.log(maxArray([7, 14, 21])); // Output: 21

// Activity 3: String Manipulation with Recursion
// Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.
function reverseString(str) {
  if (str === "") {
      return "";
  }
  return reverseString(str.substring(1)) + str.charAt(0);
}

console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("recursion")); // Output: "noisrucer"
console.log(reverseString("JavaScript")); // Output: "tpircSavaJ"

// Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.
function isPalindrome(str) {
  if (str.length <= 1) {
      return true;
  }
  if (str.charAt(0) !== str.charAt(str.length - 1)) {
      return false;
  }
  return isPalindrome(str.substring(1, str.length - 1));
}

console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false
console.log(isPalindrome("madam")); // Output: true

// Activity 4: Recursive Search
// Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.
function binarySearch(arr, target, start = 0, end = arr.length - 1) {
  if (start > end) {
      return -1;
  }
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === target) {
      return mid;
  } else if (arr[mid] > target) {
      return binarySearch(arr, target, start, mid - 1);
  } else {
      return binarySearch(arr, target, mid + 1, end);
  }
}

console.log(binarySearch([1, 2, 3, 4, 5], 3)); // Output: 2
console.log(binarySearch([10, 20, 30, 40, 50], 40)); // Output: 3
console.log(binarySearch([7, 14, 21, 28, 35], 25)); // Output: -1

// Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.
function countOccurrences(arr, target) {
  if (arr.length === 0) {
      return 0;
  }
  let count = arr[0] === target ? 1 : 0;
  return count + countOccurrences(arr.slice(1), target);
}

console.log(countOccurrences([1, 2, 3, 4, 5, 3], 3)); // Output: 2
console.log(countOccurrences([10, 20, 30, 40, 30, 30], 30)); // Output: 3
console.log(countOccurrences([7, 14, 21, 28, 35], 25)); // Output: 0

// Activity 5: Tree Traversal (Optional)
// Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.
class TreeNode {
  constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
  }
}

function inOrderTraversal(node) {
  if (node === null) {
      return;
  }
  inOrderTraversal(node.left);
  console.log(node.value);
  inOrderTraversal(node.right);
}

const tree = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3));
inOrderTraversal(tree);
// Output: 4, 2, 5, 1, 3

// Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.
function calculateDepth(node) {
  if (node === null) {
      return 0;
  }
  return Math.max(calculateDepth(node.left), calculateDepth(node.right)) + 1;
}

const tree1 = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3));
const tree2 = new TreeNode(1, new TreeNode(2), null);

console.log(calculateDepth(tree1)); // Output: 3
console.log(calculateDepth(tree2)); // Output: 2

// Feature Request:
// Factorial and Fibonacci Script: Write a script that includes recursive functions to calculate the factorial and Fibonacci numbers.
// Array Recursion Script: Create a script that includes recursive functions to find the sum and maximum element of an array.
// String Recursion Script: Write a script that includes recursive functions to reverse a string and check if a string is a palindrome.
// Recursive Search Script: Create a script that includes recursive functions for binary search and counting occurrences in an array.
// Tree Traversal Script: Write a script that includes recursive functions for in-order traversal and depth calculation of a binary tree (optional).

// Achievement:
// By the end of these activities, students will:
// Understand and implement basic recursion.
// Apply recursion to solve problems with arrays and strings.
// Use recursion for searching and counting elements in arrays.
// Perform tree traversal and calculate tree depth using recursion (optional).