function estPalindrome(chaine) {
  let cost = "";
  let i = 0;
  while (chaine[i] !== undefined) {
    cost = cost + chaine[chaine.length - 1 - i];
    i++;
  }
  if (cost === chaine) {
    return true;
  } else {
    return false;
  }
}

console.log(estPalindrome("kayak"));
console.log(estPalindrome("Youcode"));
