// Day 23: LeetCode Hard
// Tasks/Activities:

// Activity 1: Median of Two Sorted Arrays
// Task 1: Solve the "Median of Two Sorted Arrays" problem on LeetCode.
// Write a function that takes two sorted arrays of integers and returns the median of the two sorted arrays.
// Log the median for a few test cases, including edge cases.
function findMedianSortedArrays(nums1, nums2) {
  const mergedArray = [];
  let i = 0, j = 0;

  while (i < nums1.length && j < nums2.length) {
      if (nums1[i] < nums2[j]) {
          mergedArray.push(nums1[i++]);
      } else {
          mergedArray.push(nums2[j++]);
      }
  }

  while (i < nums1.length) {
      mergedArray.push(nums1[i++]);
  }

  while (j < nums2.length) {
      mergedArray.push(nums2[j++]);
  }

  const mid = Math.floor(mergedArray.length / 2);
  if (mergedArray.length % 2 === 0) {
      return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
  } else {
      return mergedArray[mid];
  }
}

// Test cases
console.log(findMedianSortedArrays([1, 3], [2])); // Output: 2.0
console.log(findMedianSortedArrays([1, 2], [3, 4])); // Output: 2.5
console.log(findMedianSortedArrays([0, 0], [0, 0])); // Output: 0.0
console.log(findMedianSortedArrays([], [1])); // Output: 1.0
console.log(findMedianSortedArrays([2], [])); // Output: 2.0

// Activity 2: Merge k Sorted Lists
// Task 2: Solve the "Merge k Sorted Lists" problem on LeetCode.
// Write a function that takes an array of k linked lists, each linked list is sorted in ascending order, and merges all the linked lists into one sorted linked list.
// Create a few test cases with linked lists and log the merged list.
class ListNode {
  constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
  }
}

function mergeKLists(lists) {
  if (lists.length === 0) return null;

  const mergeTwoLists = (l1, l2) => {
      const dummy = new ListNode();
      let current = dummy;

      while (l1 && l2) {
          if (l1.val < l2.val) {
              current.next = l1;
              l1 = l1.next;
          } else {
              current.next = l2;
              l2 = l2.next;
          }
          current = current.next;
      }

      current.next = l1 || l2;
      return dummy.next;
  };

  while (lists.length > 1) {
      const mergedList = mergeTwoLists(lists.shift(), lists.shift());
      lists.push(mergedList);
  }

  return lists[0];
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
const l1 = createLinkedList([1, 4, 5]);
const l2 = createLinkedList([1, 3, 4]);
const l3 = createLinkedList([2, 6]);

const mergedList = mergeKLists([l1, l2, l3]);
displayLinkedList(mergedList); // Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4 -> 5 -> 6

// Activity 3: Trapping Rain Water
// Task 3: Solve the "Trapping Rain Water" problem on LeetCode.
// Write a function that takes an array of non-negative integers representing an elevation map where the width of each bar is 1, and computes how much water it can trap after raining.
// Log the amount of trapped water for a few test cases.
function trap(height) {
  let left = 0, right = height.length - 1;
  let leftMax = 0, rightMax = 0;
  let totalWater = 0;

  while (left < right) {
      if (height[left] < height[right]) {
          height[left] >= leftMax ? leftMax = height[left] : totalWater += (leftMax - height[left]);
          left++;
      } else {
          height[right] >= rightMax ? rightMax = height[right] : totalWater += (rightMax - height[right]);
          right--;
      }
  }

  return totalWater;
}

// Test cases
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // Output: 6
console.log(trap([4,2,0,3,2,5])); // Output: 9
console.log(trap([])); // Output: 0
console.log(trap([1,2,1])); // Output: 0
console.log(trap([3,0,1,2,5])); // Output: 6

// Activity 4: N-Queens
// Task 4: Solve the "N-Queens" problem on LeetCode.
// Write a function that places n queens on an n×n chessboard such that no two queens attack each other, and returns all distinct solutions to the n-queens puzzle.
// Log the distinct solutions for a few test cases.
function solveNQueens(n) {
  const res = [];
  const board = Array.from({ length: n }, () => '.'.repeat(n));
  const cols = new Set();
  const diag1 = new Set();
  const diag2 = new Set();

  const backtrack = (row) => {
      if (row === n) {
          res.push(board.map(r => r.join('')));
          return;
      }

      for (let col = 0; col < n; col++) {
          if (cols.has(col) || diag1.has(row - col) || diag2.has(row + col)) continue;

          cols.add(col);
          diag1.add(row - col);
          diag2.add(row + col);
          board[row][col] = 'Q';

          backtrack(row + 1);

          cols.delete(col);
          diag1.delete(row - col);
          diag2.delete(row + col);
          board[row][col] = '.';
      }
  };

  backtrack(0);
  return res;
}

// Test cases
console.log(solveNQueens(4)); // Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
console.log(solveNQueens(1)); // Output: [["Q"]]

// Activity 5: Word Ladder
// Task 5: Solve the "Word Ladder" problem on LeetCode.
// Write a function that takes a begin word, an end word, and a dictionary of words, and finds the length of the shortest transformation sequence from the begin word to the end word, such that only one letter can be changed at a time and each transformed word must exist in the word list.
// Log the length of the shortest transformation sequence for a few test cases.
function ladderLength(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;

  let queue = [[beginWord, 1]];

  while (queue.length) {
      let [word, length] = queue.shift();

      if (word === endWord) return length;

      for (let i = 0; i < word.length; i++) {
          for (let c = 97; c <= 122; c++) {
              let newWord = word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1);
              if (wordSet.has(newWord)) {
                  queue.push([newWord, length + 1]);
                  wordSet.delete(newWord);
              }
          }
      }
  }

  return 0;
}

// Test cases
console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"])); // Output: 5
console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log"])); // Output: 0
console.log(ladderLength("a", "c", ["a", "b", "c"])); // Output: 2
console.log(ladderLength("hit", "hit", ["hot","dot","dog","lot","log","cog"])); // Output: 1
console.log(ladderLength("hit", "hut", ["hut"])); // Output: 2

// Feature Request:
// Median of Two Sorted Arrays Script: Write a script that includes a function to find the median of two sorted arrays and logs the median.
// Merge k Sorted Lists Script: Create a script that includes a function to merge k sorted linked lists and logs the merged list.
// Trapping Rain Water Script: Write a script that includes a function to calculate the amount of trapped rainwater and logs the result.
// N-Queens Script: Create a script that includes a function to solve the N-Queens problem and logs the distinct solutions.
// Word Ladder Script: Write a script that includes a function to find the shortest transformation sequence in a word ladder and logs the sequence length.

// Achievement:
// By the end of these activities, students will:
// Solve complex LeetCode problems.
// Apply advanced problem-solving skills to implement efficient algorithms.
// Understand and handle edge cases in hard algorithmic solutions.
// Gain confidence in solving hard-level coding challenges on LeetCode.