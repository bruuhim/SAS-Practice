let prompt = require("prompt-sync")();

let n = +prompt("Nombre : ");

for (i = 1; i <= 10; i++) {
  console.log(n + " x " + i + " = " + n * i);
}
