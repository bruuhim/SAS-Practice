let prompt = require("prompt-sync")();

let Premier = +prompt("Un premier nombre : ");
let Opérateur = +prompt("Un opérateur (+, -, *, /) : ");
let Deuxième = +prompt("Un deuxième nombre : ");

switch (Opérateur) {
  case "+":
    console.log("Résultat : " + (Premier + Deuxième));
    break;

  case "-":
    console.log("Résultat : " + (Premier - Deuxième));
    break;

  default:
    console.log("Opérateur invalide.");
}
