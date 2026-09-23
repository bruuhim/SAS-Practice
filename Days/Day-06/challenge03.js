let product = {
    name : "Pizza",
    price : 30,
    category : "Food",
    quantity : 50,
    available : true
}
console.log(product.name);
console.log(product.price);
console.log(product.category);
 
if (product.quantity > 0) {
    console.log(product.available);
} else {
    console.log(product.available = false);
}

console.log(product.price * product.quantity + " DH");