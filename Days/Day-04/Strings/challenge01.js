function compterCaracteres(chaine) {
    let cost = 0
    let i = 0
    while (chaine[i] !== undefined) {
        cost++
        i++
    }
    return cost
}
console.log(compterCaracteres("YouCode"));