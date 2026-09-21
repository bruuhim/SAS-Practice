function additionnerTout(...args) {
  //   let cost = 0;
  //   for (i = 0; i < args.length; i++) {
  //     cost = args[i] + cost;
  //   }
  //   return cost;

  let sum = args.reduce((total, currentValue) => total + currentValue, 0);
  return sum;
}
console.log(additionnerTout(10, 20, 30, 40));
console.log(additionnerTout(100, 250, 380, 460));
