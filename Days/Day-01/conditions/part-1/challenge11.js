let prompt = require("prompt-sync")();

console.log("1 → Pizza");
console.log("2 → Burger");
console.log("3 → Tacos");
console.log("4 → Salade");

let Choix = +prompt("Choisit une plat : ");
let Quantité = +prompt("Choisit la quantité : ");
let [x1, x2, x3, x4] = [60, 45, 40, 30];
let prix1 = x1 * Quantité;
let prix2 = x2 * Quantité;
let prix3 = x3 * Quantité;
let prix4 = x4 * Quantité;

switch (Choix) {
  case 1:
    console.log("Plat : Pizza");
    console.log("Prix unitaire : 60 DH");
    console.log("Sous-total : " + prix1 + " DH");
    if (prix1 >= 200) {
      console.log("Réduction : " + prix1 * 0.1 + " DH");
    } else if (prix1 < 200) {
      console.log("Réduction : Aucune réduction");
    }
    console.log("Total à payer : " + (prix1 - prix1 * 0.1) + " DH");
    break;

  case 2:
    console.log("Plat : Burger");
    console.log("Prix unitaire : 45 DH");
    console.log("Sous-total : " + prix2 + " DH");
    if (prix2 >= 200) {
      console.log("Réduction : " + prix2 * 0.1 + " DH");
    } else if (prix2 < 200) {
      console.log("Réduction : Aucune réduction");
    }
    console.log("Total à payer : " + (prix2 - prix2 * 0.1) + " DH");
    break;

  case 3:
    console.log("Plat : Tacos");
    console.log("Prix unitaire : 40 DH");
    console.log("Sous-total : " + prix3 + " DH");
    if (prix3 >= 200) {
      console.log("Réduction : " + prix3 * 0.1 + " DH");
    } else if (prix3 < 200) {
      console.log("Réduction : Aucune réduction");
    }
    console.log("Total à payer : " + (prix3 - prix3 * 0.1) + " DH");
    break;

  case 4:
    console.log("Plat : Salade");
    console.log("Prix unitaire : 30 DH");
    console.log("Sous-total : " + prix4 + " DH");
    if (prix4 >= 200) {
      console.log("Réduction : " + prix4 * 0.1 + " DH");
    } else if (prix4 < 200) {
      console.log("Réduction : Aucune réduction");
    }
    console.log("Total à payer : " + (prix4 - prix4 * 0.1) + " DH");
    break;

  default:
    console.log("Invalide.");
}
