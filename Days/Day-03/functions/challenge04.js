function saluerClient(nom, titre = "Client") {
  return `Bonjour ${titre} ${nom}`;
}

console.log(saluerClient("Brahim"));
console.log(saluerClient("Brahim", "Dr."));
