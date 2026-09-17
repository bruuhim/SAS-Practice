let prompt = require("prompt-sync")();

let score1 = prompt("Fournit 1er score: ");
let score2 = prompt("Fournit 2eme score: ");
let score3 = prompt("Fournit 3eme score: ");
let score4 = prompt("Fournit 4eme score: ");
let total = score1 - 0 + (score2 - 0) + (score3 - 0) + (score4 - 0);

console.log("Partie 1 : " + score1);
console.log("Partie 2 : " + score2);
console.log("Partie 3 : " + score3);
console.log("Partie 4 : " + score4);

console.log("Score total : " + total);
console.log("Moyenne : " + total / 4);
