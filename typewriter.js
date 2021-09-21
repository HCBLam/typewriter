
const sentence = "hello there from lighthouse labs";

let delay = 0;

// the for loop is synchronous, but the callback in setTimeout is delayed
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay += 50)
};

// this setTimout is synchronous, and the callback is delayed.
// Callback delayed to execute at same time as the last character in the for loop.
setTimeout(() => {
  process.stdout.write('\n');
}, delay)
