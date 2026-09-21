let prompt = require("prompt-sync")();

let note = prompt("Écrivez son résultat : ");

if (note < 0 || note > 20) {
  console.log("error");
} else if (note < 10) {
  console.log("Non admis");
} else if (note >= 10) {
  console.log("Admis");
}
