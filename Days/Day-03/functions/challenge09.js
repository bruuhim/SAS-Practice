let MonCompteur = creerCompteur(10);

function creerCompteur(valeurInitiale = 0) {
  let counter = valeurInitiale;
  return function MonCompteur() {
    counter++;
    return counter;
  };
}

console.log(MonCompteur());
console.log(MonCompteur());
console.log(MonCompteur());
