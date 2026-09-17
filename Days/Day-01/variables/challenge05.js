let prompt = require("prompt-sync")();

let film = prompt("Fournit la durée du film en minute : ");

console.log("Durée : " + film + " minutes");
if (film <= 60) {
  console.log("Catégorie : Court métrage");
} else if (film > 60 && film < 120) {
  console.log("Catégorie : Film standard");
} else if (film >= 120) {
  console.log("Catégorie : Film long");
} else {
  console.log("Error");
}
