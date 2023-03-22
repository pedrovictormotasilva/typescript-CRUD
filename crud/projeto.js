"use strict";
let products = [
    { name: "Garrafa térmica PACCO 950ml", price: 350 },
    { name: "Teclado Gamer Redragon Kumara", price: 450 }
];
console.log(products[1]);
function listProducts() {
    console.log(products);
}
function saveProducts(name, price) {
    let productObj = {
        name, price
    };
    products.push(productObj);
}
function editProduct(nameField, name, price) {
    let key = products.findIndex(p => p.name === nameField);
    let productEdit = { name, price };
    products[key] = productEdit;
}
function deleteProduct(name) {
    let key = products.findIndex(p => p.name === name);
    products.splice(key, 1);
}
