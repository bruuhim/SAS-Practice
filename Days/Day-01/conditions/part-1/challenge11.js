let prompt = require("prompt-sync")();

console.log("1 → Pizza");
console.log("2 → Burger");
console.log("3 → Tacos");
console.log("4 → Salade");

let Choix = +prompt("Choisit une plat : ");
let Quantité = +prompt("Choisit la quantité : ");
let prix = 

switch (Choix) {
  case 1:
    console.log("Plat : Pizza");
    console.log("Prix unitaire : 60 DH");
    break;

  case 2:
    console.log("Plat : Burger");
    console.log("Prix unitaire : 45 DH");
    break;

  case 3:
    console.log("Plat : Tacos");
    console.log("Prix unitaire : 40 DH");
    break;

  case 4:
    console.log("Plat : Salade");
    console.log("Prix unitaire : 30 DH");
    break;

  default:
    console.log("Invalide.");
}

if (Quantité) {
}
