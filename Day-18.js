// Day 18: Algorithms
// Tasks/Activities:

// Activity 1: Sorting Algorithms
// Task 1: Implement the bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1 - i; j++) {
          if (arr[j] > arr[j + 1]) {
              [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          }
      }
  }
  return arr;
}

// Testing bubbleSort
console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90])); // Output: [11, 12, 22, 25, 34, 64, 90]

// Task 2: Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
          if (arr[j] < arr[minIndex]) {
              minIndex = j;
          }
      }
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}

// Testing selectionSort
console.log(selectionSort([64, 34, 25, 12, 22, 11, 90])); // Output: [11, 12, 22, 25, 34, 64, 90]

// Task 3: Implement the quicksort algorithm to sort an array of numbers in ascending order. Log the sorted array.
function quickSort(arr) {
  if (arr.length <= 1) {
      return arr;
  }
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
          left.push(arr[i]);
      } else {
          right.push(arr[i]);
      }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Testing quickSort
console.log(quickSort([64, 34, 25, 12, 22, 11, 90])); // Output: [11, 12, 22, 25, 34, 64, 90]

// Activity 2: Searching Algorithms
// Task 4: Implement the linear search algorithm to find a target value in an array. Log the index of the target value.
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
          return i;
      }
  }
  return -1;
}

// Testing linearSearch
console.log(linearSearch([64, 34, 25, 12, 22, 11, 90], 22)); // Output: 4
console.log(linearSearch([64, 34, 25, 12, 22, 11, 90], 100)); // Output: -1

// Task 5: Implement the binary search algorithm to find a target value in a sorted array. Log the index of the target value.
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] === target) {
          return mid;
      } else if (arr[mid] < target) {
          left = mid + 1;
      } else {
          right = mid - 1;
      }
  }
  return -1;
}

// Testing binarySearch
console.log(binarySearch([11, 12, 22, 25, 34, 64, 90], 22)); // Output: 2
console.log(binarySearch([11, 12, 22, 25, 34, 64, 90], 100)); // Output: -1

// Activity 3: String Algorithms
// Task 6: Write a function to count the occurrences of each character in a string. Log the character counts.
function countCharacterOccurrences(str) {
  const counts = {};
  for (let char of str) {
      counts[char] = (counts[char] || 0) + 1;
  }
  return counts;
}

// Testing countCharacterOccurrences
console.log(countCharacterOccurrences("hello world")); 
// Output: { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }

// Task 7: Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.
function lengthOfLongestSubstring(s) {
  let seen = new Map();
  let start = 0;
  let maxLength = 0;
  for (let i = 0; i < s.length; i++) {
      if (seen.has(s[i])) {
          start = Math.max(seen.get(s[i]) + 1, start);
      }
      seen.set(s[i], i);
      maxLength = Math.max(maxLength, i - start + 1);
  }
  return maxLength;
}

// Testing lengthOfLongestSubstring
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3 (abc)
console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1 (b)
console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3 (wke)

// Activity 4: Array Algorithms
// Task 8: Write a function to rotate an array by k positions. Log the rotated array.
function rotateArray(arr, k) {
  k = k % arr.length;
  return arr.slice(-k).concat(arr.slice(0, -k));
}

// Testing rotateArray
console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3)); // Output: [5, 6, 7, 1, 2, 3, 4]
console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 10)); // Output: [5, 6, 7, 1, 2, 3, 4]

// Task 9: Write a function to merge two sorted arrays into one sorted array. Log the merged array.
function mergeSortedArrays(arr1, arr2) {
  let result = [];
  let i = 0, j = 0;
  while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
          result.push(arr1[i]);
          i++;
      } else {
          result.push(arr2[j]);
          j++;
      }
  }
  return result.concat(arr1.slice(i)).concat(arr2.slice(j));
}

// Testing mergeSortedArrays
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // Output: [1, 2, 3, 4, 5, 6]
console.log(mergeSortedArrays([1, 2, 3], [4, 5, 6])); // Output: [1, 2, 3, 4, 5, 6]

// Activity 5: Dynamic Programming (Optional)
// Task 10: Write a function to solve the Fibonacci sequence using dynamic programming. Log the Fibonacci numbers.
function fibonacci(n) {
  let dp = [0, 1];
  for (let i = 2; i <= n; i++) {
      dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}

// Testing fibonacci
console.log(fibonacci(10)); // Output: 55
console.log(fibonacci(20)); // Output: 6765

// Task 11: Write a function to solve the knapsack problem using dynamic programming. Log the maximum value that can be obtained.
function knapsack(values, weights, capacity) {
  let n = values.length;
  let dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));
  for (let i = 1; i <= n; i++) {
      for (let w = 1; w <= capacity; w++) {
          if (weights[i - 1] <= w) {
              dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weights[i - 1]] + values[i - 1]);
          } else {
              dp[i][w] = dp[i - 1][w];
          }
      }
  }
  return dp[n][capacity];
}

// Testing knapsack
const values = [60, 100, 120];
const weights = [10, 20, 30];
const capacity = 50;
console.log(knapsack(values, weights, capacity)); // Output: 220

// Feature Request:
// Sorting Algorithm Script: Write a script that implements bubble sort, selection sort, and quicksort algorithms to sort arrays.
// Searching Algorithm Script: Create a script that implements linear search and binary search algorithms to find values in arrays.
// String Algorithm Script: Write a script that counts character occurrences and finds the longest substring without repeating characters.
// Array Algorithm Script: Create a script that rotates arrays and merges sorted arrays.
// Dynamic Programming Script: Write a script that solves the Fibonacci sequence and knapsack problem using dynamic programming (optional).

// Achievement:
// By the end of these activities, students will:
// Implement and understand common sorting algorithms.
// Implement and understand common searching algorithms.
// Solve string manipulation problems using algorithms.
// Perform array operations using algorithms.
// Apply dynamic programming to solve complex problems (optional).