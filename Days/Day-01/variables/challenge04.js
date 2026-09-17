let prompt = require("prompt-sync")();

let kilomètres = prompt("La distance parcourue en kilomètres: ");
let litres = prompt("La quantité de carburant consommée en litres: ");

console.log("Distance : " + kilomètres);
console.log("Carburant : " + litres);
console.log("Consommation : " + (litres / kilomètres) * 100);
