function grand(chaine) {
  let i = 0;
  let cst = "";
  let tab = [];

  while (chaine[i] !== " ") {
    cst += chaine[i];
    i++;
  }

  let mot = cst;
  tab.push(mot);
  cst = "";
  return tab;
}
console.log(grand("Java est un langage de programmation"));
