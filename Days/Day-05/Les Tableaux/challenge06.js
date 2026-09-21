let tab = [1, 2, 3, 4];
let ntab = [];

for (i = 0; i < tab.length; i++) {
  ntab[i] = tab[tab.length - 1 - i];
}

console.log(ntab);
