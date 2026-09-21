const formatMAD = (val) => val + " DH";

function convertirMontant(montant, taux, formatter) {
  let resultat = montant * taux;
  return formatter(resultat);
}

console.log(convertirMontant(200, 10.5, formatMAD));
