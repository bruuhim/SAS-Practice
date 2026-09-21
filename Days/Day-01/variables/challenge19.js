let prompt = require("prompt-sync")();

let prix = prompt("Prix initial : ");
let pourcentage = prompt("Pourcentage de reduction : ");

let reduction = prix * pourcentage / 100;
let prixFinal = prix - reduction;

console.log("Prix : " + prix + " DH");
console.log("Reduction : " + pourcentage + "%");
console.log("Montant de la reduction : " + reduction + " DH");
console.log("Prix final : " + prixFinal + " DH");

