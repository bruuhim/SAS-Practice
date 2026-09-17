let prompt = require("prompt-sync")();

let gb = prompt("Possède une capacité exprimée en Gigaoctets: ");
let mb = gb * 1024;

console.log("Stockage : " + gb);
console.log("Résultat : " + mb);
