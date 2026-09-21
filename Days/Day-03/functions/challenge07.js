function obtenirHeureActuelle() {
  let date = new Date();
  return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
console.log(obtenirHeureActuelle());
