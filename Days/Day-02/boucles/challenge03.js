let prompt = require("prompt-sync")();

let n = +prompt("N = ");
let Somme = 0;

for (i = 1; i <= n; i++) {
  if (i <= n) {
    Somme = Somme + i;
  }
}

console.log("Somme = " + Somme);
