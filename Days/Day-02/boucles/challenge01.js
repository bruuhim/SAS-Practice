let prompt = require('prompt-sync')();

let choix = prompt('Nombre de participants : ')

for (let i = 1; i <= choix; i++) {
  console.log('Participant ' + i);
}