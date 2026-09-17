let prompt = require("prompt-sync")();

let Tension = prompt("La tension U en volts : ");
let Intensité = prompt("L'intensité I en ampères : ");
let Temps = prompt("Le temps t en heures : ");

console.log("Tension : " + Tension + " V");
console.log("Intensité : " + Intensité + " A");
console.log("Temps : " + Temps + " heures");
console.log("Énergie : " + Tension * Intensité * Temps + " Wh");
