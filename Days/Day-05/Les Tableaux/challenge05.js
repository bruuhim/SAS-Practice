let prompt = require("prompt-sync")();

let tab = ["apple", "banana"];
let add = prompt("Search for a fruit : ");
let answer = false;

for (let i = 0; i < tab.length; i++) {
  if (add === tab[i]) {
    answer = true;
    break;
  }
}
console.log(answer);
