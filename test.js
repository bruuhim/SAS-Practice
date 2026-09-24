let prompt = require("prompt-sync")();

let car = [
  { marque: "Dacia", category: "SUV", price: 350000, kilo: 100, dispo: true },
  {
    marque: "Toyota",
    category: "SUV",
    price: 150000,
    kilo: 10000,
    dispo: true,
  },
  {
    marque: "Fiat",
    category: "Berline",
    price: 100000,
    kilo: 150000,
    dispo: true,
  },
  {
    marque: "Dacia",
    category: "Sedane",
    price: 150000,
    kilo: 100000,
    dispo: false,
  },
];

function dispo() {
  let cardispo = 0;
  for (let i = 0; i < car.length; i++) {
    if (car[i].dispo === true) {
      cardispo++;
    }
  }
  return cardispo;
}

function moy() {
  let total = 0;
  for (let i = 0; i < car.length; i++) {
    total += car[i].price;
  }
  let moyen = total / car.length;
  return moyen;
}

function cat(cate) {
  let cst = 0;
  for (let i = 0; i < car.length; i++) {
    if (car[i].category === cate && car[i].dispo === true) cst++;
  }
  return cst;
}

function add() {
  let marque = prompt("Add a car : ");
  let category = prompt("Add category : ");
  let price = +prompt("Add price : ");
  let kilo = +prompt("Add a kilometrage : ");
  let dispo = prompt("Add dispo (true / false) : ");
  car.push({ marque, category, price, kilo, dispo });
  return car;
}

console.log(dispo());
console.log(moy());
console.log(cat("SUV"));
console.log(cat("Berline"));
console.log(cat("Sedane"));
console.log(add());
