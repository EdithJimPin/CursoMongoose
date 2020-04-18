//esquema
//al requerir mongoose aplicamos un destructuring para extraer la propiedad de un objeto

const { Schema, model } = require('mongoose');

//Instaciamos una nueva clase
/*new Schema({
    name: String,
    description: String,
    price: Number
})*/

//Otra forma, como los tipos de datos estan dentro de unobjeto podemos añadir más propiedades
const productSchema = new Schema({
    name: {
        type: String
    },
    description: String,
    price: {
        type: Number,
        default: 0
    }
})

module.exports = model('Product', productSchema)