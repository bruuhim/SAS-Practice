let prompt = require("prompt-sync")();

let mad = prompt("Possède un montant en dirham: ");
let euro = mad / 11;

console.log("Budget en MAD : " + mad);
console.log("Budget en EUR : " + euro);
