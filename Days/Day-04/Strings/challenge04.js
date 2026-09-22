function compterVoyelles(chaine) {
  let cost = "";
  let j = 0;

  while (chaine[j] !== undefined) {
    if (
      chaine[j] === "a" ||
      chaine[j] === "e" ||
      chaine[j] === "i" ||
      chaine[j] === "o" ||
      chaine[j] === "u" ||
      chaine[j] === "y"
    ) {
      cost++;
    }
    j++;
  }
  return cost;
}
console.log(compterVoyelles("developpeur"));
console.log(compterVoyelles("youcode"));
