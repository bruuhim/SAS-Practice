let prompt = require("prompt-sync")();

let Longueur = prompt("Fournit Longueur : ");
let Largeur = prompt("Fournit Largeur : ");
let Surface = Longueur * Largeur;
let Périmètre = 2 * (Longueur - 0 + (Largeur - 0));

console.log("Longueur : " + Longueur + " m");
console.log("Largeur : " + Largeur + " m");
console.log("Surface : " + Surface + " m²");
console.log("Périmètre : " + Périmètre + " m");
