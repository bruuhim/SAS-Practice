function extraireChaine(chaine, debut, fin) {
  let cst = "";
  let i = debut;
  while (i < fin && chaine[i] !== undefined) {
    cst += chaine[i];
    i++
  }
  return cst
}
console.log(extraireChaine("JavaScript", 0, 4));
console.log(extraireChaine("JavaScript", 4, 10));