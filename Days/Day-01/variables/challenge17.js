let prompt = require("prompt-sync")();

let ennemis = prompt("Nombre d'ennemis éliminés : ");
let missions = prompt("Nombre de missions terminées : ");
let boss = prompt("Nombre de boss vaincus : ");

let score = ennemis * 100 + missions * 50 + boss * 200;

console.log("Ennemis : " + ennemis);
console.log("Missions : " + missions);
console.log("Boss : " + boss);

console.log("Score total : " + score);
