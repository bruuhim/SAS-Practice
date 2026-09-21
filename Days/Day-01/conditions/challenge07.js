let prompt = require("prompt-sync")();

console.log("1 → Lundi");
console.log("2 → Mardi");
console.log("3 → Mercredi");
console.log("4 → Jeudi");
console.log("5 → Vendredi");
console.log("6 → Samedi");
console.log("7 → Dimanche");

let date = +prompt("Choisit une jour : ");

switch (date) {
  case 1:
    console.log("Jour : Lundi");
    break;

  case 2:
    console.log("Jour : Mardi");
    break;

  case 3:
    console.log("Jour : Mercredi");
    break;

  case 4:
    console.log("Jour : Jeudi");
    break;

  case 5:
    console.log("Jour : Vendredi");
    break;

  case 6:
    console.log("Jour : Samedi");
    break;

  case 7:
    console.log("Jour : Dimanche");
    break;

  default:
    console.log("Numéro invalide.");
}
