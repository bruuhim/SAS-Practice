let prompt = require("prompt-sync")();

let choix = +prompt("Saisie : ");

while (choix) {
  if (choix !== 0) {
    let choix = +prompt("Saisie : ");
  } else if (choix == 0) {
    console.log("Nombre de valeurs : 3");
  }
}
console.log("x");
