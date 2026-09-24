let temperatures = [22, 19, 30, 15, 28, 17, 25];
let swap = 0;
function diordre() {
  for (let i = 0; i < temperatures.length; i++) {
    for (let j = i + 1; j < temperatures.length; j++) {
      if (temperatures[i] < temperatures[j]) {
        let temp = temperatures[i];
        temperatures[i] = temperatures[j];
        temperatures[j] = temp;
        swap++;
      }
    }
  }
  console.log(swap);
  return temperatures;
}
console.log(diordre());
