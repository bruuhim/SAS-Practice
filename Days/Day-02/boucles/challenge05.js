let prompt = require("prompt-sync")();

let n = +prompt("N = ");
let x = +prompt("X = ");
let Somme = 0;

for (let i = 1; i * x <= n; i++) {
  console.log(i * x);
  Somme++;
}

console.log("Nombre total de multiples trouvés : " + Somme);
