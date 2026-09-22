function remplacerCaractere(chaine, ancien, nouveau) {
  let cst = "";
  let i = 0;
  while (chaine[i] !== undefined) {
    if (chaine[i] === ancien) {
      cst += nouveau;
    } else {
      cst += chaine[i];
    }
    i++;
  }
  return cst;
}
console.log(remplacerCaractere("banana", "a", "o"));
console.log(remplacerCaractere("youcode", "o", "a"));