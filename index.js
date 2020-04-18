require('./connection')

const Product = require('./models/Product')

const product = new Product({
    name: 'laptop',
    description: 'lenovo',
    price: 13500.59
})
//es un método async  "callbacks"
product.save((err, document) => {
    if(err) console.log(err);
    console.log(document)
})

console.log(product);
