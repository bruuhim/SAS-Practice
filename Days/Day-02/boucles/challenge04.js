let prompt = require("prompt-sync")();

let n = +prompt("Nombre : ");

for (let i = 1; i <= 10; i++) {
  console.log(n + " x " + i + " = " + n * i);
}
