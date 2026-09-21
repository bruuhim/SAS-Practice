let prompt = require("prompt-sync")();
let tab = [1, 2, 3];
let add = +prompt("Add number : ");
let ntab = [];

for (let i = 0; i <= tab.length; i++) {
  if (i == tab.length) {
    ntab[i] = add;
  } else {
    ntab[i] = tab[i];
  }
}

console.log(ntab);