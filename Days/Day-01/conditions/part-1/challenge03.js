let prompt = require("prompt-sync")();

let note = prompt("Écrivez son résultat : ");

if (note >= 10) {
  console.log("Admis");
} else if (note < 10) {
  console.log("Non admis");
} else {
  console.log("error");
}
