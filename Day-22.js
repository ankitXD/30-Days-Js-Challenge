// Day 22: LeetCode Medium
// Tasks/Activities:

// Activity 1: Add Two Numbers
// Task 1: Solve the "Add Two Numbers" problem on LeetCode.
// Write a function that takes two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each node contains a single digit. Add the two numbers and return the sum as a linked list.
// Create a few test cases with linked lists and log the sum as a linked list.
class ListNode {
  constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
  }
}

function addTwoNumbers(l1, l2) {
  let dummy = new ListNode();
  let p = l1, q = l2, current = dummy;
  let carry = 0;

  while (p !== null || q !== null) {
      let x = (p !== null) ? p.val : 0;
      let y = (q !== null) ? q.val : 0;
      let sum = carry + x + y;
      carry = Math.floor(sum / 10);
      current.next = new ListNode(sum % 10);
      current = current.next;
      if (p !== null) p = p.next;
      if (q !== null) q = q.next;
  }

  if (carry > 0) {
      current.next = new ListNode(carry);
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
const l1 = createLinkedList([2, 4, 3]);
const l2 = createLinkedList([5, 6, 4]);
const sumList = addTwoNumbers(l1, l2);
displayLinkedList(sumList); // Output: 7 -> 0 -> 8

const l3 = createLinkedList([0]);
const l4 = createLinkedList([0]);
const sumList2 = addTwoNumbers(l3, l4);
displayLinkedList(sumList2); // Output: 0

const l5 = createLinkedList([9, 9, 9, 9, 9, 9, 9]);
const l6 = createLinkedList([9, 9, 9, 9]);
const sumList3 = addTwoNumbers(l5, l6);
displayLinkedList(sumList3); // Output: 8 -> 9 -> 9 -> 9 -> 0 -> 0 -> 0 -> 1

// Activity 2: Longest Substring Without Repeating Characters
// Task 2: Solve the "Longest Substring Without Repeating Characters" problem on LeetCode.
// Write a function that takes a string and returns the length of the longest substring without repeating characters.
// Log the length for a few test cases, including edge cases.
function lengthOfLongestSubstring(s) {
  let set = new Set();
  let maxLen = 0, i = 0, j = 0;

  while (i < s.length && j < s.length) {
      if (!set.has(s[j])) {
          set.add(s[j++]);
          maxLen = Math.max(maxLen, j - i);
      } else {
          set.delete(s[i++]);
      }
  }

  return maxLen;
}

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1
console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3
console.log(lengthOfLongestSubstring("")); // Output: 0
console.log(lengthOfLongestSubstring("au")); // Output: 2

// Activity 3: Container With Most Water
// Task 3: Solve the "Container With Most Water" problem on LeetCode.
// Write a function that takes an array of non-negative integers where each integer represents the height of a line drawn at each point. Find two lines that together with the x-axis form a container, such that the container holds the most water.
// Log the maximum amount of water for a few test cases.
function maxArea(height) {
  let max = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
      let width = right - left;
      let minHeight = Math.min(height[left], height[right]);
      max = Math.max(max, width * minHeight);

      if (height[left] < height[right]) {
          left++;
      } else {
          right--;
      }
  }

  return max;
}

// Test cases
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Output: 49
console.log(maxArea([1,1])); // Output: 1
console.log(maxArea([4,3,2,1,4])); // Output: 16
console.log(maxArea([1,2,1])); // Output: 2

// Activity 4: 3Sum
// Task 4: Solve the "3Sum" problem on LeetCode.
// Write a function that takes an array of integers and finds all unique triplets in the array which give the sum of zero.
// Log the triplets for a few test cases, including edge cases.
function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) continue;
      let left = i + 1;
      let right = nums.length - 1;

      while (left < right) {
          const sum = nums[i] + nums[left] + nums[right];
          if (sum === 0) {
              result.push([nums[i], nums[left], nums[right]]);
              while (left < right && nums[left] === nums[left + 1]) left++;
              while (left < right && nums[right] === nums[right - 1]) right--;
              left++;
              right--;
          } else if (sum < 0) {
              left++;
          } else {
              right--;
          }
      }
  }

  return result;
}

// Test cases
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // Output: [[-1, -1, 2], [-1, 0, 1]]
console.log(threeSum([])); // Output: []
console.log(threeSum([0])); // Output: []
console.log(threeSum([0, 0, 0, 0])); // Output: [[0, 0, 0]]
console.log(threeSum([-2, 0, 1, 1, 2])); // Output: [[-2, 0, 2], [-2, 1, 1]]

// Activity 5: Group Anagrams
// Task 5: Solve the "Group Anagrams" problem on LeetCode.
// Write a function that takes an array of strings and groups anagrams together.
// Log the grouped anagrams for a few test cases.
function groupAnagrams(strs) {
  const map = new Map();

  for (let str of strs) {
      const sorted = str.split('').sort().join('');
      if (!map.has(sorted)) {
          map.set(sorted, []);
      }
      map.get(sorted).push(str);
  }

  return Array.from(map.values());
}

// Test cases
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); // Output: [["eat","tea","ate"],["tan","nat"],["bat"]]
console.log(groupAnagrams([""])); // Output: [[""]]
console.log(groupAnagrams(["a"])); // Output: [["a"]]
console.log(groupAnagrams(["ab", "ba", "abc", "bca", "cab"])); // Output: [["ab", "ba"], ["abc", "bca", "cab"]]

// Feature Request:
// Add Two Numbers Script: Write a script that includes a function to solve the "Add Two Numbers" problem and logs the sum as a linked list.
// Longest Substring Script: Create a script that includes a function to find the longest substring without repeating characters and logs the length.
// Container With Most Water Script: Write a script that includes a function to find the container with the most water and logs the maximum amount of water.
// 3Sum Script: Create a script that includes a function to find all unique triplets in an array that sum to zero and logs the triplets.
// Group Anagrams Script: Write a script that includes a function to group anagrams and logs the grouped anagrams.

// Achievement:
// By the end of these activities, students will:
// Solve common medium-level LeetCode problems.
// Apply advanced problem-solving skills to implement algorithms.
// Understand and handle edge cases in more complex algorithmic solutions.
// Gain confidence in solving medium-level coding challenges on LeetCode.