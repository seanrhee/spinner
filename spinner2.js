const spinner = "|/-\\|/-\\";

let delay = 100;
let spinnerTime = 5000 // edit value to lengthen/shorten spinner

while (delay < spinnerTime) {
  for (const char of spinner) {
    setTimeout(() => {
      process.stdout.write("\r"+char)
    }, delay)
  
    delay += 200;
  }
}

console.log("\n");