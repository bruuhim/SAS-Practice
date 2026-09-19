let tab = [5, 10, 15];
let cost = 0;

for (i = 0; i < tab.length; i++) {
  cost = tab[i] + cost;
  i++;
}
console.log("Sum : " + cost);
