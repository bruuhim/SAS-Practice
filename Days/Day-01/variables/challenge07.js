let prompt = require("prompt-sync")();

let Contr = prompt("Fournit Contrôle continu note : ");
let Projet = prompt("Fournit Projet note : ");
let final = prompt("Fournit Examen final note : ");

console.log("Contrôle continu : " + Contr);
console.log("Projet : " + Projet);
console.log("Examen : " + final);
console.log("Note finale : " + (Contr * 2 + Projet * 3 + final * 5) / 10);
