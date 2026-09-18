let prompt = require("prompt-sync")();

let n = prompt("Départ : ");

while (n >= 0) {
  console.log(n);
  n--;
}
console.log("Décollage !");
