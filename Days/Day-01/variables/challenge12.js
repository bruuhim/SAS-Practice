let code = 5832;

let digit4 = code % 10;
code = (code - digit4) / 10;

let digit3 = code % 10;
code = (code - digit3) / 10;

let digit2 = code % 10;
code = (code - digit2) / 10;

let digit1 = code % 10;
code = (code - digit1) / 10;

console.log("Premier chiffre : " + digit1);
console.log("Deuxième chiffre : " + digit2);
console.log("Troisième chiffre : " + digit3);
console.log("Quatrième chiffre : " + digit4);
