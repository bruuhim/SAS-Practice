let prompt = require("prompt-sync")();

let missions = prompt("Nombre de missions : ");
let i = 1;

while (i <= missions) {
  let n = i * 100;
  console.log("Mission " + i + " → Score : " + n);
  i++;
}
