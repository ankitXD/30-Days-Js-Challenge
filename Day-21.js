// Day 21: LeetCode Easy
// Tasks/Activities:

// Activity 1: Two Sum
// Task 1: Solve the "Two Sum" problem on LeetCode.
// Write a function that takes an array of numbers and a target number, and returns the indices of the two numbers that add up to the target.
// Log the indices for a few test cases.
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (map.has(complement)) {
          return [map.get(complement), i];
      }
      map.set(nums[i], i);
  }
  return [];
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Output: [1, 2]
console.log(twoSum([3, 3], 6)); // Output: [0, 1]

// Activity 2: Reverse Integer
// Task 2: Solve the "Reverse Integer" problem on LeetCode.
// Write a function that takes an integer and returns it with its digits reversed.
// Handle edge cases like negative numbers and numbers ending in zero.
// Log the reversed integers for a few test cases.
function reverseInteger(x) {
  const sign = Math.sign(x);
  const reversed = parseInt(Math.abs(x).toString().split('').reverse().join(''), 10);
  if (reversed > 2**31 - 1) {
      return 0;
  }
  return reversed * sign;
}

// Test cases
console.log(reverseInteger(123)); // Output: 321
console.log(reverseInteger(-123)); // Output: -321
console.log(reverseInteger(120)); // Output: 21
console.log(reverseInteger(0)); // Output: 0

// Activity 3: Palindrome Number
// Task 3: Solve the "Palindrome Number" problem on LeetCode.
// Write a function that takes an integer and returns true if it is a palindrome, and false otherwise.
// Log the result for a few test cases, including edge cases like negative numbers.
function isPalindrome(x) {
  if (x < 0) return false;
  const str = x.toString();
  return str === str.split('').reverse().join('');
}

// Test cases
console.log(isPalindrome(121)); // Output: true
console.log(isPalindrome(-121)); // Output: false
console.log(isPalindrome(10)); // Output: false
console.log(isPalindrome(0)); // Output: true

// Activity 4: Merge Two Sorted Lists
// Task 4: Solve the "Merge Two Sorted Lists" problem on LeetCode.
// Write a function that takes two sorted linked lists and returns a new sorted list by merging them.
// Create a few test cases with linked lists and log the merged list.
class ListNode {
  constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
  }
}

function mergeTwoLists(l1, l2) {
  const dummy = new ListNode();
  let current = dummy;

  while (l1 !== null && l2 !== null) {
      if (l1.val < l2.val) {
          current.next = l1;
          l1 = l1.next;
      } else {
          current.next = l2;
          l2 = l2.next;
      }
      current = current.next;
  }

  if (l1 !== null) {
      current.next = l1;
  } else {
      current.next = l2;
  }

  return dummy.next;
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
      current.next = new ListNode(arr[i]);
      current = current.next;
  }
  return head;
}

// Helper function to display linked list
function displayLinkedList(list) {
  const values = [];
  while (list) {
      values.push(list.val);
      list = list.next;
  }
  console.log(values.join(' -> '));
}

// Test cases
const l1 = createLinkedList([1, 2, 4]);
const l2 = createLinkedList([1, 3, 4]);
const mergedList = mergeTwoLists(l1, l2);
displayLinkedList(mergedList); // Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4

// Activity 5: Valid Parentheses
// Task 5: Solve the "Valid Parentheses" problem on LeetCode.
// Write a function that takes a string containing just the characters '(', ')', '{', '}', '[' and ']', and determines if the input string is valid.
// A string is valid if open brackets are closed in the correct order.
// Log the result for a few test cases.
function isValid(s) {
  const stack = [];
  const map = {
      ')': '(',
      '}': '{',
      ']': '['
  };

  for (let char of s) {
      if (char in map) {
          const topElement = stack.length === 0 ? '#' : stack.pop();
          if (topElement !== map[char]) {
              return false;
          }
      } else {
          stack.push(char);
      }
  }

  return stack.length === 0;
}

// Test cases
console.log(isValid("()")); // Output: true
console.log(isValid("()[]{}")); // Output: true
console.log(isValid("(]")); // Output: false
console.log(isValid("([)]")); // Output: false
console.log(isValid("{[]}")); // Output: true

// Feature Request:
// Two Sum Script: Write a script that includes a function to solve the "Two Sum" problem and logs the indices of the two numbers.
// Reverse Integer Script: Create a script that includes a function to reverse an integer and handles edge cases.
// Palindrome Number Script: Write a script that includes a function to check if an integer is a palindrome and logs the result.
// Merge Two Sorted Lists Script: Create a script that includes a function to merge two sorted linked lists and logs the merged list.
// Valid Parentheses Script: Write a script that includes a function to check if a string of parentheses is valid and logs the result.

// Achievement:
// By the end of these activities, students will:
// Solve common LeetCode problems.
// Apply problem-solving skills to implement algorithms.
// Understand and handle edge cases in algorithmic solutions.
// Gain confidence in solving easy-level coding challenges on LeetCode.