let prompt = require("prompt-sync")();

console.log("1 → Bus");
console.log("2 → Train");
console.log("3 → Tramway");
console.log("4 → Taxi");
console.log("5 → Vélo");

let Choix = +prompt("Choisit une option : ");

switch (Choix) {
  case 1:
    console.log("Transport : Bus");
    console.log("Prix : 5 DH");
    break;

  case 2:
    console.log("Transport : Train");
    console.log("Prix : 20 DH");
    break;

  case 3:
    console.log("Transport : Tramway");
    console.log("Prix : 6 DH");
    break;

  case 4:
    console.log("Transport : Taxi");
    console.log("Prix : 15 DH");
    break;

  case 5:
    console.log("Transport : Vélo");
    console.log("Prix : 10 DH");
    break;

  default:
    console.log("Transport invalide.");
}
