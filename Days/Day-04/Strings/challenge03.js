function inverserChaine(chaine) {
  let cost = "";
  let i = 0;
  while (chaine[i] !== undefined) {
    cost = cost + chaine[chaine.length - 1 - i];
    i++;
  }
  return cost;
}
console.log(inverserChaine("hello"));
console.log(inverserChaine("YouCode"));
