let prompt = require("prompt-sync")();

let Rayon = prompt("Le rayon du réservoir : ");
let Hauteur = prompt("La hauteur du réservoir : ");
let π = 3.14159;

console.log("Rayon : " + Rayon + " m");
console.log("Hauteur : " + Hauteur + " m");
console.log("Volume : " + π * Rayon ** 2 * Hauteur + " m³");
