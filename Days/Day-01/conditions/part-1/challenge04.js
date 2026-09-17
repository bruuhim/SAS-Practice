let prompt = require("prompt-sync")();

let montant = +prompt("Saisit le montant de sa commande : ");

if (montant >= 500) {
  console.log("Livraison gratuite");
  console.log("Total à payer : " + montant + " DH");
} else if (montant < 500) {
  console.log("Frais de livraison : 40 DH");
  console.log("Total à payer : " + (montant + 40) + " DH");
}
