let prompt = require("prompt-sync")();

let prixbillet = prompt("Prix d'un billet : ");
let nombrebillets = prompt("Nombre de billets : ");
let prixboisson = prompt("Prix d'une boisson : ");
let nombreboissons = prompt("Nombre de boissons : ");

let totalbillets = prixbillet * nombrebillets;
let totalboissons = prixboisson * nombreboissons;
let total = totalbillets + totalboissons;

console.log("Prix billet : " + prixbillet + " DH");
console.log("Nombre de billets : " + nombrebillets);
console.log("Prix boisson : " + prixboisson + " DH");
console.log("Nombre de boissons : " + nombreboissons);

console.log("Total : " + total);
