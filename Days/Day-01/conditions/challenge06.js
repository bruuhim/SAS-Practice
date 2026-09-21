let prompt = require("prompt-sync")();

console.log("1 → Afficher le profil");
console.log("2 → Afficher les paramètres");
console.log("3 → Afficher les notifications");
console.log("4 → Se déconnecter");

let menu = +prompt("Choisit une option : ");

switch (menu) {
  case 1:
    console.log("Ouverture de profil...");
    break;

  case 2:
    console.log("Ouverture des paramètres...");
    break;

  case 3:
    console.log("Ouverture des notifications...");
    break;

  case 4:
    console.log("Au revoir...");
    break;

  default:
    console.log("Choix invalide.");
}
