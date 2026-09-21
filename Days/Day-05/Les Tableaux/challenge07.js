let tab = [1, 2, 3, 4, 5, 6];
let ntab = [];

for (let i = 0; i < tab.length; i++) {
  if (tab[i] % 2 == 0) {
    ntab[ntab.length] = tab[i];
  }
}

console.log(ntab);
