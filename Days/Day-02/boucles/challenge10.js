let prompt = require("prompt-sync")();

let choix = +prompt("Saisie : ");
let compteur = 0;
let somme = 0;

while (choix !== 0) {
  compteur = compteur + 1;
  somme = somme + choix;
  choix = +prompt("Saisie : ");
}

console.log("Nombre de valeurs : " + compteur);
console.log("Somme : " + somme);
