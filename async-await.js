//nos evita usar callbacks y nos permite utilizar promesos usando código asincrono
require('./connection')

const Product = require('./models/Product')

async function main(){
    const product = new Product({
        name: 'Teclado',
        description: 'gaming keyboard',
        price: 150
    })
    
    const productSaved = await product.save();
    return productSaved
}

main()
//Promesas
    .then(productSaved => console.log(productSaved))
    .catch(err => console.log(err))