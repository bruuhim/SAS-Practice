let prompt = require("prompt-sync")();

let x1 = +prompt("x1: ");
let y1 = +prompt("y1: ");
let z1 = +prompt("z1: ");

let x2 = +prompt("x2: ");
let y2 = +prompt("y2: ");
let z2 = +prompt("z2: ");

let distance = ((x2 - x1) ** 2 + (y2 - y1) ** 2 + (z2 - z1) ** 2) ** 0.5;

console.log("Distance : " + distance);
