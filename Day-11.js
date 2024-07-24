// Day 11: Promises and Async/Await
// Tasks/Activities:

// Activity 1: Understanding Promises
// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
const promise1 = new Promise((resolve) => {
  setTimeout(() => {
      resolve("Promise resolved after 2 seconds");
  }, 2000);
});

promise1.then((message) => {
  console.log(message);
});

// Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().
const promise2 = new Promise((_, reject) => {
  setTimeout(() => {
      reject("Promise rejected after 2 seconds");
  }, 2000);
});

promise2.catch((error) => {
  console.error(error);
});


// Activity 2: Chaining Promises
// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
const fetchData1 = new Promise((resolve) => {
  setTimeout(() => {
      resolve("Data fetched from server 1");
  }, 1000);
});

const fetchData2 = new Promise((resolve) => {
  setTimeout(() => {
      resolve("Data fetched from server 2");
  }, 2000);
});

fetchData1
  .then((message1) => {
      console.log(message1);
      return fetchData2;
  })
  .then((message2) => {
      console.log(message2);
  });


// Activity 3: Using Async/Await
// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
const promise3 = new Promise((resolve) => {
  setTimeout(() => {
      resolve("Promise resolved with async/await");
  }, 2000);
});

async function asyncFunction1() {
  const result = await promise3;
  console.log(result);
}

asyncFunction1();


// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
const promise4 = new Promise((_, reject) => {
  setTimeout(() => {
      reject("Promise rejected with async/await");
  }, 2000);
});

async function asyncFunction2() {
  try {
      const result = await promise4;
      console.log(result);
  } catch (error) {
      console.error(error);
  }
}

asyncFunction2();

// Activity 4: Fetching Data from an API
// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error("Error:", error);
    });


// Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
async function fetchData() {
  try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      const data = await response.json();
      console.log(data);
  } catch (error) {
      console.error("Error:", error);
  }
}

fetchData();

// Activity 5: Concurrent Promises
// Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.
const promiseA = new Promise((resolve) => {
  setTimeout(() => {
      resolve("Promise A resolved");
  }, 1000);
});

const promiseB = new Promise((resolve) => {
  setTimeout(() => {
      resolve("Promise B resolved");
  }, 2000);
});

const promiseC = new Promise((resolve) => {
  setTimeout(() => {
      resolve("Promise C resolved");
  }, 3000);
});

Promise.all([promiseA, promiseB, promiseC])
  .then((values) => {
      console.log(values);
  })
  .catch((error) => {
      console.error(error);
  });

// Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.
const promiseX = new Promise((resolve) => {
  setTimeout(() => {
      resolve("Promise X resolved");
  }, 1000);
});

const promiseY = new Promise((resolve) => {
  setTimeout(() => {
      resolve("Promise Y resolved");
  }, 2000);
});

const promiseZ = new Promise((resolve) => {
  setTimeout(() => {
      resolve("Promise Z resolved");
  }, 3000);
});

Promise.race([promiseX, promiseY, promiseZ])
  .then((value) => {
      console.log(value);
  })
  .catch((error) => {
      console.error(error);
  });

// Feature Request:
// Promise Creation Script: Write a script that demonstrates creating and handling promises, including both resolved and rejected states.
// Promise Chaining Script: Create a script that chains multiple promises and logs messages in a specific sequence.
// Async/Await Script: Write a script that uses async/await to handle promises and includes error handling with try-catch.
// API Fetch Script: Create a script that fetches data from a public API using both promises and async/await, and logs the response data.
// Concurrent Promises Script: Write a script that uses Promise.all and Promise.race to handle multiple promises concurrently and logs the results.

// Achievement:
// By the end of these activities, students will:
// Understand and create promises, including handling resolved and rejected states.
// Chain multiple promises to perform sequential asynchronous operations.
// Use async/await to handle asynchronous code more readably.
// Fetch data from public APIs using both promises and async/await.
// Manage multiple concurrent promises using Promise.all and Promise.race.