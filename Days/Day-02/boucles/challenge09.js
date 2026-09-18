let prompt = require("prompt-sync")();

let base = +prompt("Base : ");
let exposant = +prompt("Exposant : ");
let n = 1;

while (exposant > 0) {
  n = base * n;
  exposant--;
}
console.log("Résultat : " + n);
