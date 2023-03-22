interface product {
    name: string;
    price: number;
}

let products: Array<product> = [
    {name: "Garrafa térmica PACCO 950ml", price: 350},
    {name: "Teclado Gamer Redragon Kumara", price: 450}
];

console.log(products[1]);

function listProducts(){
    console.log(products);
}

function saveProducts(name: string, price: number){
    let productObj :product = {
        name, price
    }

products.push(productObj);
}

function editProduct(nameField: string, name: string, price: number){
    let key = products.findIndex(p=> p.name === nameField);
    let productEdit : product = {name, price}
    products[key] = productEdit;
}

function deleteProduct(name: string){
    let key = products.findIndex(p=> p.name === name);
    products.splice (key, 1)
}
