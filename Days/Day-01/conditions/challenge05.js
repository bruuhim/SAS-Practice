let prompt = require("prompt-sync")();

let note = +prompt("Écrivez son résultat : ");

if (note < 10) {
  console.log("Mention : Échec");
} else if (note >= 10 && note <= 11.99) {
  console.log("Mention : Passable");
} else if (note >= 12 && note <= 13.99) {
  console.log("Mention : Assez bien");
} else if (note >= 14 && note <= 15.99) {
  console.log("Mention : Bien");
} else if (note >= 16 && note <= 17.99) {
  console.log("Mention : Très bien");
} else if (note >= 18 && note <= 20) {
  console.log("Mention : Excellent");
} else {
  console.log("error");
}
