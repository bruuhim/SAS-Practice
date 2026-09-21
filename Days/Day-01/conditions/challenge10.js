let prompt = require("prompt-sync")();

console.log("A → Électronique");
console.log("B → Vêtements");
console.log("C → Alimentation");
console.log("D → Maison");
console.log("E → Sport");

let Choix = prompt("Choisit une catégorie : ");

switch (Choix) {
  case "A":
    console.log("Catégorie : Électronique");
    console.log("Produit exemple : Smartphone");
    break;

  case "B":
    console.log("Catégorie : Vêtements");
    console.log("Produit exemple : T-shirt");
    break;

  case "C":
    console.log("Catégorie : Alimentation");
    console.log("Produit exemple : Pain");
    break;

  case "D":
    console.log("Catégorie : Maison");
    console.log("Produit exemple : Chaise");
    break;

  case "E":
    console.log("Catégorie : Sport");
    console.log("Produit exemple : Ballon");
    break;

  default:
    console.log("Catégorie inconnue.");
}
