let prompt = require("prompt-sync")();

let age = prompt("Quel âge as-tu : ");

if (age >= 18) {
  console.log("Accès autorisé");
} else {
  console.log("Accès refusé");
}
