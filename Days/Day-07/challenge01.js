let nombres = [4, 8, 15, 16, 23, 42];

function check(nomb) {
  for (let i = 0; i <= nombres.length - 1; i++) {
    if (nomb === nombres[i]) {
      return true;
    }
  }
  return false;
}
console.log(check(5));
console.log(check(15));