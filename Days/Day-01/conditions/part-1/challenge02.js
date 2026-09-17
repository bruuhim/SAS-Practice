let prompt = require("prompt-sync")();

let nombre = prompt("Entrer un nombre : ");

if (nombre > 0) {
  console.log("Le nombre est positif.");
} else if (nombre < 0) {
  console.log("Le nombre est négatif.");
} else if (nombre == 0) {
  console.log("Le nombre est égal à zéro.");
}
