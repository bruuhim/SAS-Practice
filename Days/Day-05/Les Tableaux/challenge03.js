let tab = [120, 45, 7, 89, 100];
let max = tab[0];

for (let i = 0; i < tab.length; i++) {
  if (tab[i] > max) {
    max = tab[i];
  }
}
console.log("Maximum : " + max);
