const shoppingCart = [
    { name: 'shoe', price: 1200 },
    { name: 'shirt', price: 2200 },
    { name: 'pant', price: 2200 },
    { name: 'belt', price: 200 },
]

function totelCost(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        sum = sum + product.price;
        // console.log();
    }
    return sum;
}


const expense = totelCost(shoppingCart);
console.log('Totel expance Today:', expense);