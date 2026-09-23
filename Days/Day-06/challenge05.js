const prompt = require("prompt-sync")();

let account = {
  owner: "Tayeb",
  balance: 5000,
  type: "saving",
};
let choix;
menu();
function menu() {
  console.log("1. Afficher le solde.");
  console.log("2. Déposer de l'argent.");
  console.log("3. Retirer de l'argent.");
  console.log("4. Vérifier si le solde est suffisant.");
  console.log("5. Afficher les informations du compte.");
  choix = +prompt("Choisir une option : ");
}



if (choix <= 0 || choix > 5) {
  console.log("Error");
  menu();
}

function affichersolde(account) {
  console.log("Solde actuel : " + account.balance + " DH");
}

if (choix === 1) {
  affichersolde(account);
  menu();
}

function addsolde(account) {
  console.log("Solde actuel : " + account.balance + " DH");
  let add = +prompt("Déposer de l'argent : ");
   account.balance += add
   console.log("Solde actuel : " + account.balance + " DH");
}

if (choix === 2) {
  addsolde(account);
  menu();
}

function rmvsolde(account) {
  console.log("Solde actuel : " + account.balance + " DH");
  let rmv = +prompt("Retirer de l'argent : ");
  console.log("Solde actuel : " + (account.balance - rmv) + " DH");
}

if (choix === 3) {
  rmvsolde(account);
  menu();
}

function checksolde(account) {
  if (account.balance > 0) {
    console.log("Le solde est suffisant.");
  } else {
    console.log("Le solde est insuffisant.");
  }
}

if (choix === 4) {
  checksolde(account);
  menu();
}

function affichertout(account) {
  console.log("Owner: " + account.owner);
  console.log("Solde actuel : " + account.balance + " DH");
  console.log("Type: " + account.type);
}

if (choix === 5) {
  affichertout(account);
  menu();
}
