const prompt = require("prompt-sync")();

let account = {
  owner: "Tayeb",
  balance: 5000,
  type: "saving",
};
let choix;
menu();
function menu() {
  console.log("=========================================================");
  console.log("1. Afficher le solde.");
  console.log("2. Deposer de l'argent.");
  console.log("3. Retirer de l'argent.");
  console.log("4. Verifier si le solde est suffisant.");
  console.log("5. Afficher les informations du compte.");
  console.log("0. Quitter.");
  choix = +prompt("Choisir une option : ");
}

while (choix !== 0) {
  if (choix < 0 || choix > 5) {
    console.log("Error");
  }

  function affichersolde(account) {
    console.log("Solde actuel : " + account.balance + " DH");
  }

  if (choix === 1) {
    affichersolde(account);
  }

  function addsolde(account) {
    console.log("Solde actuel : " + account.balance + " DH");
    let add = +prompt("Deposer de l'argent : ");
    account.balance += add;
    console.log("Solde actuel : " + account.balance + " DH");
  }

  if (choix === 2) {
    addsolde(account);
  }

  function rmvsolde(account) {
    console.log("Solde actuel : " + account.balance + " DH");
    let rmv = +prompt("Retirer de l'argent : ");
    account.balance -= rmv;
    console.log("Solde actuel : " + account.balance + " DH");
  }

  if (choix === 3) {
    rmvsolde(account);
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
  }

  function affichertout(account) {
    console.log("Owner: " + account.owner);
    console.log("Solde actuel : " + account.balance + " DH");
    console.log("Type: " + account.type);
  }

  if (choix === 5) {
    affichertout(account);
  }

  menu();
}
