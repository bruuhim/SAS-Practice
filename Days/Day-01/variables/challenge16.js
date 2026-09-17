let prompt = require("prompt-sync")();

let dureeSecondes = prompt("Durée exprimée en secondes : ");

let hours = dureeSecondes / 3600;
let minute = (dureeSecondes % 3600) / 60;
let secondes = (dureeSecondes % 3600) % 60;

console.log("Durée : " + dureeSecondes + " secondes");

console.log("Heures : " + hours);
console.log("Minutes : " + minute);
console.log("Secondes : " + secondes);
