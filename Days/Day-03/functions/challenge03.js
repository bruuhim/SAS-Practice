function genererEmail(prenom, nom) {
  return `${prenom.toLowerCase()}.${nom.toLowerCase()}@entreprise.com`;
}

console.log(genererEmail("Tayeb", "Souini"));
console.log(genererEmail("BRAHIM", "TouSSa"));
