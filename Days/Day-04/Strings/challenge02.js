function compterLettre(chaine, lettre) {
    let cost = 0
    let i = 0
    while (chaine[i] !== undefined) {
        if (chaine[i] === lettre) {
            cost++
        }
        i++
    }
    return cost
}
console.log(compterLettre("javascript", "a"));
console.log(compterLettre("YouCode", "d"));