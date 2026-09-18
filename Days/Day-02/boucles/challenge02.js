let prompt = require("prompt-sync")();

let n = prompt("N = ");

for (let i = 2; i <= n; i = i + 2) {
  console.log(i);
}
