let prompt = require("prompt-sync")();

let casier = prompt("Numero du casier : ");

if (casier % 2 === 0) {
  console.log("Casier cote A");
} else {
  console.log("Casier cote B");
}

