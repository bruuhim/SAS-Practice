let prompt = require("prompt-sync")();

let num = +prompt("Nombre : ");
let binary = "";

while (num > 0) {
  let remainder = num % 2;
  binary = remainder + binary;
  num = (num - remainder) / 2;
}

if (binary === "") binary = "0";

console.log("Binaire : " + binary);
