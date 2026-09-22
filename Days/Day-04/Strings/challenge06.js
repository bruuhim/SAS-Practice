function repeterChaine(chaine, fois) {
  let cst = "";
  let i = 0;
  while (i < fois) {
    cst += chaine;
    i++;
  }
  return cst;
}
console.log(repeterChaine("JS", 3));
console.log(repeterChaine("JS", 6));
console.log(repeterChaine("YouCode", 4));