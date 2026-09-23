let employee = {
    firstName: "Sara",
    lastName: "Amrani",
    salary: 7000,
    bonus: 1000,
    absenceDays: 2
};
let penalités = 200 * employee.absenceDays
let Salairefinal = employee.salary + employee.bonus - penalités

console.log(employee.salary + " DH");
console.log(employee.bonus + " DH");
console.log(penalités + " DH");
console.log(Salairefinal + " DH");