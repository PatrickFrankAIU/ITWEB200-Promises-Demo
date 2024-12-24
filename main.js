// All this does is return values, with "3. Operation succeeded!" returning out of sequence at the end
// It does not include any fetching or remote data retrieval
// Note: Promises are one big reason why modern websites are so much more responsive than early javascript designs!
// Please note the instruction on line 16. Swapping that value between "true" and "false" is the demo.

console.log("1. Starting the program...");

const myPromise = new Promise((resolve, reject) => { // these are functions, not variables!)
                   // We last saw "new" with the Module 5 Lab Assignment (XMLHttpRequest)
				   // Resolve and Reject handle what happens during the async operation
  console.log("2. Starting a long operation...");
  
  // The code below simulates a delay with setTimeout.
  // This is where you might make an API call to a remote server.
  setTimeout(() => {
    const success = true; // Run first as "true", which triggers Resolve. Change to "false" to trigger Reject.
    if (success) {
      resolve("3. Operation succeeded!"); 
    } else {
      reject("3. Operation failed!");
    }
  }, 4000); // 4 seconds delay (can be adjusted up or down; 1000 = 1 sec)
});

// Code continues to run while the promise is pending
console.log("4. Doing other work while waiting...");

// Handling the promise
// Tricky: This is a chained method collection, which is necessary to handle 
// both possible outcomes of the promise — resolution and rejection
myPromise
  .then((result) => {
    console.log(result); // Logs "3. Operation succeeded!" when resolved
  })
  .catch((error) => {
    console.error(error); // Logs "3. Operation failed!" when rejected
  });

// Demonstrate that the program is not waiting on the API call
console.log("5. Program continues to run...");
