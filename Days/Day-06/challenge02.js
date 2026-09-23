let user = {
  username: "Ahmed",
  age: 22,
  city: "Marrakech",
  status: "student",
};

console.log(user.username);
console.log(user.age);

user.age = 24;
user.city = "agadir";
user.status = "graduated";
user.email = `${user.username.toLowerCase()}@gmail.com`

console.log(
  `${user.username} a ${user.age} ans, habite à ${user.city}, est actuellement ${user.status}, et son e-mail est ${user.email}`,
);