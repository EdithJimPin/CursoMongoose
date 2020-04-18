require('../connection')

const Product = require('../models/Product')

const someFunction = async () => {
    //const result = await Product.deleteMany({name: 'Teclado'})
    //const result = await Product.deleteOne({name: 'Teclado'}) //Busca todos y solo eliminará el primero
    //const result = await Product.findOneAndDelete({name: 'laptop'}) //busca uno y lo elimina
    const result = await Product.findByIdAndDelete('5e9a425c65527ebf802ff244')
    console.log(result);
}

someFunction();